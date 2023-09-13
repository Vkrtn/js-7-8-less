// Create a reference to the original console.log
const originalConsoleLog = console.log;

// Replace the default console.log with our custom function
console.log = function (...args) {
    // Log to the built-in console
    originalConsoleLog(...args);
    
    // Log to the custom console
    logToCustomConsole(...args);
};

// Function to log messages to the custom console
function logToCustomConsole(...args) {
    const customConsole = document.getElementById('custom-console');
    const logEntry = document.createElement('div');
    logEntry.textContent = args.join(' '); // Combine all arguments into a single string
    customConsole.appendChild(logEntry);
}


console.log('This is a message logged to both consoles.');
