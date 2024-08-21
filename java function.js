function countCharacters(inputString) {
    let totalChars = inputString.length;
    let digits = inputString.replace(/[^0-9]/g, '').length;
    let alphabets = inputString.replace(/[^a-zA-Z]/g, '').length;
    let symbols = inputString.replace(/[\w]/g, '').length;

    console.log(`Total Characters: ${totalChars}`);
    console.log(`Digits: ${digits}`);
    console.log(`Alphabets: ${alphabets}`);
    console.log(`Symbols: ${symbols}`);
}

countCharacters("Hello, World! 123");

