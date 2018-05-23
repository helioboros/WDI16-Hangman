const randomArrays = {
    subjectAnimals: ["alligator", "ant", "bear", "bee", "bird", "camel", "cat", "cheetah", "chicken", "chimpanzee", "cow", "crocodile", "deer", "dog", "dolphin", "duck", "eagle", "elephant", "fish", "fly", "fox", "frog", "giraffe", "goat", "goldfish", "hamster", "hippopotamus", "horse", "kangaroo", "kitten", "lion", "lobster", "monkey", "octopus", "owl", "panda", "pig", "puppy", "rabbit", "rat", "scorpion", "seal", "shark", "sheep", "snail", "snake", "spider", "squirrel", "tiger", "turtle", "wolf", "zebra"],
    subjectPlants: ["orchid", "hydrangea", "hyacinth", "rose", "lily", "lotus"],
}
let arrayNames = Object.keys(randomArrays)
let chosenArrayName = arrayNames[(Math.floor(Math.random() * arrayNames.length))]
let randomWord = (randomArrays[chosenArrayName][(Math.floor(Math.random() * randomArrays[chosenArrayName].length))])
let lives = 6
let completionProgress = randomWord.length
let answerArray = []
let guess
let subjectName
let wins = 0
let losses = 0

// Points and losses could display as a win/loss tally.

subject()
lifeUpdate()
createWordTemplate()
subjectDisplayUpdate()
scoreboard()

// Refreshes number of lives; for when you lose one or reset the game
function lifeUpdate() {
    $(".lives").text("Lives: " + lives)
    if (lives == 6) {
        $(".gallows").html(`
<p>___________</p>
<p>|/               |</p>
<p>|                |</p>
<p>|</p>
<p>|</p>
<p>|</p>
<p>|</p>
<p>|__________</p>
    `)
    } else if (lives == 5) {
        $(".gallows").html(`
<p>___________</p>
<p>|/               |</p>
<p>|                |</p>
<p>|               O</p>
<p>|</p>
<p>|</p>
<p>|</p>
<p>|__________</p>
    `)
    } else if (lives == 4) {
        $(".gallows").html(`
<p>___________</p>
<p>|/               |</p>
<p>|                |</p>
<p>|               O</p>
<p>|                |</p>
<p>|</p>
<p>|</p>
<p>|__________</p>
    `)
    } else if (lives == 3) {
        $(".gallows").html(`
<p>___________</p>
<p>|/               |</p>
<p>|                |</p>
<p>|               O</p>
<p>|               /|</p>
<p>|</p>
<p>|</p>
<p>|__________</p>
    `)
    } else if (lives == 2) {
        $(".gallows").html(`
<p>___________</p>
<p>|/               |</p>
<p>|                |</p>
<p>|               O</p>
<p>|               /|\\</p>
<p>|</p>
<p>|</p>
<p>|__________</p>
    `)
    } else if (lives == 1) {
        $(".gallows").html(`
<p>___________</p>
<p>|/               |</p>
<p>|                |</p>
<p>|               O</p>
<p>|               /|\\</p>
<p>|               /</p>
<p>|</p>
<p>|__________</p>
    `)
    } else if (lives == 0) {
        $(".gallows").html(`
<p>___________</p>
<p>|/               |</p>
<p>|                |</p>
<p>|               O</p>
<p>|               /|\\</p>
<p>|               / \\</p>
<p>|</p>
<p>|__________</p>
    `)
    }
}

function scoreboard() {
    $(".wins").text("Wins: " + wins)
    $(".losses").text("Losses: " + losses)
}

// To update the display.
function createWordTemplate() {
    for (let i = 0; i < (randomWord.length); i++) {
        answerArray[i] = "_"
    }
    $("h3").text(answerArray.join(" "))
// Hides replay button so nobody can cheat
    if (completionProgress !== 0 && lives !== 0) {
        $("#again").hide()
    }
}

// Tells user what the word topic is.
function subjectDisplayUpdate() {
    if (chosenArrayName == arrayNames[0]) {
        subjectName = "Animals"
    } else if (chosenArrayName == arrayNames[1]) {
        subjectName = "Plants"
    } else { subjectName = "There's a problem here." }
    $("h1").text("Current subject: " + subjectName)
}

// Function for what to do for every clicked letter.
function choice(letter) {
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
    // Parameters to end the game, depending on whether the player's guess was correct or not.
    if (completionProgress == 0) {
        $("h3").text("Congratulations! The word was " + randomWord + ". Try again?")
        wins++
        scoreboard()
        $("#again").show()
        $(".letters").fadeOut()
        return
    }
    if (lives == 0) {
        $("h3").text("Game over. The word was " + randomWord + ". Try again?")
        losses++
        scoreboard()
        $("#again").show()
        $(".letters").fadeOut()
        return
    }
}


// Allows you to play again without losing your points.
function playAgain() {
    answerArray = []
    guess = ""
    lives = 6
    lifeUpdate()
    randomWord = (randomArrays[chosenArrayName][(Math.floor(Math.random() * randomArrays[chosenArrayName].length))])
    completionProgress = randomWord.length
    createWordTemplate()
    $(".button1").show()
    $(".letters").show()
}
// Resets everything, including points
function reset() {
    playAgain()
    wins = 0
    losses = 0
    scoreboard()
}

// Resets everything and randomizes subject and word
function subject() {
    chosenArrayName = arrayNames[(Math.floor(Math.random() * arrayNames.length))]
    playAgain()
    subjectDisplayUpdate()
}


$(() => {
    //BUTTONS. the click event that handles letters is in the HTML for cleanliness
    $(".button1").click(function () {
        $(this).fadeOut("slow");
    })
    $("#again").click(playAgain)
    $("#random").click(subject)
    $("#reset").click(reset)
})