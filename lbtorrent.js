var title = document.querySelector('.headline-1.js-widont.prettify').textContent;
var year = document.querySelector('.number').textContent;

chrome.storage.sync.get(null, function(result) {
//ncore
if (result.ncore) {
    var node_nc = document.createElement('li');
    var link_nc = document.createElement('a');
    link_nc.appendChild(document.createTextNode("Search ncore"));
    link_nc.href = "https://ncore.pro/torrents.php?mire=" + title + " " + year;
    link_nc.target = "_blank";
    node_nc.appendChild(link_nc);
    document.querySelector('.js-actions-panel').appendChild(node_nc);
}

//Knaben
if (result.knaben) {
    var node_kn = document.createElement('li');
    var link_kn = document.createElement('a');
    link_kn.appendChild(document.createTextNode("Search Knaben"));
    link_kn.href = "https://knaben.net/search/?cat=Movies&q=" + title + " " + year + "#Seeders";
    link_kn.target = "_blank";
    node_kn.appendChild(link_kn);
    document.querySelector('.js-actions-panel').appendChild(node_kn);
}

//nyaa
if (result.nyaa) {
    var node_ny = document.createElement('li');
    var link_ny = document.createElement('a');
    link_ny.appendChild(document.createTextNode("Search Nyaa"));
    link_ny.href = "https://nyaa.si/?f=0&c=0_0&q=" + title + " " + year + "&s=seeders&o=desc";
    link_ny.target = "_blank";
    node_ny.appendChild(link_ny);
    document.querySelector('.js-actions-panel').appendChild(node_ny);
}

//rarbg
if (result.rarbg) {
    var node_rb = document.createElement('li');
    var link_rb = document.createElement('a');
    link_rb.appendChild(document.createTextNode("Search RARBG"));
    link_rb.href = "https://rarbg.to/torrents.php?category=14;48;17;44;45;47;50;51;52;42;46;54&search=" + title + " " + year + "&order=seeders&by=DESC";
    link_rb.target = "_blank";
    node_rb.appendChild(link_rb);
    document.querySelector('.js-actions-panel').appendChild(node_rb);
}

//piratebay
if (result.piratebay) {
    var node_pb = document.createElement('li');
    var link_pb = document.createElement('a');
    link_pb.appendChild(document.createTextNode("Search The Pirate Bay"));
    link_pb.href = "https://pirate-bays.net/search?q=" + title + " " + year;
    link_pb.target = "_blank";
    node_pb.appendChild(link_pb);
    document.querySelector('.js-actions-panel').appendChild(node_pb);
}});
