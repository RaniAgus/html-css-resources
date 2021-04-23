// Promises

// RESOLVE Y THEN

// Indico que este valor lo voy a tener resuelto en un futuro
Promise.resolve(2)
// Indico qué hacer cuando tenga el valor resuelto
Promise.resolve(2).then(valor => console.log(valor))
// Las promesas se pueden ir encadenando
Promise.resolve(2).then(valor => valor + 1).then(valor => console.log(valor))

// REJECT Y CATCH

//Reject hace que la promesa se salte al catch de nuestra cadena de promesas
Promise.reject(2).then(valor => console.log(valor)).catch(e => console.error(e))
//Sin catch, vamos a tener un error sin capturar