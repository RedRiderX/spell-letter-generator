export default function rollDice(dice = 1) {
  dice = Math.floor(dice);
  let total = 0;
  for (let index = 0; index < dice; index++) {
    total += rollDie();
  }
  return total;
}

export function rollDie(faces = 6) {
  faces = Math.floor(faces);
  return Math.floor(Math.random() * faces) + 1;
}
