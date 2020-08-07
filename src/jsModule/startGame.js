// import {hideModal} from './hideModal.js';
// import {getRandomText} from './getRandomText.js';
// import {checkProgress} from './checkProgress.js';
// import {showModal} from './showModal.js';
// import {updateTime} from './updateTime.js';

// export function startGame(isPlaying, randomText, dataText, time, timeInterval) {
//     const input = document.querySelector('input');
//     isPlaying = true;
//     hideModal();
//     input.value = '';
//     randomText = getRandomText(dataText);
//     time = randomText.split('').length;
//     displayText(randomText);
//     checkProgress();
//     timeInterval = setInterval(() => {
//         time--;
//         if(time <= 0) {
//             clearInterval(timeInterval);
//             showModal("You lost");
//         }
//         updateTime();
//     }, 1000)
// }