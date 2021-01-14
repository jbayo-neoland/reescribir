/**
Reescribir función some con do..while
*/

type myObj5 = { name: string, surname: string, status: string, age: number, stream: boolean }

/** @var myObj5[] objArr5*/
let objArr5: myObj5[] = [
  {
    name: 'J',
    surname: 'B',
    status: 'active',
    age: 34,
    stream: false
  },
  {
    name: 'M',
    surname: 'V',
    status: 'active',
    age: 31,
    stream: true
  },
  {
    name: 'D',
    surname: 'C',
    status: 'active',
    age: 41,
    stream: true
  }
];
let newArr5 = objArr5.some(e => e.age > 40 && e.stream);
console.log(newArr5); // true

//--------------------------------------------
// código: function mySome... (debe contener do..while)
// comment: no hace falta un callback, simplemente que haga la comparación: age > 40 && stream === true
