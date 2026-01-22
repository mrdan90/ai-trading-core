const botToggle = document.getElementById("botToggle");
const botStatus = document.getElementById("botStatus");

let isBotOn = false;

botToggle.addEventListener("click", () => {
  isBotOn = !isBotOn;

  if (isBotOn) {
    botToggle.textContent = "BOT ON";
    botToggle.className = "bot-on";
    botStatus.textContent = "Bot is currently active";
  } else {
    botToggle.textContent = "BOT OFF";
    botToggle.className = "bot-off";
    botStatus.textContent = "Bot is currently inactive";
  }
});
