import './style.css'
import javascriptLogo from './javascript.svg'
import { ChuckNorrisApp } from './src/chucknorris/chuck-norris-app'
import { UsersApp } from './src/users/users-app';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>

    <div class="card">
    </div>
   
  </div>
`
const element = document.querySelector('.card');

// ChuckNorrisApp(element)
UsersApp(element);
// document.addEventListener('click', (event) => {
//   event.target.classList.toggle('hide-modal');
//   console.log(event.target.classList);
// })