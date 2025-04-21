var randomLoc = Math.floor(Math.random()*5);
var shiplocations = [randomLoc, randomLoc + 1, randomLoc+ 2];

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (!isSunk){
    guess = prompt("Ready!, Aim!, fire!(Enter a number 0-6): ");

    if(guess == null){
        alert("Okay Thanks");          
        break;          
    }

    guess=parseInt(guess,10);

    if (isNaN(guess) || guess < 0 || guess>6){
        alert("PLEASE ENTER A VALID NUMBER BETWEEN 1-6!!");
        continue;
    }

    guesses++;

    const hitIndex = shiplocations.indexOf(guess);

    if (hitIndex !== -1){
        alert("Hit!");
        shiplocations.splice(hitIndex, 1);
        hits++;
        if (shiplocations.length === 0){
            isSunk = true;
        }
    } else {
        alert("Miss!")
    }
}

var accuracy = (guesses > 0 ?(hits/guesses)*100:0). toFixed(2);
var stats = "You took " + guesses + " guesses to sink the battleship" + "\n"+accuracy + "%";
alert(stats)

// vae else var VALIDf random random false y] y
//  b  else if finally