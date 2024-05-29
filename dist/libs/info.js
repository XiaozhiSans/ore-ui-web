export const info = {
	version: "20240529",
	update: "2024/05/29 22:15",
	init: () => {
		document.querySelector("[version]").innerText = info.version;
		 document.querySelector("[update]").innerText = info.update;
	}
}
