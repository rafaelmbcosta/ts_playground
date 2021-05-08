const objectA: {
  readonly keyA: string;
  keyB: string;
  KeyC?: string;
} = {
  keyA: 'value a',
  keyB: 'value b',
};

objectA.keyB = '2';
// objectA.keyA = '2'; //error (readonly)
// objectA.keyD = '4'; //error (doenst exist)
