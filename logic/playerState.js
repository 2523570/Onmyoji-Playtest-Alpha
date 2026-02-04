// playerState.js

export function createPlayers(playerCount, startingHP = 20) {
  const players = [];

  for (let i = 0; i < playerCount; i++) {
    players.push({
      id: i,
      name: `Player ${i + 1}`,
      hp: startingHP,
      alive: true
    });
  }

  return players;
}

/**
 * Applies overflow damage evenly to all living players
 * @param {Array} players
 * @param {number} overflowDamage
 */
export function applyOverflowDamage(players, overflowDamage) {
  if (overflowDamage <= 0) return;

  const livingPlayers = players.filter(p => p.alive);
  if (livingPlayers.length === 0) return;

  const damagePerPlayer = Math.ceil(
    overflowDamage / livingPlayers.length
  );

  livingPlayers.forEach(player => {
    player.hp -= damagePerPlayer;
    if (player.hp <= 0) {
      player.hp = 0;
      player.alive = false;
    }
  });
}

/**
 * Checks if all players are defeated
 * @param {Array} players
 * @returns {boolean}
 */
export function areAllPlayersDefeated(players) {
  return players.every(player => !player.alive);
}
