/* // import { init } from "./js/chistes-page";

// import { init } from "./js/usuarios-page";

// import { obtenerUsuarios } from "./js/http-provider";

// init();

import * as CRUD from './js/crud-provider'

// CRUD.getUsuario(1).then(console.log)
// CRUD.crearUsuario({
//     name: 'William',
//     job: 'Carpintero'
// }).then(console.log);
// CRUD.actualizarUsuario(1, {
//     name: 'Melissa',
//     job: 'Developer'
// }).then(console.log);

CRUD.borrarUsuario(1).then(console.log)

// obtenerUsuarios().then(console.log)

// init() */

import { init } from './js/archivos-page';

init();