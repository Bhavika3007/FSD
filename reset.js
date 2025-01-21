function createIterableWithReset(arr) {
  let index = 0;
  const array = arr;

  return {
    [Symbol.iterator]() {
      return {
        array,
        index,
        next() {
          if (this.index < this.array.length) {
            return { value: this.array[this.index++], done: false };
          } else {
            return { done: true };
          }
        },
        reset() {
          this.index = 0;
        }
      };
    }
  };
}

const iterable = createIterableWithReset([1, 2, 3, 4, 5]);

const iterator = iterable[Symbol.iterator]();

for (const num of iterator) {
  console.log(num);
}

console.log("Resetting iterator...");
iterator.reset();

for (const num of iterator) {
  console.log(num);
}
