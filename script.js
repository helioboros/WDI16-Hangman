const testArray = ["ae", "aei", "aeio", "aeiou", "aeiouy"]
let chosenArray = testArray
let randomWord = (chosenArray[(Math.floor(Math.random() * chosenArray.length))])
let lives = 6
let completionProgress = randomWord.length
let answerArray = []
let guessed

function guess(letter){
    guessed = letter
    console.log(guessed)
}

lifeUpdate()
createWordTemplate()

// Refreshes number of lives for when you lose one or reset the game
function lifeUpdate() {
    $("h2").text(lives + " lives remaining")
}

// To update the display.
function createWordTemplate() {
    for (let i = 0; i < (randomWord.length); i++) {
        answerArray[i] = "_"
    }
    $("h3").text(answerArray.join(" "))
}

// have some kind of function to make this only playable when completion prog
// is more than 0?
// a function that it calls when progress reaches 0..

function letterVerify() {
    // let correct = false
    randomWord.split("")
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === guessed) {
            answerArray[i] = guessed
            $("h3").text(answerArray.join(" "))
            completionProgress--
            // correct = true
        }
    }
    // if (correct == false) {
    //     lives--
    // }
}

// reset function
function reset() {
    guess = ""
    lives = 6
    lifeUpdate()
    $("h3").empty()
    randomWord = (chosenArray[(Math.floor(Math.random() * chosenArray.length))])
    completionProgress = randomWord.length
    createWordTemplate()
    $(".button1").show()
}

//need a way to assign each button's id to var guess

const interactable = {
    //put the things that happen when users click buttons here. wait no
    //those go below
}

$(() => {
    //BUTTONS.
    $(".button1").click(guess)
    $(".button1").click(function () {
        $(this).fadeOut("slow");
    })
    $("#reset").click(reset)
})