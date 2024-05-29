export const main = {
	closeSider: () => {
		playSound(sounds.hide);
		document.querySelector("sider").style.cssText = "/* width: 0; opacity: 0; */ left: calc(-100vw);";
		document.querySelector("button#sidebar").setAttribute("onclick", "main.sidebar();");
		document.querySelector("mask").style.cssText = "opacity: 0; pointer-events: none;";
	},
	sidebar: () => {
		let mask = document.querySelector("mask");
		playSound(sounds.pop);
		document.querySelector("sider").style.cssText = "/* width: 260px; opacity: 1; */ left: 0;";
		document.querySelector("button#sidebar").setAttribute("onclick", "main.closeSider();");
		mask.style.cssText = "opacity: 1; pointer-events: unset;";
		mask.setAttribute("onclick", "main.closeSider();");
		
	}
}
