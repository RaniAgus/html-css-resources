window.onload = () => {
    //Cartelito (feo)
    //alert('DOM desde main.js');
    //Log de consola
    console.log('DOM desde main.js');

    //Obtener un elemento por su id
    const parrafo = document.getElementById('text');
    console.log(parrafo.innerText);

    //Manipular texto (innerText)
    setTimeout( () => { parrafo.innerText = 'Texto actualizado' }, 1000);

    //Agregar elementos HTML (innerHTML)
    setTimeout( () => { parrafo.innerHTML = '<li>Elemento 1</li><li>Elemento 2</li>' }, 2000);
}