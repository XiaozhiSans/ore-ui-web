export const Sounds = function(path) {
	this.click = new Audio(path + "sounds/release-7c974.ogg");
	this.hide = new Audio(path + "sounds/modal_hide-2341f.ogg");
	this.pop = new Audio(path + "sounds/snes_pop-7a6d3.ogg");
}

export const playSound = sound => {
	sound.play();
	return sound;
}