let messageNumber = 0;
let isLoading = false;
let memory = [];
const sendButton = document.getElementById("enter");

function appendMessage(message, isAI) {
  const chatHistory = document.getElementById("chatHistory");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", isAI ? "ai-message" : "user-message");

  if (isAI) {
    messageElement.innerHTML = marked.parse(message);
  } else {
    messageElement.textContent = message;
  }

  chatHistory.appendChild(messageElement);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

function showLoadingIndicator() {
  const chatContainer = document.querySelector(".chat-container");
  chatContainer.classList.add("loading");
  return chatContainer;
}

function sendUserMessage() {
  const inputField = document.getElementById("inputField");
  const message = inputField.value.trim();

  if (message && !isLoading) {
    appendMessage(message, false);
    inputField.value = "";
    messageNumber += 1;

    memory.push(message);

    if (memory.length > 10) {
      memory.shift();
    }

    if (messageNumber == 1) {
      const welcome = document.getElementById("welcome");
      welcome.style.transition = "all 0.5s ease-out";
      welcome.style.transform = "translateY(-50px)";
      welcome.style.opacity = "0";
      setTimeout(() => welcome.remove(), 500);
    }

    isLoading = true;
    sendButton.disabled = true;
    inputField.disabled = true;
    const loadingContainer = showLoadingIndicator();

    generateAIResponse(message)
      .then((response) => {
        loadingContainer.classList.remove("loading");
        appendMessage(response.response, true);
      })
      .catch((error) => {
        loadingContainer.classList.remove("loading");
        appendMessage("Arr! There be an error in these waters! 🪨", true);
        console.error(error);
      })
      .finally(() => {
        isLoading = false;
        sendButton.disabled = false;
        inputField.disabled = false;
        inputField.focus();
      });
  }
}

async function generateAIResponse(input) {
  const prompt = `${memory}, above was what our past conversation, could you anwser me '${input}', but in a pirate style of speaking?`;

  if (!input) {
    alert("Avast there, matey! Scribble down a message!");
    return;
  }

  try {
    const response = await fetch("https://pirate-ai.onrender.com/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
