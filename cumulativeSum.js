function* cumulativeSum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
    yield sum;
  }
  return sum;
}

const arr = [1, 2, 3, 4, 5];
const gen = cumulativeSum(arr);

for (let value of gen) {
  console.log(value); 
}

const result = gen.return();
console.log(result.value); 
