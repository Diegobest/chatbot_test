async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  if (!message) return;

  displayMessage("You", message);
  input.value = "";

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    displayMessage("Diego AI", data.reply);
  } catch (err) {
    displayMessage("Error", "Something went wrong.");
    console.error(err);
  }
}

function displayMessage(sender, message) {
  const messages = document.getElementById("messages");
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  messages.appendChild(msgDiv);
}
