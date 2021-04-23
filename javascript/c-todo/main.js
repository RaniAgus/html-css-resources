// Cargo la lista de todos en mi variable
const todos = JSON.parse( localStorage.getItem('todos') ) || [];
// Llamo mi función de render para cargar mis archivos
render();
// Configuro mi formulario
const form = document.getElementById('todo-form');
form.onsubmit = submit;

function render() {
    //Actualizo el localStorage
    localStorage.setItem('todos', JSON.stringify(todos));

    //Obtengo el elemento HTML a actualizar
    const todoList = document.getElementById('todo-list');

    //Creo una lista con los elementos transformados a HTML con map()
    //y luego los uno con join('') para asignárselos al innerHTML
    todoList.innerHTML = todos.map(t => '<li>' + t + '</li>').join('');
    
    //Todos los li que se encuentran en un elemento de nombre 'todo-list'
    const elementos = document.querySelectorAll('#todo-list li');
    
    //Les agrego un event listener para eliminarlos al hacer click
    elementos.forEach((x, i) => {
        x.addEventListener('click', () => {
            todos.splice(i, 1);
            render();
            console.log('eliminado:', x);
        });
    });
}

function submit(e) {
    // Para prevenir que refresque la página
    e.preventDefault(); 
    
    //Obtengo el input con el texto
    const todo = document.getElementById('todo');
    
    //Guardo el texto en una lista
    todos.push(todo.value);

    //Dejo el texto del formulario vacío
    todo.value = '';

    //Actualizo la página
    render();
}