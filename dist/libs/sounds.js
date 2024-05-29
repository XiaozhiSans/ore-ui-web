export const sounds = {
	click: new Audio("assets/sounds/release-7c974.ogg"),
	hide: new Audio("assets/sounds/modal_hide-2341f.ogg"),
	pop: new Audio("assets/sounds/snes_pop-7a6d3.ogg")
}

export const playSound = sound => {
	sound.play();
	return sound;
}