import {checkProgress} from './checkProgress.js';
import { checkWin } from './checkWin.js';
export function checkCorrect(timeInterval, isPlaying) {
    const input = document.querySelector('.input');
    const inputValueArr = input.value.trim().split('');
    const spanEls = document.querySelectorAll('.text-container span');
    spanEls.forEach((el, idx) => {
        const textCharater = el.innerText;
        if(inputValueArr[idx] == textCharater) {
            el.classList.remove('incorrect');
            el.classList.add('correct');
            checkProgress();
            checkWin(timeInterval, isPlaying);
        }else if(inputValueArr[idx] == null) {
            el.classList.remove('correct');
            el.classList.remove('incorrect');
        }else{
            el.classList.remove('correct')
            el.classList.add('incorrect');
        }
    })
}