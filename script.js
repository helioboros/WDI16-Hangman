const Hangman {

    // big ole hangman object array. just testing for now
    const wordArrays = {
        testArray: ["one", "two", "three", "four", "five"],
    }
    let chosenArray = wordArrays.testArray
    let randomWord = chosenArray[(Math.floor(Math.random() * chosenArray.length))]

//
// function for resetting
//      - Lives: 6
//      - Word: random from such and such array
//      - Word display: updated
//      - Letter display: filled out
//
// object for stuff having to do with lives?
//      function remove 1 life
//      Lives is an array? Or a number? Think a number
//      Display: some kind of array of images or ascii objects corresponding to life #
//
// Display for the chosen word
//      fill it with " _ " for # of letters in the word
//      replace corresponding _ to match it with the corresponding letter. maybe like
//      array and match the number values?
// 
// Display of letters
//      One for each letter of the alphabet. etc. this could be done in html?
//      on click, record that letter. let that button fade out
//      run it against the current word
//          if is in:
//          if is not: -1 life
// 
// oh fuck if i know
// baseSet var
// lives.baseSet = 6
// letters.baseSet = ?? make disappeared letter buttons appear again?? fuck idk

}