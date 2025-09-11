// NUMBER GUESSING NAME
 const min= 1;
 const max= 100;
 const ans= Math.floor(Math.random()* (max -min +1))+ min;
 
 let attempts =0;
 let guess;
 let running = true;
 while(running){
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("enter integer value");
    }
    else if(guess< min || guess> max){
        window.alert("Please enter valid number");

    }
    else{
        attempts++;
        if(guess < ans){
            window.alert("too low try again");
        }
        else if(guess> ans){
            window.prompt("TOO HIGH. TRY AGAIN");
        }
        else {
            window.alert(`ANSWER was correct! IT TOOK YOU ${attempts} attempt`);
            running = false;
        }
    }
 }