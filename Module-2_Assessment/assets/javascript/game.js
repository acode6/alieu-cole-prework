

//global variables
var netFlixOpening = document.getElementsByClassName("netflix-startup")[0];
var orangeTheme = document.getElementsByClassName("orange-theme")[0];
var strangerTheme = document.getElementsByClassName("stranger-theme")[0];
var narcosTheme = document.getElementsByClassName("narcos-theme")[0];
var dareTheme = document.getElementsByClassName("dare-theme")[0];
var jessicaTheme = document.getElementsByClassName("jessica-theme")[0];
var lukeTheme = document.getElementsByClassName("luke-theme")[0];
var correctPress = document.getElementsByClassName("correct-press-sound")[0];
var wrongPress = document.getElementsByClassName("wrong-press-sound")[0];


//Html divs
var ShowImage = document.getElementsByClassName("show-Poster")[0];
var winsDiv = document.getElementsByClassName("wins")[0];
var lossesDiv = document.getElementsByClassName("lose")[0];
var guessesRemainingDiv = document.getElementsByClassName("remaining-guesses")[0];
var guessedLettersDiv = document.getElementsByClassName("guessed-letters")[0];
var currentShowP = document.getElementsByClassName("current-show")[0];
var startMessageDiv = document.getElementsByClassName("start-message")[0];
var GuessesDiv = document.getElementsByClassName("guesses")[0];

var currentShowDiv = document.getElementsByClassName("current-show")[0];
var currentScoreDiv = document.getElementsByClassName("score-board")[0];
var gameImageWrapper = document.getElementsByClassName("game-image-wrapper")[0];



const gameObject ={
wins : 0,
losses: 0,
remainingGuesses : 10,
startedGame: false,
firstGame : true,
alphabetArr : [],
guessedLetters : [],
currentShow : [],
netflixShows : ['orange is the new black', 'narcos', 'stranger things', 'dare devil', 'jessica jones', 'luke cage', 'ozarks', 'hill house'],
randShow:[],
showImageLetters:[],
imageOut: null,
span:null,
playGame: function(){
    
    //if you havn't started the game then reset everything
     
        this.firstGame = false;
        this.startedGame = true;
        this.remainingGuesses = 10;
        this.currentShow = []; 
        this.randShow = [];
        this.guessedLetters = [];
        this.showImageLetters = [];
        
      
    
  
    //setting basics of game

     
   guessesRemainingDiv.innerHTML = this.remainingGuesses;
   guessedLettersDiv.innerHTML = "";
    startMessageDiv.style.display = "none";
    currentShowDiv.style.display = "block";
    currentScoreDiv.style.display = "block";
    GuessesDiv.style.display = "block";

//populating the array of alphabets  
for (var i = 97; i <= 122; i++) {

    this.alphabetArr[this.alphabetArr.length] = String.fromCharCode(i);
    
console.log(`${String.fromCharCode(i)}`);
}



//Select a show from the netflix shows array and assign it
 this.randShow = this.netflixShows[Math.floor(Math.random() * this.netflixShows.length)];
 
 //Check to see which show it is and then play theme song
 if(this.randShow === 'narcos')
 {
   
     narcosTheme.play();
 }
else if(this.randShow === 'orange is the new black')
{
   
    orangeTheme.play();
}

else if(this.randShow === 'stranger things')
{
    
    strangerTheme.play();
}
else if(this.randShow === 'dare devil')
 {
   
     dareTheme.play();
 }
else if(this.randShow === 'jessica jones')
{
   
    jessicaTheme.play();
}

else if(this.randShow === 'luke cage')
{
    
    lukeTheme.play();
}


//Placeholder for word to display on the screen
for(var i = 0; i<this.randShow.length; i++){
   // Creates a span with class of letter
   var span = document.createElement("span");
   span.setAttribute("class","letter");

    if (this.randShow[i] === " ") {
        span.textContent = " "; 
        span.setAttribute("class","letter space"); 
        this.currentShow[i] = " "; 
        this.showImageLetters[i] = "-"; 
    } 
 
    else 
    {
        span.textContent = "_"; 
        this.currentShow[i] = "_"; 
        this.showImageLetters[i] = this.randShow[i].toLocaleLowerCase(); 
    }
    

   currentShowP.appendChild(span); 
}
    
    this.imageOut = this.showImageLetters.join(""); 
    console.log(`Image: ${this.imageOut}`);
    ShowImage.setAttribute("src", "assets/images/" + this.imageOut +".jpg"); 
    
    
    console.log(this.randShow);
  

}
};

//get input event here/where game plays
document.onkeyup = function(event) {

    //if a game has been started
    if (gameObject.startedGame) {
    
        var userGuess = event.key.toLowerCase();

        var letterSpan = document.getElementsByClassName("letter");
        var isGuessCorrect = false;

        console.log(`${userGuess}`);
        if(gameObject.alphabetArr.includes(userGuess)) {
            
            
            // Checks for a match and assigns correctly guessed letters to the appropriate place in the current word
            for (var i = 0; i < gameObject.randShow.length; i++) {
        
                if (gameObject.randShow[i] === userGuess) {
                    letterSpan[i].innerHTML = userGuess;
                    gameObject.currentShow[i] = userGuess;
                    isGuessCorrect = true; 
                }
            }

            if (isGuessCorrect) { // Plays correct guess sound
                correctPress.currentTime = 0;
                correctPress.play();
            } else { // Plays wrong guess sound
                wrongPress.currentTime = 0;
                wrongPress.play();
            }
        }
        
        
        if (!gameObject.guessedLetters.includes(userGuess) && gameObject.alphabetArr.includes(userGuess) && !gameObject.randShow.includes(userGuess)) {
             gameObject.remainingGuesses--;
            console.log(`${gameObject.remainingGuesses}`);
            gameObject.guessedLetters.push(userGuess);
        }

      

        var winningWord = gameObject.currentShow.join("");

        if (winningWord === gameObject.randShow) {
            console.debug(`Theme songs`);
            var ThemeSongs = document.getElementsByClassName("themes");
            for(var i = 0; i < ThemeSongs.length; i++) {
                console.debug(`Theme : ${ThemeSongs[i]}`);
                ThemeSongs[i].pause();
                ThemeSongs[i].currentTime = 0;
            }
           
            startMessageDiv.innerHTML =
            "<h2 >You win! The show is <br><span>" +
            gameObject.randShow + "</span></h2>" +
            "<h3 class='get-started pulse'>Press space to play again!</h3>";

            

            gameObject.wins++;
          gameObject.startedGame = false;
         // currentShowP.remove(span);
            // Sets which game objects display
            startMessageDiv.display = "block"; 
            currentShowDiv.style.display = "none";
        }

      
        if (gameObject.remainingGuesses === 0) {
            var ThemeSongs = document.getElementsByClassName("themes");
            for(var i = 0; i < ThemeSongs.length; i++) {
                ThemeSongs[i].pause();
                ThemeSongs[i].currentTime = 0;
            }
            // Message that displays when winner loses
            startMessageDiv.innerHTML =
            "<h2 class='game-end'>Sorry! You Lose.<br><span>" +
            gameObject.randShow +
            " was the correct show.</span> </h2>" +
            "<h3 class='get-started pulse'>Press space to play again!</h3>";

          // currentShowP.remove(span);

            gameObject.losses++;

           gameObject.startedGame = false;
            
            // Sets which game objects display
            startMessageDiv.display = "block";
            currentShowDiv.style.display = "none"
        }

        // Updates scoreboard values in the browser
        guessedLettersDiv.innerHTML = gameObject.guessedLetters.join(" ");
        winsDiv.innerHTML = gameObject.wins;
        lossesDiv.innerHTML = gameObject.losses;
        guessesRemainingDiv.innerHTML = gameObject.remainingGuesses;
        
     
         
    } 
    else 
    {
        
        var keyPress = event.key;
         netFlixOpening.play();
     //start game with space 
        if (keyPress === " " || gameObject.firstGame) {
            
            gameObject.playGame();
        }
    }
};

