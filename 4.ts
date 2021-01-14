/**
Reescribir función every con forEach
*/

type myObj4 = { name: string, surname: string, status: string, age: number, stream: boolean }

/** @var myObj4[] objArr4*/
let objArr4: myObj4[] = [
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
let newArr4_1 = objArr4.every(e => e.status === 'active');
console.log(newArr4_1); // true

//--------------------------------------------
// código: function myEvery1... (debe contener filter)
// comment: no hace falta un callback, simplemente que haga la comparación: status === 'active'



let newArr4_2 = objArr4.every(e => e.stream === true);
console.log(newArr4_2); // false
//--------------------------------------------
// código: function myEvery2... (debe contener for)
// comment: no hace falta un callback, simplemente que haga la comparación: stream === true 
