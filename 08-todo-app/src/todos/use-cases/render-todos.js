import { createTodoHTML } from "./create-todo-html";



/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {
    let element;
    if (!element) {
        element = document.querySelector(elementId);
    }
    if (!element)
        throw new Error(`Element ${element} not found`);

    element.innerHTML = '';

    //TODO: referencia
    todos.forEach(todo => {
        element.append(createTodoHTML(todo))
    });
}