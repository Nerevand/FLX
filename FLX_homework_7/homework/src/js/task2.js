var attempts = 3;
var totalPrize = 0;
var again = 0;
var step = 1;
var milion = 1000000;
var maxPrize = 10;
var superGame = false;
var maxNumber = 6;
var guess = false;
var play = confirm('Do you want to play a game?');
var oneMore = false;
if (play) {
    var randomNumber = Math.ceil(Math.random() * maxNumber - step);
    while (attempts > 0) {
        var number = Number(prompt('Enter a number from 0 to ' + (maxNumber - step) +
            '\nAttempts left: ' + attempts +
            '\nTotal prize: ' + totalPrize +
            '\nPossible prize on current attempt: ' + Math.floor(maxPrize) + '$', '0'));
        if (number === randomNumber && number[0] !== '') {
            totalPrize += maxPrize;
            guess = true;
            randomNumber = Math.ceil(Math.random() * maxNumber - step);
            oneMore = confirm('one more?');
            if (oneMore) {
                attempts = 3;
                if (superGame) {
                    maxPrize = 30;
                } else {
                    maxPrize = 10;
                }
            } else {
                attempts = 0;
            }
        } else {
            attempts--;
            maxPrize = Math.floor(maxPrize / 2);
        }
        if (attempts === 0 && !guess) {
            alert('Thank you for a game. Your prize is ' + totalPrize + '$');
            let playAgain = confirm(`Do you want to play again?`);
            if (playAgain) {
                attempts = 3;
                totalPrize = 0;
                maxPrize = 10;
                maxNumber = 6;
            }
        } else if (attempts === 0 && guess && again === 0) {
            alert('Congratulation! Your prize is: ' + totalPrize + '$');
            let playAgain = confirm('Do you want to continue?');
            if (playAgain) {
                randomNumber = Math.ceil(Math.random() * maxNumber - step);
                attempts = 3;
                maxPrize = 30;
                maxNumber = 11;
                again++;
                guess = false;
                superGame = true;
            } else {
                alert('Thank you for a game. Your prize is ' + totalPrize + '$');
            }
        } else if (attempts === 0 && guess && again !== 0) {
            alert('Thank you for a game. Your prize is ' + totalPrize + '$');
        }
    }
    if (totalPrize >= milion) {
        alert('Congratulation! You become a millionaire');
    }
} else {
    alert('You did not become a millionaire, but can.');
}