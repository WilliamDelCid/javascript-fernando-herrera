/* // import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas'

// // promesaLenta.then(console.log);
// // promesaMedia.then(console.log);
// // promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//     .then(mensaje => console.log(mensaje))
//     .catch(console.warn)

import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";

buscarHeroe('Capi').then(console.log).catch(console.warn);
buscarHeroeAsync('iron').then(console.log).catch(console.warn);
 */


// import { obtenerHeroeAwait, obtenerHeroesArr } from "./js/await";

// console.time('await');

// obtenerHeroeAwait('capi1').then(heroe => {
//     console.table(heroe);
//     console.timeEnd('await');
// }).catch(console.log);

import { heroeIfAwait, heroesCiclo } from "./js/await";

heroesCiclo();
heroeIfAwait('iron');