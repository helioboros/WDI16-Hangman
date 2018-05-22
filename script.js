const testArray = ["ae", "aei", "aeio", "aeiou", "aeiouy"]
let chosenArray = testArray
let randomWord = (chosenArray[(Math.floor(Math.random() * chosenArray.length))])
let lives = 6
let completionProgress = randomWord.length

lifeUpdate()
createWordTemplate()

// Refreshes number of lives for when you lose one or reset the game
function lifeUpdate() {
    $("h2").text(lives + " lives remaining")
}

// To update the display.
function createWordTemplate() {
    let answerArray = []
    for (let i=0; i < (randomWord.length); i++) {
        answerArray[i] = "_"
    }
    $("h3").text(answerArray.join(" "))
}



// reset function
function reset() {
    guess = ""
    lives = 6
    lifeUpdate()
    $("h3").empty()
    randomWord = (chosenArray[(Math.floor(Math.random() * chosenArray.length))])
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
    $(".button1").click(function () {
        $(this).fadeOut("slow");
    })
    $("#reset").click(reset)
})