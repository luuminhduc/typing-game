export function updateTime(time) {
    const timeEl = document.querySelector('.time');
    timeEl.innerText = `${time}s`;
}