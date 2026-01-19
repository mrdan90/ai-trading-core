const button = document.querySelector("button");
const loader = document.getElementById("loader");
const results = document.getElementById("results");

button.addEventListener("click", () => {
  results.classList.add("hidden");
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");
    generateFakeAnalysis();
    results.classList.remove("hidden");
  }, 3500);
});

function generateFakeAnalysis() {
  const biases = ["Bullish", "Bearish", "Neutral"];
  const actions = ["BUY", "SELL", "WAIT"];
  const risks = ["Low", "Medium", "High"];

  document.getElementById("bias").innerText =
    randomFrom(biases);

  document.getElementById("action").innerText =
    randomFrom(actions);

  document.getElementById("risk").innerText =
    randomFrom(risks);

  document.getElementById("confidence").innerText =
    Math.floor(70 + Math.random() * 25) + "%";
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
