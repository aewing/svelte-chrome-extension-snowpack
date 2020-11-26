const src = chrome.extension.getURL("build/_dist_/index.js");
const script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", src);
document.body.appendChild(script);
