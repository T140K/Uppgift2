let y = Math.floor(Math.random() * 100 + 1);

let guess = document.getElementById('counter');
guess = 0;

let guesser = document.getElementById('helper');

document.getElementById('guessBtn').onclick = function () {
    let x = document.getElementById('text-box').value;

    counter.innerHTML = 'You guessed ' + guess + ' number of times';

    if (x == y) {
        guess++;
        guesser.innerText = 'Good job you did it, it only took you ' + guess + ' tries';
        counter.innerHTML = 'Good job :D'
    }
    else if (x > y) {
        guess++;
        guesser.innerText = 'You need to guess lower';
    }
    else if (x < y) {
        guess++;
        guesser.innerHTML = 'You need to guess higher';
    }
}