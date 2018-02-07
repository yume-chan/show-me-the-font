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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXBsdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ29vZ2xlLXBsdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdDQUFnQztBQUVoQyxNQUFNLE9BQU8sR0FBRztJQUNaLFNBQVM7SUFDVCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXRFLGlCQUFpQixTQUFrQjtJQUMvQixHQUFHLENBQUMsQ0FBQyxNQUFNLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsTUFBTSxHQUFHLEdBQUcsSUFBc0IsQ0FBQztZQUNuQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFxQixFQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUMzRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7d0JBQzdCLE1BQU0sQ0FBQztvQkFFWCxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFbkIsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUMzQixHQUFHLENBQUMsQ0FBQyxNQUFNLE1BQU0sSUFBSSxPQUFPLENBQUM7UUFDekIsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNqQyxPQUFPLENBQUMsSUFBZSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtJQUNsQixPQUFPLEVBQUUsSUFBSTtJQUNiLFNBQVMsRUFBRSxJQUFJO0NBQ2xCLENBQUMsQ0FBQyJ9