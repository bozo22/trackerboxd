// Get film data
let title = document
  .querySelector(".name.js-widont.prettify")
  .textContent.replace(/&/g, "")
  .replace(/’/g, "")
  .replace(/'/g, "")
  .replace(/\s+/g, " ")
  .trim();
let year = document.querySelector(".releaseyear").textContent;

// Create search buttons
function append_trackers(trackers) {
  chrome.storage.sync.get(null, function (result) {
    for (let i in result) {
      if (result[i] && trackers[i]) {
        var node = document.createElement("li");
        var link = document.createElement("a");
        link.appendChild(document.createTextNode("Search " + trackers[i].name));
        let url =
          trackers[i].link[0] +
          title +
          trackers[i].link[1] +
          year +
          trackers[i].link[2];
        link.href = url;
        link.target = "_blank";
        node.appendChild(link);
        document.querySelector(".js-actions-panel").appendChild(node);
      }
    }
  });
}

fetch(chrome.runtime.getURL("/trackers.json"))
  .then((resp) => resp.json())
  .then((trackers) => {
    append_trackers(trackers);
  });
