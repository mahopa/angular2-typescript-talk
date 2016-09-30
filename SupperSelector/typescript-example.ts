// valid JS is valid typescript
(function(){
  var standardJS = 'can be done in typescript';
  return standardJS;
}());


// ES6 things like Object.assign will pollyfill if targeting below ES6
let someObject = function(){
  // Fat Arrow function with string interpolation
  let stringProp = `some string
        multi line
    `;
  const fatArrow = (x) => { this.stringProp = `${x}`; };
  return { fatArrow };
};


// Interface -> Will be stripped by compiler
interface IFoo {
  bar: string;
  baz: number[];
}

// Class implementing interface
class Bax implements IFoo {
  bar;
  baz = [];
  private zoinks: number = 10; // Compile time checks

  constructor(bar: string) {
    this.bar = bar;
  }
  total() {
    return this.baz.reduce((x: number, y: number) => { x + y; });
  }
}

class ChildOfBax extends Bax {
  bam: number;
  constructor() {
    super('Child of Bax');
    this.bam = 10;
  }
}
let bax = new Bax('some string');

console.log(bax.zoinks + 10); // Shows warning but compiles
