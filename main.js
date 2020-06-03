
var secretNumber = randomNumber();

function randomNumber(){
    var answer = Math.ceil(Math.random()*100);
    return answer;
}

function checkGuess(){
// take guess

var guess = document.getElementById("user-guess")[0].value

// compare

if (guess == secretNumber){
    displayOutput("win");
}
else if (guess > secretNumber){
    displayOutput("high");
}
else if (guess < secretNumber){
    displayOutput("low");
}
else{
    displayOutput("error");
}
// display output
  // image
  // text
}

function displayOutput(result){
    var imageName = "";
    var caption = "";
    switch(result){
        case "win":
            imageName = "winner.JPG";
            caption = "You did it! You Win!"
            break;
        case "high":
            imageName = "tooHigh.JPG";
            caption = "Too High!"
            break;
        case "low":
            imageName = "tooLow.JPG";
            caption = "Too Low!"
            break;
        case "error":
            imageName = "nan.JPG";
            caption = "That's Not a Number!"
            break;
    }
    document.getElementById("display-image").src = "./images/" + imageName;
    document.getElementById("display-message").innerText = caption;
}

function reset(){}