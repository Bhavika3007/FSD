const globalSymbol1 = Symbol.for('sharedSymbol');
const globalSymbol2 = Symbol.for('sharedSymbol');

console.log(globalSymbol1 === globalSymbol2);
