const testArray = ["ae", "aei", "aeio", "aeiou", "aeiouy"]
let chosenArray = testArray
let randomWord = (chosenArray[(Math.floor(Math.random() * chosenArray.length))])
let lives = 6
let completionProgress = randomWord.length
let answerArray = []
let guess

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


// logs clicked letter
function choice(letter){
    guess = letter
    let correct = false
    randomWord.split("")
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === guess) {
            answerArray[i] = guess
            $("h3").text(answerArray.join(" "))
            completionProgress--
            correct = true
        }
    }
    if (correct === false) {
        lives--
        lifeUpdate()
    }
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

$(() => {
    //BUTTONS. the click event that handles letters is in the HTML for cleanliness
    $(".button1").click(function () {
        $(this).fadeOut("slow");
    })
    $("#reset").click(reset)
})