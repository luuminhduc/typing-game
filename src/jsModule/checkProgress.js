export function checkProgress () {
    const progress = document.querySelector('.progress');
    const spanEls = document.querySelectorAll('.text-container span');
    const correctLength = document.querySelectorAll('.correct').length;
    if(correctLength == 0) {
        progress.style.width = 0 + 'px';
    }else{
        progress.style.width = `${correctLength / spanEls.length * 100}%`;
    }
}