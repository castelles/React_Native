divElement = document.querySelector('#app');

var listElement;
var buttonElement;
var inputElement;

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderInput() {
    inputElement = document.createElement('input');
    buttonElement = document.createElement('button');

    var buttonText = document.createTextNode('Adicionar');
    buttonElement.appendChild(buttonText);

    inputElement.setAttribute('placeholder','Digite um toDo');

    divElement.appendChild(inputElement);
    divElement.appendChild(buttonElement);
}


function renderToDos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        console.log(todo);
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos
                                 + ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        }
}

function addToDo() {
    var toDoText = inputElement.value;
    if (toDoText != '') {
        todos.push(toDoText);
    }
    inputElement.value = '';
    renderToDos();
    saveToStorage();

}

function deleteToDo(pos) {
    todos.splice(pos, 1);
    renderToDos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

listElement = document.createElement('ul');
divElement.appendChild(listElement);

renderToDos();
renderInput();
buttonElement.onclick = addToDo;