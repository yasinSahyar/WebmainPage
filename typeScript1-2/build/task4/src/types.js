// Function to create an electronic device
function createElectronicDevice() {
    // Prompt user for electronic device details (brand and model)
    const brand = prompt("Enter the brand of the electronic device:") || '';
    const model = prompt("Enter the model of the electronic device:") || '';
    // Return object containing brand and model
    return { type: 'electronic', brand, model };
}
// Function to create a book
function createBook() {
    // Prompt user for book details (title and author)
    const title = prompt("Enter the title of the book:") || '';
    const author = prompt("Enter the author of the book:") || '';
    // Return object containing title and author
    return { type: 'book', title, author };
}
// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
// Displaying the details of the electronic device
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
// Displaying the details of the book
console.log('Book Details:');
displayProductDetails(bookProduct);
export {};
