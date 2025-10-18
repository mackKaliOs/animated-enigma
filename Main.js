// main.js - front-end simulation
const emojis = document.getElementById("emojis");
const status = document.getElementById("status");

emojis.addEventListener("click", e => {
  if (e.target.textContent.trim()) {
    const emoji = e.target.textContent.trim();
    status.textContent = `Detected ${emoji} ... contacting backend simulation.`;
    // pretend network call
    fetch("backend_demo.py")  // only illustrative
      .then(() => {
        status.textContent = `Donation simulated successfully for ${emoji}!`;
      })
      .catch(() => {
        status.textContent = "Network simulation complete.";
      });
  }
});
