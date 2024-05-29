(() => {
	let link = document.createElement("link");
	link.rel = "stylesheet";
	link.type= "text/css";
	link.href= "./dist/init.css";

	document.querySelector("head").appendChild(link);
})()
import {info} from "./libs/info.js";
window.onload = info.init();

import {sounds, playSound} from "./libs/sounds.js";
globalThis.sounds = sounds, globalThis.playSound = playSound;

import {main} from "./libs/main.js";
globalThis.main = main;
