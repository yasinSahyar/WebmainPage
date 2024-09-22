// Define a generic function to reverse an array
function reverseArray<T>(array: T[]): T[] {
    // Use the reverse method to reverse the elements of the array
    return array.reverse();
}

// Test the function with arrays of different types
const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "cherry", "date"];
const mixedArray: (string | number | boolean)[] = [true, 42, "hello", false];

// Call the reverseArray function and display the results
const reversedNumbers = reverseArray(numberArray);
const reversedStrings = reverseArray(stringArray);
const reversedMixed = reverseArray(mixedArray);

// Print the results
console.log("Reversed Array of Numbers:", reversedNumbers);
console.log("Reversed Array of Strings:", reversedStrings);
console.log("Reversed Mixed Array:", reversedMixed);
