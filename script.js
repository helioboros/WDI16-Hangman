let testArray = ["one", "two", "three", "four", "five"]
let randomWord = (testArray[(Math.floor(Math.random() * testArray.length))])
let correctLettersArray = randomWord.split("")
let lives = 6
lifeUpdate()
createWordTemplate()

// - randomize array code or whatever. work on this later. dont hate yourself please

// createRandomWord = function () {
//     wordArrays = {
//         testArray: ["one", "two", "three", "four", "five"],
//     }
//     let chosenArray = this.wordArrays.testArray
//     let randomWord = (chosenArray[(Math.floor(Math.random() * chosenArray.length))])
// }


// some kind of 'prepare game' function for when you press a button would be cool
// for now let it start up when the page loads

// user interface object would be nice.
// visual changes for guessed letters, number of lives

// Display for the chosen word
//      fill it with " _ " for # of letters in the word
//      replace corresponding _ to match it with the corresponding letter. maybe like
//      array and match the number values?

function createWordTemplate() {
    $("h3").empty()
    for (let ii = 0; ii < (randomWord.length * 2 - 1); ii++) {
        if (ii % 2 == 0) {
            $("h3").append("_")
        } else {
            $("h3").append(" ")
        }
    }
}

function lifeHit() {
    lives--
}
function lifeUpdate() {
    $("h2").text(lives + " lives remaining")
}


function reset() {
    lives = 6
    lifeUpdate()
    randomWord = (testArray[(Math.floor(Math.random() * testArray.length))])
    correctLettersArray = randomWord.split("")
    createWordTemplate()
    $(".button1").show()
}

function letters() {

}

// Display of letters
//      on click, record that button's letter. let that button fade out
//      run it against:
//      correctLettersArray
//          if is in:
//          if is not: -1 life

const interactable = {
    //put the things that happen when users click buttons here
}

$(() => {
    //BUTTONS.
    $(".button1").click(function () {
        $(this).fadeOut("slow");
    })
    $("#reset").click(reset)
})