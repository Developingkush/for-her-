let ignoreCount = 0;

// TAKE LETTER
function takeLetter() {
  let letter = document.getElementById("letterImage");
  letter.classList.add("fade-out");

  typeText("Thank you so the person wants to say that he appologies for what has happened recently and will not repeat the same thing again. I am sorry bubu.");

  document.getElementById("buttons").innerHTML =
    `<button onclick="nextStep()">Continue</button>`;
}

// IGNORE FLOW
function ignore() {
  ignoreCount++;

  let text = "";

  if (ignoreCount === 1) {
    text = "I thought you both said you won't ignore each other...";
  } 
  else if (ignoreCount === 2) {
    text = "Ma'am I know you are pissed... but please take it 😭";
  } 
  else if (ignoreCount === 3) {
    text = "You will really get me killed T-T";
  } 
  else if (ignoreCount === 4) {
    text = "Here... I'm on my knees... please accept it 🥺";

    document.getElementById("buttons").innerHTML =
      `<button onclick="takeLetter()">Lelo na please 🥺</button>`;
  }

  typeText(text);
}

// NEXT STEP (QUESTION PART)
function nextStep() {
  typeText("Thank you… would you like to spend some time with me? ❤️");

  document.getElementById("buttons").innerHTML =
    `<button onclick="yes()">Yes</button>
     <button id="noBtn" onclick="moveNo()">No</button>`;
}

// YES CLICK
function yes() {
  typeText("I knew it ❤️");
}

// NO BUTTON RUN AWAY
function moveNo() {
  let btn = document.getElementById("noBtn");
  let container = document.getElementById("container");

  let maxX = container.clientWidth - 100;
  let maxY = container.clientHeight - 50;

  let randomX = Math.random() * maxX;
  let randomY = Math.random() * maxY;

  btn.style.left = randomX + "px";
  btn.style.top = randomY + "px";
}

// TYPEWRITER
function typeText(text) {
  let i = 0;
  let speed = 30;
  let dialogue = document.getElementById("dialogue");

  dialogue.textContent = "";

  function typing() {
    if (i < text.length) {
      dialogue.textContent += text[i];
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}