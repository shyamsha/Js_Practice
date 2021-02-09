// convert RGB to HEX
function rgb(r, g, b) {
  if ((r || g || b) > 255) {
    return "FFFFFF";
  } else if ((r || g || b) < 0) {
    return "000000";
  }
  return "#"+[r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("")
    .toUpperCase();
}

console.log(rgb(0, 0, 0)); //'000000'