function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice += 1;
    }
    if (a[i] < b[i]) {
      bob += 1;
    }
  }
  return [alice, bob];
}

log(compareTriplets([17, 28, 30], [99, 16, 8]));
