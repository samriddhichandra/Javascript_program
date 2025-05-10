function stringHandsOn() {
    let str = "   Hey This is samriddhi !! what are you doing ? you are doing good, keep it up   ";

    // 1. Print the string as it is
    console.log(`Original string: "${str}"`);

    // 2. Calculate length of the String
    console.log(`Length of original string: ${str.length}`);

    // 3. Trim spaces and log new string and its length
    let trimmedStr = str.trim();
    console.log(`Trimmed string: "${trimmedStr}"`);
    console.log(`Length of trimmed string: ${trimmedStr.length}`);

    // 4. Print extra spaces count removed
    let extraSpaces = str.length - trimmedStr.length;
    console.log(`Extra spaces removed: ${extraSpaces}`);

    // 5. Print first and last character after trimming
    console.log(`First character: "${trimmedStr[0]}", Last character: "${trimmedStr[trimmedStr.length - 1]}"`);

    // 6. Count total words
    let words = trimmedStr.split(/\s+/);
    console.log(`Total words: ${words.length}`);

    // 7. Index of word "good"
    console.log(`Index of word "good": ${trimmedStr.indexOf("good")}`);

    // 8. Substring from index 22
    console.log(`Substring from index 22: "${trimmedStr.substring(22)}"`);

    // 9. Check if string ends with "up"
    console.log(`Ends with "up"?: ${trimmedStr.endsWith("up")}`);

    // 10. Check if string starts with "Hey"
    console.log(`Starts with "Hey"?: ${trimmedStr.startsWith("Hey")}`);
}

// Invoke the function
stringHandsOn();
