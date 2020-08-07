import {uri} from './jsModule/uri.js';
import {getData} from './jsModule/getData.js';
import {getRandomText} from './jsModule/getRandomText.js';
import {displayText} from './jsModule/displayText.js';
import {checkProgress} from './jsModule/checkProgress.js';
import {checkCorrect} from './jsModule/checkCorrect.js';
import {hideModal} from './jsModule/hideModal.js';
import {showModal} from './jsModule/showModal.js';
import {updateTime} from './jsModule/updateTime.js';
import './styles/main.scss';

const input = document.querySelector('.input');
const timeEl = document.querySelector('.time');
let dataText;
let randomText;
let time = 0;
let timeInterval;
let isPlaying = true;



getData(uri).then((data) => {
    dataText = data;
    startGame();
});

input.addEventListener('input', (e) => {
    if(isPlaying) {
        checkCorrect(timeInterval, isPlaying);
    }
})

input.addEventListener('focus', () => {
    window.addEventListener('keyup', (e) => {
        if(e.key === 'Backspace'){
            checkProgress();
        };
    })
})

window.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')) {
        startGame();
    }
})

function startGame() {
    isPlaying = true;
    hideModal();
    input.value = '';
    randomText = getRandomText(dataText);
    time = randomText.split('').length;
    displayText(randomText);
    checkProgress();
    timeInterval = setInterval(() => {
        time--;
        if(time <= 0) {
            isPlaying == false;
            clearInterval(timeInterval);
            showModal("You lost");
        }
        updateTime(time);
    }, 1000)
}