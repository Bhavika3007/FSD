const arr = [1, 2, 3, 4];

const reverseIterator = {
  array: arr,
  index: arr.length - 1,
  
  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.index >= 0) {
      return { value: this.array[this.index--], done: false };
    } else {
      return { done: true };
    }
  }
};

for (const value of reverseIterator) {
  console.log(value);
}
