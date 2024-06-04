/**
 * oreui-web all
 * license: cc by-nc-sa 4.0
 * code by XiaozhiSans
 */
import data from "./oreuicfg.json" with {type:"json"};
import {info} from "./libs/info.js";
import {sounds, playSound} from "./libs/sounds.js";
import {oreui} from "./libs/main.js";
const cfg = data;

globalThis.playSound = playSound, globalThis.sounds = sounds;

globalThis.oreui = {
	main: oreui,
	info: info
}

document.addEventListener("DOMContentLoaded", () => {
	try {
		let link = document.createElement("link");
		link.rel = "stylesheet";
		link.type= "text/css";
		link.href= cfg.path + "all.init.css";

		document.querySelector("head").appendChild(link);

		if(cfg.button_click_sound)
		for(let i of document.querySelectorAll("button:not(.--no-click-sound, .-nocs, header>button)")) i.addEventListener("click", () => {playSound(sounds.click);});

		console.log(`[oreui] init oreui successful, version: ${info.version}(${info.date})`);
	} catch(error) {
		console.warn("[oreui] init oreui faild. ", error);
	}
});
