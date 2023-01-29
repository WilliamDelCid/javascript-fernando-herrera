import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas'
import './styles.css';

const heroeId = 'Capi';
const heroeId2 = 'spider';

// buscarHeroe(heroeId).then(heroe => {
//     // console.log(`Enviando a ${heroe.nombre} enviando a la Mision`);
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision`);

//     })
// })

// buscarHeroe(heroeId, (err, heroe1) => { //Los callbacks son el envio de funcion por parametros

//     if (err) {
//         return console.error(err);
//     }

//     buscarHeroe(heroeId2, (err, heroe2) => {

//         if (err) {
//             return console.error(err);
//         }

//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);

//     })

// });

// Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)]).then(heroes => {
//     console.log(`Enviando a ${heroes[0].nombre} y ${heroes[1].nombre} a la mision`);
// })

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
    }).catch(err => {
        alert(err);
    }).finally(() => {
        console.log('Se termino la promesa');
    }
    )

console.log('Fin del programa');