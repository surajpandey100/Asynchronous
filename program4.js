console.log("Start of the program");

// Schedule a task asynchronously with setTimeout
setTimeout(() => {
    console.log("First task executed asynchronously after 2 seconds");
}, 2000);

// Schedule another task asynchronously with setTimeout
setTimeout(() => {
    console.log("Second task executed asynchronously after 1 second");
}, 1000);

console.log("End of the program");
