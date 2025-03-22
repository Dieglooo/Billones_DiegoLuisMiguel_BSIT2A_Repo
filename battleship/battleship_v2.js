var randomLoc = Math.floor(Math.random()*5);

    var location1 = randomLoc;
    var location2 = location1+1;
    var location3 = location2+1;

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

        if (guess < 0 || guess > 6 ){
            alert("PLEASE ENTER A VALID NUMBER!!")
        }else {
            guesses +=1;

            if(guess == location1 || guess == location2 || guess == location3 ) {
                hits +=1;
                alert("Hit 😱");

                if (hits == 3){
                    isSunk = true;
                    alert("Battleship has now sunk!😁😁")
                }
            } else {
                alert("Miss!");
            }
        }
     }



var accuracy = (guesses > 0 ?(hits/guesses)*100:0). toFixed(2);
var stats = "You took " + guesses + " guesses to sink the battleship" + "\n"+accuracy + "%";
alert(stats)


