const inputField = document.getElementById("text-input");
const chatWindow = document.getElementById("chat-window");
const sendBtn = document.getElementById("send-btn");
const micBtn = document.getElementById("mic-btn");

// Append a message to chat
function appendMessage(type, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Send button click
sendBtn.onclick = () => {
  const message = inputField.value.trim();
  if (message) {
    appendMessage("user", message);
    inputField.value = "";

    // Simulate bot response
    setTimeout(() => {
      appendMessage("bot", "👋 I'm still learning, but I heard you!");
    }, 600);
  }
};

// Mic button click
micBtn.onclick = () => {
  alert("🎤 Voice input coming soon!");
};
