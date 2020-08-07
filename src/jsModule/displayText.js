export function displayText(text) {
    const textContainer = document.querySelector('.text-container');
    textContainer.innerHTML = '';
    const textArr = text.split('').forEach(el => {
        if(el === '’' || el === '‘') {
            el = "'";
        }
        if(el === "  ") {
            el = " ";
        }
        const spanEl = document.createElement('span');
        spanEl.innerText = el;
        textContainer.appendChild(spanEl);
    })
}