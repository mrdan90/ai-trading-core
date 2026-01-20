const VALID_LICENSE_KEY = "ATC-CORE-ACCESS-2025";

function verifyKey() {
  const input = document.getElementById("licenseKey").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (input === VALID_LICENSE_KEY) {
    errorMessage.style.color = "#0ecb81";
    errorMessage.textContent = "Access granted. Redirecting...";
    setTimeout(() => {
      window.location.href = "/dashboard.html";
    }, 1000);
  } else {
    errorMessage.textContent = "Invalid license key. Access denied.";
  }
}
