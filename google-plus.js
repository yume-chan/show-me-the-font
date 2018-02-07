"use strict";
/// <reference types="chrome" />
const targets = [
    ".m3JvWd",
    ".wftCae",
    ".J3fjEb.qhIQqf",
    ".Tuxepf",
    ".Tq8tEc.BHZoyf",
    `[jsname="ndVxLd"]`,
    ".ahil4d.qhIQqf",
];
const container = document.getElementsByClassName("jx5iDb pd4VHb")[0];
function process(container) {
    for (const target of targets) {
        for (const item of container.querySelectorAll(target)) {
            const div = item;
            if (div.textContent != "") {
                chrome.i18n.detectLanguage(div.textContent, result => {
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
            process(node);
}).observe(container, {
    subtree: true,
    childList: true
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXBsdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29nbGUtcGx1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQWdDO0FBRWhDLE1BQU0sT0FBTyxHQUFHO0lBQ1osU0FBUztJQUNULFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25CLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdEUsaUJBQWlCLFNBQWtCO0lBQy9CLEdBQUcsQ0FBQyxDQUFDLE1BQU0sTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxNQUFNLEdBQUcsR0FBRyxJQUFzQixDQUFDO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQXFCLEVBQUUsTUFBTSxDQUFDLEVBQUU7b0JBQzNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQzt3QkFDN0IsTUFBTSxDQUFDO29CQUVYLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVuQixJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQzNCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sTUFBTSxJQUFJLE9BQU8sQ0FBQztRQUN6QixHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxJQUFlLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO0lBQ2xCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsU0FBUyxFQUFFLElBQUk7Q0FDbEIsQ0FBQyxDQUFDIn0=