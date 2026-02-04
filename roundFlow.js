// roundFlow.js

import { gameState, advanceRound, resolvePlayerDamage } from "./gameState.js";
import { selectRandomYokai } from "./yokaiSelection.js";
import { generateSpellHand } from "./spellHand.js";
import { resolveCombat } from "./combatResolution.js";

/**
 * Starts a new round
 */
export function startRound() {
  gameState.currentYokai = selectRandomYokai();
  gameState.spellHands = [];

  // Generate spell hand per player
  gameState.players.forEach(player => {
    if (!player.alive) return;

    const hand = generateSpellHand();
    gameState.spellHands.push({
      playerId: player.id,
      hand
    });
  });

  showCluesOnly();
}

/**
 * Players submit spells (UI calls this)
 * @param {Array} submittedSpells
 */
export function submitSpells(submittedSpells) {
  const combatResult = resolveCombat(
    gameState.currentYokai,
    submittedSpells,
    gameState.round
  );

  revealCombatResults(combatResult);

  const allPlayersDefeated = resolvePlayerDamage(
    combatResult.overflowDamage
  );

  if (allPlayersDefeated) {
    endGame(false);
    return;
  }

  if (gameState.round >= gameState.maxRounds) {
    endGame(true);
    return;
  }

  advanceRound();
}

/**
 * Ends the game
 * @param {boolean} victory
 */
function endGame(victory) {
  if (victory) {
    console.log("VICTORY – The Yokai have been sealed!");
  } else {
    console.log("DEFEAT – The Onmyoji have fallen...");
  }
}

/**
 * UI HOOKS (to be implemented in HTML)
 */
function showCluesOnly() {
  console.log("Round", gameState.round);
  console.log("Season:", gameState.currentYokai.season);
  console.log("Area:", gameState.currentYokai.area);
  console.log("Weather:", gameState.currentYokai.weather);
}

function revealCombatResults(combatResult) {
  console.log("Yokai:", gameState.currentYokai.name);
  console.log("Element:", gameState.currentYokai.element);
  console.log("HP Before:", combatResult.startingHP);
  console.log("Damage Dealt:", combatResult.totalDamage);
  console.log("HP Remaining:", combatResult.remainingHP);
  console.log("Overflow Damage:", combatResult.overflowDamage);
}
