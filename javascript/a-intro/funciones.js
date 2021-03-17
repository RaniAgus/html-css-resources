function iterar(arg) {
    console.log('El arreglo dice: ');
    for(let i = 0; i < arg.length; i++) {
        console.log(arg[i]);
    }
    console.log('');
}

const a2 = ['lala','lele','lili','lolo','maria'];
iterar(a2);

// Return

function suma(arg1, arg2) {
    return arg1 + arg2;
}

console.log(suma(3,2));

// Callbacks

function sumar(a, b, cb) {
    const r = a + b;
    cb(r);
}

function callback(result) {
    console.log('resultado = ', result);
}

sumar(2, 3, callback);

// Fat arrow functions

const miFatArrowFunction = (a, b) => a + b;
const miOtraFAF = (a, b) => { 
    return a + b; 
};

console.log(miFatArrowFunction(1, 2))
console.log(miOtraFAF(1, 2))

// Funciones anónimas
sumar(2, 3, function (r) {
    console.log('soy una lambda y mi resultado es:', r); 
});