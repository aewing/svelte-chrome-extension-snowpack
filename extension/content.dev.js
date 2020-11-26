const hmrScript = document.createElement("script");
hmrScript.innerText = "window.HMR_WEBSOCKET_URL = 'ws://localhost:8080';";
document.body.appendChild(hmrScript);

const src = "http://localhost:8080/_dist_/index.js";
const script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", src);
document.body.appendChild(script);
