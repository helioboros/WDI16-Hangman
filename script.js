const randomArray = [subjectAnimals, subjectPlants]
const subjectAnimals = ["alligator", "ant", "bear", "bee", "bird", "camel", "cat", "cheetah", "chicken", "chimpanzee", "cow", "crocodile", "deer", "dog", "dolphin", "duck", "eagle", "elephant", "fish", "fly", "fox", "frog", "giraffe", "goat", "goldfish", "hamster", "hippopotamus", "horse", "kangaroo", "kitten", "lion", "lobster", "monkey", "octopus", "owl", "panda", "pig", "puppy", "rabbit", "rat", "scorpion", "seal", "shark", "sheep", "snail", "snake", "spider", "squirrel", "tiger", "turtle", "wolf", "zebra"]
const subjectPlants = ["hydrangea", "hyacinth", "rose"]
let chosenArray = [(Math.floor(Math.random() * randomArray.length))]
let randomWord = (chosenArray[(Math.floor(Math.random() * chosenArray.length))])
let lives = 6
let completionProgress = randomWord.length
let answerArray = []
let guess
let subjectName

lifeUpdate()
createWordTemplate()
subjectDisplayUpdate()

function subjectDisplayUpdate() {
    if (chosenArray == subjectAnimals) {
        subjectName = "Animals"
    } else if (chosenArray == subjectPlants) {
        subjectName = "Plants"
    } else {subjectName = "There's a problem here."}
    $("h1").text("Current topic: " + subjectName)
}

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

// Resets everything and chooses a random word from the chosen array
function reset() {
    answerArray = []
    guess = ""
    lives = 6
    lifeUpdate()
    randomWord = (chosenArray[(Math.floor(Math.random() * chosenArray.length))])
    completionProgress = randomWord.length
    $("h3").empty()
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