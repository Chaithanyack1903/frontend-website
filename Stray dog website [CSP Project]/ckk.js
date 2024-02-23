const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Define responses from the chatbot
const chatbotResponses = [
    "I'm here to help. What do you need assistance with?",
    "How can I assist you today?",
    "Feel free to ask any questions you have.",
    "Tell me more about your issue.",
    "I'm listening. Please type your message.",
];

// Function to add a user message to the chatbox
function addUserMessage(message) {
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(userMessage);
    userInput.value = ""; // Clear the input field
}

// Function to add a chatbot message to the chatbox
function addChatbotMessage(message) {
    const chatbotMessage = document.createElement("div");
    chatbotMessage.classList.add("chatbot-message");
    chatbotMessage.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(chatbotMessage);
}

// Function to handle user input and chatbot responses
function handleUserInput() {
    const userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        addUserMessage(userMessage);

        // Simulate a chatbot response (you can replace this with your actual chatbot logic)
        const randomResponse = chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)];
        setTimeout(() => {
            addChatbotMessage(randomResponse);
        }, 1000); // Simulating a delayed response

        // Scroll to the bottom of the chatbox
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

// Event listener for the send button
sendButton.addEventListener("click", handleUserInput);

// Event listener for the Enter key in the input field
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleUserInput();
        event.preventDefault(); // Prevent form submission
    }
});