
import { Todo, TodoList } from './clases';
import { crearTodoHTML, saludar } from './js/componentes';
import './styles.css';

const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo(tarea)

console.log(todoList);

 crearTodoHTML(tarea)