// 점프 카운트 점수
let count = 0;

// 게임 시작
function start() {
    let start = document.getElementById('startBtn');
    start.onclick = function() {
        let poop = document.getElementById('poop');
        poop.removeAttribute("class");
        poop.setAttribute("class", "poopAnimate");
    }
}

// 고양이 점프
window.onload = function btnClick() {
    let jumpBtn = document.getElementById('jumpBtn');
    jumpBtn.onclick = function() {
        let cat = document.getElementById('cat');
        cat.removeAttribute("class");
        cat.setAttribute("class", "catAnimate");
        setTimeout(function() {
            cat.removeAttribute('class');
        }, 500);
        count++;
        let score = document.getElementById('score');
        score.innerText = count;
    }
}

// 고양이 충돌
let catDead = setInterval(function() {
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue('top'));
    let poopLeft = parseInt(window.getComputedStyle(poop).getPropertyValue('left'));
    if(poopLeft <75 && poopLeft>0 && catTop >= 200) {
        alert('으악!');
        poop.removeAttribute("class");
        count = 0;
        score.innerText = null;
    }
},10)

// 게임 종료
function stop() {
    let poop = document.getElementById('poop');
    poop.removeAttribute("class");
}