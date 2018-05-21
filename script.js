const Hangman = {

    // big ole hangman object array. just testing for now. picks one.
    testArray: ["one", "two", "three", "four", "five"],
    randomWord: (testArray[(Math.floor(Math.random() * testArray.length))]),

    // - randomize array code or whatever. work on this later. dont hate yourself please

    // createRandomWord = function () {
    //     wordArrays = {
    //         testArray: ["one", "two", "three", "four", "five"],
    //     }
    //     let chosenArray = this.wordArrays.testArray
    //     let randomWord = (chosenArray[(Math.floor(Math.random() * chosenArray.length))])
    // }

    // some kind of 'prepare game board' function for when you press a button would be cool
    // for now let it start up when the page loads
    //
    // Display for the chosen word
    //      fill it with " _ " for # of letters in the word
    //      replace corresponding _ to match it with the corresponding letter. maybe like
    //      array and match the number values?
    createWordTemplate: function () {
        for (let ii = 0; ii < (randomWord.length * 2 - 1); ii++) {
            if (ii % 2 == 0) {
                this.append("_")
            } else {
                this.append(" ")
            }
        }
    },

    guessedLetters: [],

    lives: 6,
    lifeHit: function () {
        this.lives--
    },
    lifeUpdate: function () {
        $(h3).text(lives)
    }
    // function for resetting parameters
    //      - Lives: 6
    //      - Word: random from such and such array
    //      - Word display: updated
    //      - Letter display: filled out

    // Display of letters
    //      on click, record that button's letter. let that button fade out
    //      run it against the current word
    //          if is in:
    //          if is not: -1 life
    // 
    // oh fuck if i know
    // baseSet var
    // lives.baseSet = 6
    // letters.baseSet = ?? make disappeared letter buttons appear again?? fuck idk

}