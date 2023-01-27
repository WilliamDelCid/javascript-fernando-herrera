import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));



/* const newTodo = new Todo('Aprender JavaScript');
//todoList.nuevoTodo(newTodo);
console.log(todoList.todos); */

/* todoList.todos.forEach(crearTodoHtml); */

// const tarea = new Todo('Aprender JavaScript');
/* todoList.nuevoTodo(tarea);*/


// console.log(todoList);

// crearTodoHtml(tarea)

// localStorage.setItem('mi-key', 'abc');
// sessionStorage.setItem('mi-key', 'abc');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);