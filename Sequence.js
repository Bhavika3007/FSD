function createInfiniteSequence(limit) {
  let current = 1;
  
  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (current <= limit) {
        return { value: current++, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

const infiniteSequence = createInfiniteSequence(5);

for (const num of infiniteSequence) {
  console.log(num);
}
