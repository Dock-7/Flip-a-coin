function tossCoin() {
  const resultText = document.getElementById("resultText");
  const coinImage = document.getElementById("coinImage");
  const coin = document.getElementById("coin");

  resultText.textContent = "Tossing...";
  

  // Add rotating animation
  coin.classList.remove("rotating"); // Reset animation
  void coin.offsetWidth; // Trigger reflow to restart animation
  coin.classList.add("rotating");

  // Randomize result
  setTimeout(() => {
    const result = Math.random() < 0.5 ? "Head" : "Tail";
    const imagePath = result === "Head" ? "Head.png" : "Tail.png";

    coinImage.src = imagePath;
    resultText.textContent = result;
  }, 1000); // Match animation duration
}
