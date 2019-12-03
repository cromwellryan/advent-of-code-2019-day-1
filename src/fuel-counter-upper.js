export function calculate(mass) {
  if (mass === 0) {
    return 0;
  }

  return Math.floor(mass / 3) - 2;
}
