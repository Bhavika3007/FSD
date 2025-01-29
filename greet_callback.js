function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}
function displayMessage(message) {
    console.log(message);
}
greet("Alice", displayMessage);