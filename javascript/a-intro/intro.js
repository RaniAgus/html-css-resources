console.log('Hola Mundo!!!');

// Tipos de datos en js
// String, Boolean (true, false), Null (definido), Number, Undefined, Object

// Formas de definir una variable: var (no recomendado), let, const
let miPrimeraVariable = 'Esta es mi primera variable uwu';
console.log(miPrimeraVariable);

miPrimeraVariable = 'Otro string';
console.log(miPrimeraVariable);

// Definiendo otros tipos de datos
let miBoolean = false;
let miNumeroBoquense = 12;
console.log(miNumeroBoquense, miBoolean, miPrimeraVariable);

let undef;
console.log(undef);

let nulo = null;
console.log(nulo);

// Objeto (es como un struct)
const miPrimerObjeto = {};
const miObjeto = { 
      unNumero: 12
    , unString: 'Chanchito feliz'
    , unaCondicion: true
};

console.log(miObjeto);
console.log(miObjeto.unString);

// Arrays
const arrVacio = [];
const array = [miNumeroBoquense, miBoolean, miPrimeraVariable, miObjeto];

console.log(arrVacio, array);

arrVacio.push(1);
arrVacio.push(2);
arrVacio.push(3);
arrVacio.push(4);
arrVacio.push(5);

console.log(arrVacio);

// Operaciones matemáticas

// Es lo mismo que en todos (no vi que explicara preincremento)

// Igualdad estricta
const resultado1 = 5 === '5'; // Lo mismo para la desigualdad
// Igualdad no estricta
const resultado2 = 5 == '5'; // Lo mismo para la desigualdad

console.log("Igualdad estricta    --- 5 === '5':", resultado1);
console.log("Igualdad no estricta --- 5 == '5':", resultado2);

// Operaciones lógicas (or ||, and &&, not !)

// El cero evalúa como false, cualquier string, array, objeto evalúa true

// Control de flujo

if (miBoolean) {
    // True
} else {
    // False
}

while(miBoolean) {
    // Same
}

switch (miNumeroBoquense) {
    case 1: {
        // Caso 1
        break;
    }
    case 2: {
        // Caso 2
        break;
    }
    default: {
        // Caso 3
        break;
    }
}

const alfabeto = ['a', 'b', 'c', 'd', 'e'];

for(let i = 0; i < alfabeto.length; i++) {
    console.log(alfabeto[i]);
}