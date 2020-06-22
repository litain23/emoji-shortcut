var emojiDOM = document.createElement('div');
emojiDOM.setAttribute('class', 'emoji-list');
document.body.appendChild(emojiDOM);

document.addEventListener('keypress', (event) => {
    if(event.key === ':') {
        renderEmojiDOM();
    }
});

function renderEmojiDOM() {
    emojiDOM.innerHTML = "<h1>hello</h1>";
    emojiDOM.style.visibility = 'visible';
}