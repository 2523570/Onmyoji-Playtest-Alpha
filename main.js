// main.js

import { gameState, initGame } from "./gameState.js";
import { selectRandomYokai } from "./yokaiSelection.js";
import { getYokaiClues, getFullYokaiReveal } from "./yokaiReveal.js";
import { generateSpellHand } from "./spellHand.js";
import { createPlayerTurn } from "./playerTurn.js";
import { resolveCombat } from "./combatResolution.js";
import { advanceRound, checkWinCondition, checkLoseCondition } from "./roundFlow.js";

// --- DOM references ---
const cluesDiv = document.getElementById("clues");
const playersDiv = document.getElementById("players");
const combatDiv = document.getElementById("combat");
const nextButton = document.getElementById("nextBtn");

// --- Setup ---
const PLAYER_COUNT = 4;
const PLAYER_ELEMENTS = ["Fire", "Ice", "Wind", "Lightning"];

// --- Game Start ---
initGame(PLAYER_COUNT);
startRound();

// --------------------
// ROUND FLOW
// --------------------

function startRound() {
  combatDiv.innerHTML = "";
  playersDiv.innerHTML = "";

  gameState.currentYokai = selectRandomYokai();
  renderYokaiClues();

  setupPlayerTurns();
}

function renderYokaiClues() {
  const clues = getYokaiClues();

  cluesDiv.innerHTML = `
    <h2>Round ${clues.round}</h2>
    <p><strong>Season:</strong> ${clues.season}</p>
    <p><strong>Area:</strong> ${clues.area}</p>
    <p><strong>Weather:</strong> ${clues.weather}</p>
  `;
}

// --------------------
// PLAYER SPELL SELECTION
// --------------------

function setupPlayerTurns() {
  gameState.playerTurns = [];

  for (let i = 0; i < PLAYER_COUNT; i++) {
    const element = PLAYER_ELEMENTS[i];
    const hand = generateSpellHand(element);

    const turn = createPlayerTurn(i + 1, hand);
    gameState.playerTurns.push(turn);

    renderPlayerUI(turn);
  }
}

function renderPlayerUI(turn) {
  const playerDiv = document.createElement("div");
  playerDiv.className = "player";

  playerDiv.innerHTML = `
    <h3>Player ${turn.playerId}</h3>
    <div class="spells"></div>
    <button disabled>Submit</button>
  `;

  const spellsDiv = playerDiv.querySelector(".spells");
  const submitBtn = playerDiv.querySelector("button");

  turn.spellHand.forEach((spell, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${spell.name} (${spell.dice})`;

    btn.onclick = () => {
      turn.selectSpell(index);
      submitBtn.disabled = false;
    };

    spellsDiv.appendChild(btn);
  });

  submitBtn.onclick = () => {
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitted";
    checkAllPlayersSubmitted();
  };

  playersDiv.appendChild(playerDiv);
}

function checkAllPlayersSubmitted() {
  const allSubmitted = gameState.playerTurns.every(
    t => t.selectedSpell !== null
  );

  if (allSubmitted) {
    resolveRound();
  }
}

// --------------------
// COMBAT RESOLUTION
// --------------------

function resolveRound() {
  const results = resolveCombat();
  const reveal = getFullYokaiReveal();

  combatDiv.innerHTML = `
    <h2>Combat Resolution</h2>
    <p><strong>Yokai:</strong> ${reveal.name}</p>
    <p><strong>Element:</strong> ${reveal.element}</p>
    <p><strong>Yokai HP:</strong> ${reveal.hpForRound}</p>
    <pre>${JSON.stringify(results, null, 2)}</pre>
  `;

  nextButton.style.display = "block";
}

// --------------------
// NEXT ROUND / END
// --------------------

nextButton.onclick = () => {
  nextButton.style.display = "none";

  if (checkWinCondition()) {
    alert("Players win! The Yokai is defeated!");
    return;
  }

  if (checkLoseCondition()) {
    alert("Players lose! The Onmyoji are defeated!");
    return;
  }

  advanceRound();
  startRound();
};
