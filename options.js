// Save options to sync storage
async function saveOptions(e) {
  e.preventDefault();
  let res = await fetch(chrome.runtime.getURL("/trackers.json"));
  let trackers = await res.json();

  let options = {};

  for (let tracker in trackers) {
    let id = "#" + tracker;
    options[tracker] = document.querySelector(id).checked;
  }

  chrome.storage.sync.clear();
  chrome.storage.sync.set(options);

  window.close();
}

// Add checkboxes
async function createOptions() {
  let res = await fetch(chrome.runtime.getURL("/trackers.json"));
  let trackers = await res.json();

  for (let tracker in trackers) {
    var node = document.createElement("div");
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", tracker);
    input.setAttribute("name", tracker);

    var label = document.createElement("label");
    label.setAttribute("for", tracker);
    label.appendChild(document.createTextNode(trackers[tracker].name));

    var br = document.createElement("br");

    node.appendChild(input);
    node.appendChild(label);
    node.appendChild(br);

    document.querySelector("#" + trackers[tracker].type).appendChild(node);
  }

  // Load checkbox states from sync storage
  chrome.storage.sync.get(null, function (result) {
    for (const [tracker, value] of Object.entries(result)) {
      let id = "#" + tracker;
      if (document.querySelector(id)) {
        document.querySelector(id).checked = value;
      }
    }
  });
}

// Add event listeners
document.addEventListener("DOMContentLoaded", createOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
