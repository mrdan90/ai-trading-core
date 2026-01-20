const analyzeBtn = document.getElementById("analyzeBtn");
const statusText = document.getElementById("status");

analyzeBtn.addEventListener("click", () => {
  statusText.textContent = "Initializing market analysis...";

  setTimeout(() => {
    statusText.textContent =
      "Analysis running. Monitoring BTCUSDT & ETHUSDT with controlled risk.";
  }, 2000);
});
