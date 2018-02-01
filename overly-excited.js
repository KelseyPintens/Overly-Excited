// Create an array that contains the words in the sentence
let sentence = ["The", " walrus", " danced", " through", " the", " trees", " in", " the", " light", " of", " the", " moon"];

let betterSentence = ["This", " is", " my", " better", " sentence", " don't", " know", " how", " much", " better", " it", " is"]

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, punctuation) => {
    var WordArray = '';
    for (i = 0; i < betterSentence.length; i++) {
        WordArray += betterSentence[i];
        var ex = i+1;
        if (ex%3 === 0) {
            var taco = ex/3;
            var exx = punctuation;
            WordArray+= exx.repeat(taco);
        }
        // WordArray = WordArray + sentence[i];
        console.log(WordArray);
    }

}

// Invoke the function and pass in the array
addExcitement(betterSentence, "&");






