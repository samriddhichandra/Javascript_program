function stringHandsOn() {
    var str = "   Hey This is Samriddhi and I am learning JavaScript. Welcome to the world of JavaScript.  ";

    // Step 1
    console.log(`Original String: "${str}"`);

    // Step 2
    console.log(`Length of original string is: ${str.length}`);

    // Step 3
    var trimmedStr = str.trim();
    console.log(`Trimmed string: "${trimmedStr}"`);
    console.log(`Length after trim: ${trimmedStr.length}`);

    // Step 4
    console.log(`First character: "${trimmedStr.charAt(0)}", Last character: "${trimmedStr.charAt(trimmedStr.length - 1)}"`);

    // Step 5
    var wordCount = trimmedStr.split(" ").filter(word => word !== "").length;
    console.log(`Total number of words: ${wordCount}`);
             
    // Step 6 - Corrected
    console.log(`Index of word "Samriddhi": ${trimmedStr.indexOf("Samriddhi")}`);

    // Step 7
    console.log(`Substring starting from index 22: "${trimmedStr.substring(22)}"`);

    // Step 8 - Corrected
    console.log(`String ends with "JavaScript.": ${trimmedStr.endsWith("JavaScript.")}`);

    // Step 9
    console.log(`String starts with "Hey": ${trimmedStr.startsWith("Hey")}`);
}

stringHandsOn();
