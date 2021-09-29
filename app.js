const select = document.querySelector('#playto');
const btn3 = document.querySelector('.btn-3');

let winningScore = 3;
let isWinning = false;

const p1 = {
    score: 0,
    participant: "Player1",
    button: document.querySelector('.btn-1'),
    btnText: document.querySelector('#btn1Text'),
    display: document.querySelector('#p1DisplayScore')
}

const p2 = {
    score: 0,
    participant: "Player2",
    button: document.querySelector('.btn-2'),
    btnText: document.querySelector('#btn2Text'),
    display: document.querySelector('#p2DisplayScore')
}





//  function for updating scores
function score(player, opponent) {
    if (!isWinning) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isWinning = true;
            player.display.classList.add("winColor");
            opponent.display.classList.add("looserColor");
            p1.button.classList.add("btn1Disabled");
            p2.button.classList.add("btn2Disabled");
            player.btnText.classList.remove('btn-text');
            opponent.btnText.classList.remove('btn-text');
            alert(`Congratulations! ${player.participant} Won👏🎉🎉🎉 \nPress reset to play again.`);
        }
    }
}

// function for restarting the game
function reset() {
    p1.score = 0;
    p2.score = 0;
    isWinning = false;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.display.classList.remove('winColor', 'looserColor');
    p2.display.classList.remove('winColor', 'looserColor');
    p1.button.classList.remove("btn1Disabled");
    p2.button.classList.remove("btn2Disabled");
    p1.btnText.classList.add('btn-text');
    p2.btnText.classList.add('btn-text');
}

// Reset Button
btn3.addEventListener('click', reset);

//  Player1 Button
p1.button.addEventListener('click', function () {
    score(p1, p2);
});

// Player2 Button
p2.button.addEventListener('click', function () {
    score(p2, p1);
});

// Select Value Change
select.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})