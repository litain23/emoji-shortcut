class EmojiController {
    constructor() {
        this.isVisible = false;
        this.emojiString = "";
        this.selectLi = 0;
        this.src;
    }

}


const emojiDOM = document.createElement('div');
emojiDOM.setAttribute('class', 'emoji-list');
document.body.appendChild(emojiDOM);

const emojiController = new EmojiController();


document.addEventListener('keypress', (event) => {
    console.log(event);
    const tagName = event.target.tagName;
    if(tagName === "INPUT" || tagName === "TEXTAREA") {
        if(event.key === ':') {
            renderEmojiDOM();
            emojiController.isVisible = true;
            emojiController.src = event.target;
        }
    }
});


// arrow 화살표를 위해 처리 (keypress 에서는 작동을 안함)
document.addEventListener('keydown', (event) => {
    if(emojiController.isVisible) {
        // arrow down
        if(event.keyCode === 40) {
            const emojiList = emojiDOM.querySelectorAll("li");
            emojiList[emojiController.selectLi].classList.remove("active");
            emojiController.selectLi++;
            if(emojiList.length < emojiController.selectLi + 1) {
                emojiController.selectLi = 0;
            }
            emojiList[emojiController.selectLi].classList.add("active");
        // arrow up
        } else if(event.keyCode === 38) {
            const emojiList = emojiDOM.querySelectorAll("li");
            emojiList[emojiController.selectLi].classList.remove("active");
            emojiController.selectLi--;
            console.log(emojiController.selectLi);
            if(emojiController.selectLi < 0) {
                emojiController.selectLi = emojiList.length - 1;
            }
            emojiList[emojiController.selectLi].classList.add("active");
        // enter or tab
        } else if(event.keyCode ===  13 || event.keyCode === 9) {
            event.preventDefault();
            const inputArea = emojiController.src;
            const emoji = emojiDOM.querySelector("li.active").innerText;
            inputArea.value += emoji;
        } 
    }
});


function renderEmojiDOM() {
    emojiDOM.innerHTML = `
        <ul>
            <li class="active">👍</li>
            <li>list 2</li>
            <li>list 3</li>
            <li>list 4</li>
            <li>list 5</li>
        </ul> 
    `
    emojiDOM.style.visibility = 'visible';
}

