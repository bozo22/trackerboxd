let title = document.querySelector('.headline-1.js-widont.prettify').textContent.replace(/&/g, '').replace(/’/g, "'").replace(/\s+/g, ' ').trim();
let year = document.querySelector('.number').textContent;

let trackers = {
    knaben: {text: "Search Knaben", link: "https://knaben.net/search/?q=" + title + " " + year + "#Seeders"},
    ncore: {text: "Search ncore", link: "https://ncore.pro/torrents.php?mire=" + title + " " + year},
    nyaa: {text: "Search Nyaa", link: "https://nyaa.si/?f=0&c=0_0&q=" + title + " " + year + "&s=seeders&o=desc"},
    rarbg: {text: "Search RARBG", link: "https://rarbg.to/torrents.php?search=" + title + " " + year + "&order=seeders&by=DESC"},
    piratebay: {text: "Search The Pirate Bay", link: "https://pirate-bays.net/search?q=" + title + " " + year},
    yts: {text: "Search YTS", link: "https://yts.mx/browse-movies/" + title + " " + year + "/all/all/0/seeds/0/all"},
    ttsx: {text: "Search 1337x", link: "https://www.1377x.to/sort-search/" + title + " " + year + "/seeders/desc/1/"},
    rutracker: {text: "Search RuTracker", link: "https://rutracker.org/forum/tracker.php?nm=" + title + " " + year}
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
