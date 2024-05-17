// Callback function to simulate asynchronous behavior
function simulateAsync(callback) {
    setTimeout(() => {
        // Simulating some asynchronous task
        let result = "Async task completed!";
        callback(null, result); // Invoke the callback with null for error and result for data
    }, 2000); // Simulating a delay of 2 seconds
}

// Usage of the callback function
console.log("Start of the program");
simulateAsync((error, result) => {
    if (error) {
        console.error("An error occurred:", error);
    } else {
        console.log("Async task result:", result);
    }
});
console.log("End of the program");
