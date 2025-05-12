// Function to calculate and log the square of the word length
function squareOfWordLength(word) {
    const wordLength = word.length;
    const square = wordLength * wordLength;

    console.log(`Word: "${word}"`);
    console.log(`→ Length: ${wordLength}`);
    console.log(`→ Square of length: ${square}`);
    console.log('-----------------------------------');
}

// Function calls for Part 1
console.log('--- Square of Word Length ---');
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");

// Function to perform string operations (Part 2)
function performStringAnalysis() {
    const sentence = "I am MERN Stack Developer";
    const sentenceLength = sentence.length;
    const wordCount = sentence.split(" ").length;

    const divisionResult = sentenceLength / wordCount;
    const multiplicationResult = sentenceLength * wordCount;

    
    console.log(`Sentence: "${sentence}"`);
    console.log(`→ Total characters (including spaces): ${sentenceLength}`);
    console.log(`→ Total words: ${wordCount}`);
    console.log(`→ Division (length / words): ${divisionResult.toFixed(2)}`);
    console.log(`→ Multiplication (length * words): ${multiplicationResult}`);
    console.log('-----------------------------------');
}

// Function call for Part 2
performStringAnalysis();
