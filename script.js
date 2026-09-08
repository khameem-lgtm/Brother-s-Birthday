const confetti = document.getElementById("confetti");
const celebrateBtn = document.getElementById("celebrateBtn");
const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

function makeConfetti(amount = 90) {
  const shapes = ["🎉","✨","💖","⭐","🎈","🍰"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (12 + Math.random() * 20) + "px";
    piece.style.animationDelay = (Math.random() * 1.5) + "s";
    piece.style.animationDuration = (2.5 + Math.random() * 2) + "s";
    confetti.appendChild(piece);
    setTimeout(() => piece.remove(), 5500);
  }
}

celebrateBtn.addEventListener("click", () => {
  makeConfetti(130);
  celebrateBtn.textContent = "🎉 Yaaay! Happy Birthday!";
  setTimeout(() => celebrateBtn.textContent = "🎊 Celebrate!", 3500);
});

wishBtn.addEventListener("click", () => {
  makeConfetti(80);
  wishMessage.classList.remove("hidden");
  wishBtn.textContent = "🎂 Wish Made!";
});

window.addEventListener("load", () => {
  setTimeout(() => makeConfetti(55), 600);
});
