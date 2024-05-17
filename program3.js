function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    console.log("Start of the program");
    try {
        await delay(2000); // Wait for 2 seconds
        console.log("Promise resolved after 2 seconds");
    } catch (error) {
        console.error("An error occurred:", error);
    }
    console.log("End of the program");
}

// Call the main function
main();
