const randomArrays = {
    subjectAnimals: ["alligator", "ant", "bear", "bee", "bird", "camel", "cat", "cheetah", "chicken", "chimpanzee", "cow", "crocodile", "deer", "dog", "dolphin", "duck", "eagle", "elephant", "fish", "fly", "fox", "frog", "giraffe", "goat", "goldfish", "hamster", "hippopotamus", "horse", "kangaroo", "kitten", "lion", "lobster", "monkey", "octopus", "owl", "panda", "pig", "puppy", "rabbit", "rat", "scorpion", "seal", "shark", "sheep", "snail", "snake", "spider", "squirrel", "tiger", "turtle", "wolf", "zebra"],
    subjectPlants: ["acorn", "almond", "apple", "apricot", "aspen", "bamboo", "baobab", "banyan", "bark", "basil", "beech", "birch", "brush", "buckeye", "butternut", "cabbage", "cactus", "cedar", "cherry", "chestnut", "clover", "coconut", "corn", "crabapple", "cypress", "date", "dogwood", "elderberry", "elm", "eucalyptus", "evergreen", "fern", "fig", "fir", "ginkgo", "grapefruit", "grass", "hawthorn", "hemlock", "hickory", "holly", "horsetail", "ivy", "juniper", "kelp", "kudzu", "kumquat", "larch", "lilac", "lily", "lotus", "magnolia", "mahogany", "mangrove", "maple", "moss", "nectarine", "oak", "olive", "orange", "palm", "palmetto", "peach", "pear", "pecan", "pine", "quince", "redwood", "sagebrush", "seaweed", "sequoia", "spruce", "succulent", "sycamore", "teak", "tulip", "walnut", "willow", "yew", "yucca"],
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
        $("#againsub").hide()
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
        showReplayButtons()
        $(".letters").fadeOut()
        return
    }
    if (lives == 0) {
        $("h3").text("Game over. The word was " + randomWord + ". Try again?")
        losses++
        scoreboard()
        showReplayButtons()
        $(".letters").fadeOut()
        return
    }
}

// To show the buttons that let you replay while retaining your score, and hiding the resets
function showReplayButtons() {
    $("#again").show()
    $("#againsub").show()
    $("#reset").hide()
    $("#random").hide()
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
    $("#reset").show()
    $("#random").show()
}

// Play again with a random subject
function againSubject() {
    chosenArrayName = arrayNames[(Math.floor(Math.random() * arrayNames.length))]
    playAgain()
    subjectDisplayUpdate()
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
    reset()
    subjectDisplayUpdate()
}


$(() => {
    //BUTTONS. the click event that handles letters is in the HTML.
    $(".button1").click(function () {
        $(this).fadeOut("fast");
    })
    $("#again").click(playAgain)
    $("#againsub").click(againSubject)
    $("#random").click(subject)
    $("#reset").click(reset)
})