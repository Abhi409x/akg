// ===== OPEN GIFT FLOW =====
function openGift() {
  document.querySelector(".gift").style.display = "none";

  let env = document.getElementById("envelope");
  env.style.display = "block";

  setTimeout(() => {
    document.querySelector(".letter").style.transform = "scale(1)";
  }, 500);

  setTimeout(() => {
    env.style.display = "none";

    let card = document.getElementById("card");
    card.style.display = "block";

    setTimeout(() => {
      card.style.transform = "scale(1)";
      startTyping(); // start typing messages
    }, 200);

  }, 2000);

  setTimeout(() => {
    document.getElementById("card").style.display = "none";
    startSlideshow();
  }, 9000);

  // music play
  document.getElementById("music").play().catch(()=>{});
}


// ===== TYPING WITH BLINK CURSOR =====
let messages = [
  "Happy Birthday Riya ❤️",
  "You are very special 💖",
  "I have a surprise for you 🎁",
  "Enjoy your day 😊"
];

let msgIndex = 0;

function startTyping() {
  let card = document.getElementById("card");
  card.innerHTML = "<h2 id='typingText'></h2>";
  msgIndex = 0;
  typeMessage();
}

function typeMessage() {
  if (msgIndex >= messages.length) return;

  let textEl = document.getElementById("typingText");
  let text = messages[msgIndex];
  let i = 0;

  function typing() {
    if (i < text.length) {
      textEl.innerHTML =
        text.substring(0, i + 1) +
        "<span class='cursor'></span>";
      i++;

      // random speed for