const todoList = document.querySelector('.todo-list');


export const crearTodoHTML = (todo) => {
    const htmltodo = `
    <li class="completed" data-id="abc">
		<div class="view">
			<input class="toggle" type="checkbox" checked>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`;

    const div = document.createElement('div');
    div.innerHTML = htmltodo;
     todoList.append(div);
};
