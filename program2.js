function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// Usage of the delay function
console.log("Start of the program");
delay(2000) // Wait for 2 seconds
    .then(() => {
        console.log("Promise resolved after 2 seconds");
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
console.log("End of the program");
