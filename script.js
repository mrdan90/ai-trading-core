const toggleBot = document.getElementById("toggleBot");
const botStatus = document.getElementById("botStatus");

let botRunning = false;

toggleBot.addEventListener("click", () => {
  botRunning = !botRunning;

  if (botRunning) {
    toggleBot.textContent = "Bot ON ✅";
    botStatus.textContent =
      "Bot is active. Monitoring markets with controlled risk.";
  } else {
    toggleBot.textContent = "Bot OFF 🛑";
    botStatus.textContent = "Bot is currently inactive.";
  }
});
