// Write a function countLayers(grid) that counts the number of same strings as 1 and unique as 1 layer.

function countLayers(grid) {
  return new Set(grid).size;
}

function countLayers(grid) {
  let count = 0;
  let layers = {};
  for (let i = 0; i < grid.length; i++) {
    if (!layers[grid[i]]) {
      count++;
      layers[grid[i]] = true;
    }
  }
  return count;
}

console.log(countLayers(["CCCC", "CBBB", "CCCC"]));
// 2

console.log(countLayers(["DDDDDD", "DCCCCD", "DCDDDC", "DCCCCD", "DDDDDD"]));
// 3
