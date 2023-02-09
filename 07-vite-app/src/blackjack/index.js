import _ from 'underscore';
import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta } from './usecases';

// import  exportDefault  from './usecases/crear-deck'

/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Tréboles)
 * 2H = Two of Hearts (Tréboles)
 * 2S = Two of Spades (Tréboles)
 */

const miModulo = (() => {
    'use strict'
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];
    let puntosJugadores = [];
    //Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const smalljugador = document.querySelectorAll('small'),
        divCartasJugador = document.querySelectorAll('.divCartas');

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        smalljugador.forEach(elem => elem.innerText = 0);
        divCartasJugador.forEach(elem => elem.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    //Eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, smalljugador);

        crearCarta(carta, 0, divCartasJugador);

        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck, puntosJugadores, smalljugador, divCartasJugador);
        } else if (puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck, puntosJugadores, smalljugador, divCartasJugador);
        }

    })
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        turnoComputadora(puntosJugadores[0], deck, puntosJugadores, smalljugador, divCartasJugador);
        btnDetener.disabled = true;
    })
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    })

    return {
        nuevoJuego: inicializarJuego
    }

})();




// const victoria = () => {
//     if ((puntosJugador > puntosComputadora) && (puntosJugador <= 21)) {
//         alert('Gano el jugador');
//     } else {
//         alert('Gano la computadora');
//     }
// }