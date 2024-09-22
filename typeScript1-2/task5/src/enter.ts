// Define the lengthOrSquare function
function lengthOrSquare(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    } else if (typeof value === 'number') {
        return value * value;
    }
    throw new Error("Invalid input type");
}

// Prompt the user to enter a value as either a string or a number
const userInputNum = prompt("Enter a value (string or number):");
let parsedValue: string | number | null;

if (userInputNum !== null && !isNaN(Number(userInputNum))) {
    parsedValue = parseFloat(userInputNum);
} else {
    parsedValue = userInputNum; // Keep it as string
}

// Ensure parsedValue is not null before passing it
if (parsedValue !== null) {
    const resultNum = lengthOrSquare(parsedValue);
    console.log(typeof resultNum);
    console.log(resultNum);
} else {
    console.log("No valid input provided.");
}
