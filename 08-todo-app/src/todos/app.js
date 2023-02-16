import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos, renderPending } from "./use-cases";

const ElementIDs = {
    CrearCompleted: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    Filters: '.filters',
    aFiltro: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodo(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCountLabel);
    }


    //Cuando la funcion app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //Referencia HTML

    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton = document.querySelector(ElementIDs.CrearCompleted);
    const ulFilter = document.querySelector(ElementIDs.Filters);
    const aFiltro = document.querySelectorAll(ElementIDs.aFiltro);

    newDescriptionInput.addEventListener('keyup', (event) => {

        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';

    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        // event.target.className
        if (event.target.classList.value === 'destroy') {
            todoStore.deleteTodo(element.getAttribute('data-id'));
        }
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    clearCompletedButton.addEventListener('click', (event) => {
        todoStore.deleteCompleted();
        displayTodos();
    })

    ulFilter.addEventListener('click', (event) => {

        if (event.target.className === 'filtro' || event.target.className === 'selected filtro') {
            renderTodos(ElementIDs.TodoList, todoStore.getTodo(event.target.text));
            // todoStore.setFilter(event.target.text); Esto funcionaria para guardar la opcion del filtro en el localstorage
            // displayTodos();
            aFiltro.forEach(el => el.classList.remove('selected'));
            event.target.classList.add('selected');
        }

        // if (event.target.className === 'filtro') {
        //     console.log(event.target);
        // }
    })


}