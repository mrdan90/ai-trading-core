function runAnalysis() {
  const output = document.getElementById("output");
  output.innerHTML = "Initializing AI Trading Core...<br>";

  setTimeout(() => {
    output.innerHTML += "Analyzing market structure...<br>";
  }, 800);

  setTimeout(() => {
    output.innerHTML += "Detecting liquidity zones...<br>";
  }, 1600);

  setTimeout(() => {
    output.innerHTML += "Evaluating momentum and volatility...<br>";
  }, 2400);

  setTimeout(() => {
    const decisions = ["BUY", "SELL", "WAIT"];
    const decision = decisions[Math.floor(Math.random() * decisions.length)];

    const confidence = Math.floor(Math.random() * 20) + 70;

    output.innerHTML += `
      <br><strong>Market Bias:</strong> ${decision}<br>
      <strong>Structure:</strong> Validated<br>
      <strong>Execution Zone:</strong> Identified<br>
      <strong>Confidence Level:</strong> ${confidence}%<br>
      <br><em>Analysis complete.</em>
    `;
  }, 3200);
}
