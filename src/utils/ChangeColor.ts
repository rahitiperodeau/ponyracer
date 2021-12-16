const colors = ["BLUE", "GREEN", "ORANGE", "PURPLE", "YELLOW"];

export default function randomColor(): string {
  return colors[Math.floor(Math.random() * colors.length)];
}
