const toggleBtn = document.getElementById("toggleBot");
const statusText = document.getElementById("botStatus");

let botRunning = false;

toggleBtn.addEventListener("click", () => {
  botRunning = !botRunning;

  if (botRunning) {
    statusText.textContent = "ON";
    statusText.style.color = "#0ecb81";
    toggleBtn.textContent = "Stop Bot";
  } else {
    statusText.textContent = "OFF";
    statusText.style.color = "#f6465d";
    toggleBtn.textContent = "Initialize Analysis";
  }
});
