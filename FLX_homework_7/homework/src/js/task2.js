let attempts = 3;
let totalPrize = 0;
let again = 0;
const step = 1;
const milion = 1000000;
let maxPrize = 10; 
let maxNumber = 6;
let guess = false;
let play = confirm('Do you want to play a game?');
if (play) {
    let randomNumber = Math.ceil(Math.random() * maxNumber - step);
    while (attempts > 0) {
        let number = Number(prompt(`        Enter a number from 0 to  ${maxNumber - step}
        Attempts left: ${attempts}
        Total prize:  ${totalPrize}
        Possible prize on current attempt:  ${Math.floor(maxPrize)} $`, `0`));
        if (number === randomNumber && number[0] !== '') {
            totalPrize += Math.floor(maxPrize/2);
            guess = true;
            randomNumber = Math.ceil(Math.random() * maxNumber - step);
        } else {
            attempts--;
            maxPrize = Math.floor(maxPrize/2);
        }
        if (attempts === 0 && !guess) {
            alert('Thank you for a game. Your prize is ' + totalPrize);
            let playAgain = confirm(`Do you want to play again?`);
            if (playAgain) {
                attempts = 3;
                totalPrize = 0;
                maxPrize = 30;
                maxNumber = 11;
            }
        } else if (attempts === 0 && guess === true && again === 0) {
            let playAgain = confirm(`           Congratulation! Your prize is:  ${totalPrize} 
            Do you want to continue?`);
            if (playAgain) {
                randomNumber = Math.ceil(Math.random() * maxNumber - step);
                attempts = 3;
                maxPrize = 10;
                maxNumber = 6;
                again++;
                guess = false;
            } else {
                alert('Thank you for a game. Your prize is ' + totalPrize);
            }
        } else if (attempts === 0 && guess === true && again !== 0) {
            alert('Thank you for a game. Your prize is ' + totalPrize);
        }
    }
    if (totalPrize >= milion) {
        confirm('Congratulation! You become a millionaire');
    }
} else {
    confirm('You did not become a millionaire, but can.');
}