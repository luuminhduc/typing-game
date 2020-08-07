import {showModal} from './showModal.js';
export function checkWin(timeInterval, isPlaying) {
    const spanElLength = document.querySelectorAll('.text-container span').length;
    const correctLength = document.querySelectorAll('.correct').length;
    if(spanElLength == correctLength) {
        isPlaying = false;
        showModal("You won");
        clearInterval(timeInterval);
    }
}