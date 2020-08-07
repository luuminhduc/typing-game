export function getRandomText(textArr) {
    return textArr.quotes[Math.floor(Math.random() * textArr.quotes.length)].quote;
}