// TODO: Write interface Item
interface Item {
    name: string;
    price: number;
    quantity: number;
}

// Create an empty array named 'cart' to store the items
const cart: Item[] = [];

// Helper function to simulate user input (replace with prompt for actual input)
function getUserInput(promptMessage: string): string {
    return prompt(promptMessage) || '';  // You can replace this with actual prompts in a browser
}

// TODO: Implement a loop to prompt the user for item details
while (true) {
    // TODO: Prompt user for item name, price, and quantity
    const itemName = getUserInput("Enter item name (Blank entry will terminate the program):");

    // Break the loop if an empty item name is entered
    if (itemName === "") {
        break;
    }

    const itemPrice = parseFloat(getUserInput("Enter item price:"));
    const itemQuantity = parseInt(getUserInput("Enter item quantity:"));

    // Validate inputs
    if (isNaN(itemPrice) || isNaN(itemQuantity) || itemPrice < 0 || itemQuantity < 0) {
        alert("Invalid input. Please try again.");
        continue;
    }

    // Create an item object and add it to the 'cart' array
    const newItem: Item = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}

// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);

// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
