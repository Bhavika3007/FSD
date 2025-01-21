function* combineSequences(arr) {
  const fibGen = fibonacci();
  let arrIndex = 0;

  while (true) {
    if (arrIndex < arr.length) {
      yield arr[arrIndex++];
    } else {
      yield fibGen.next().value;
    }
  }
}

function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const arr = [10, 20, 30];
const combinedGen = combineSequences(arr);

console.log(combinedGen.next().value);
console.log(combinedGen.next().value);
console.log(combinedGen.next().value);
console.log(combinedGen.next().value);
console.log(combinedGen.next().value);
console.log(combinedGen.next().value);
console.log(combinedGen.next().value);
