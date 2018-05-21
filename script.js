const Hangman = {

    // big ole hangman object array. just testing for now. picks one out of the letters.
    // later a function to randomize the array would be neat?
    wordArrays: {
        testArray: ["one", "two", "three", "four", "five"],
    },
    chosenArray: wordArrays.testArray,
    randomWord: chosenArray[(Math.floor(Math.random() * chosenArray.length))],
    //  random word display: something about making an array at randomWord.length?
    guessedLetters: [],

    createWordTemplate: function () {
        for (let ii = 0, i < (randomWord.length * 2), i++) {
            if (ii % 2 == 0) {
                //current.append("_")
            } else {
                //current.append(" ")
            }
        }
    },
    // function for resetting
    //      - Lives: 6
    //      - Word: random from such and such array
    //      - Word display: updated
    //      - Letter display: filled out
    //
    // object for stuff having to do with lives?
    //      Display: some kind of array of images or ascii objects corresponding to life #
    lifeRel: {
        lives: 6
        lifeHit: function () {
            this.lives--
        }
        lifeUpdate: function () {
            $(h3).html(lives)
        }
    }
    //
    // Display for the chosen word
    //      fill it with " _ " for # of letters in the word
    //      replace corresponding _ to match it with the corresponding letter. maybe like
    //      array and match the number values?
    // 
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