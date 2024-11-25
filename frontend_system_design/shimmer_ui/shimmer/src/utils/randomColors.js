function getRandomColor() {
  // const r = Math.floor(Math.random() * 256);
  // const g = Math.floor(Math.random() * 256);
  // const b = Math.floor(Math.random() * 256);
  // return `rgb(${r}, ${g}, ${b})`;
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}

export function getRandomColors(limit) {
  const colors = [];
  const seen = new Set();
  for (let i = 0; i < limit; i++) {
    let color = getRandomColor();
    while (seen.has(color)) {
      color = getRandomColor();
    }
    colors.push(color);
  }
  return colors;
}
