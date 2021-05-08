/* eslint-disable */

// Basic types
let firstName: string = 'Pamonha';
let age: number = 30;
let adult: boolean = true;
let symbol: symbol = Symbol('any symbol');

// Arrays
let numberArray: Array<number> = [1, 2, 4];
let stringArray: Array<string> = ['a', 'b', 'c'];
// Arrays different option
let numberArray2: number[] = [1, 2, 4];
let stringArray2: string[] = ['a', 'b', 'c'];

// Object
let person: { name: string, age: number, adult?: boolean } = {
  name: 'Rafael',
  age: 20
}

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

const result = sum(2, 2);

const sum2: (x: number, y: number) => number = (x, y) => x + y;



