import kaboom from "kaboom";

export const kaboomCanvas = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("game"),    
});