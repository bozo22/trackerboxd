let title = document.querySelector('.headline-1.js-widont.prettify').textContent;
let year = document.querySelector('.number').textContent;

let trackers = {
    knaben: {text: "Search Knaben", link: "https://knaben.net/search/?cat=Movies&q=" + title + " " + year + "#Seeders"},
    ncore: {text: "Search ncore", link: "https://ncore.pro/torrents.php?mire=" + title + " " + year},
    nyaa: {text: "Search Nyaa", link: "https://nyaa.si/?f=0&c=0_0&q=" + title + " " + year + "&s=seeders&o=desc"},
    rarbg: {text: "Search RARBG", link: "https://rarbg.to/torrents.php?category=14;48;17;44;45;47;50;51;52;42;46;54&search=" + title + " " + year + "&order=seeders&by=DESC"},
    piratebay: {text: "Search The Pirate Bay", link: "https://pirate-bays.net/search?q=" + title + " " + year}
}

chrome.storage.sync.get(null, function(result) {
for (let i in result) {
    if (result[i]) {
        var node = document.createElement('li');
        var link = document.createElement('a');
        link.appendChild(document.createTextNode(trackers[i].text));
        link.href = trackers[i].link;
        link.target = "_blank";
        node.appendChild(link);
        document.querySelector('.js-actions-panel').appendChild(node);
    }
}})
