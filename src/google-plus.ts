/// <reference types="chrome" />

const targets = [
    ".m3JvWd", // Username
    ".wftCae", // Post Content,
    ".J3fjEb.qhIQqf", // Post Content With Media
    ".Tuxepf", // Media Title
    ".Tq8tEc.BHZoyf", // First Comment
    `[jsname="ndVxLd"]`, // Comments
    ".ahil4d.qhIQqf", // Reshare Content
];

const container = document.getElementsByClassName("jx5iDb pd4VHb")[0];

function process(container: Element) {
    for (const target of targets) {
        for (const item of container.querySelectorAll(target)) {
            const div = item as HTMLDivElement;
            if (div.textContent != "") {
                chrome.i18n.detectLanguage(div.textContent as string, result => {
                    if (result.languages.length == 0)
                        return;

                    div.lang = result.languages[0].language;
                });
            }
        }
    }
}

process(container);

new MutationObserver(records => {
    for (const record of records)
        for (const node of record.addedNodes)
            process(node as Element);
}).observe(container, {
    subtree: true,
    childList: true
});
