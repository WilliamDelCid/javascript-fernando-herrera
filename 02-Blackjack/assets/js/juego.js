/**
 * 2C = Two of Clubs (Tréboles)
 * 2C = Two of Diamonds (Tréboles)
 * 2C = Two of Hearts (Tréboles)
 * 2C = Two of Spades (Tréboles)
 */

(() => {
    'use strict'
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];
    let puntosJugador = 0, puntosComputadora = 0;
    //Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');
    const smalljugador = document.querySelectorAll('small');
    const jugadorCartas = document.querySelector('#jugador-cartas');
    const jugadorComputadora = document.querySelector('#computadora-cartas');
    const crearDeck = () => {
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo)
            }
        }
        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo)
            }
        }

        deck = _.shuffle(deck);

        return deck;
    }

    crearDeck();

    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    pedirCarta();

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
    }

    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta);
            smalljugador[1].innerText = puntosComputadora;
            let imagen = document.createElement('img');
            jugadorComputadora.append(imagen);
            imagen.src = `assets/cartas/${carta}.png`;
            imagen.classList.add('carta');
            if (puntosMinimos > 21) {
                break;
            }
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {

            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana :(');
            } else if (puntosMinimos > 21) {
                alert('Computadora gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador Gana');
            }
        }, 200);


    }

    //Eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
        smalljugador[0].innerText = puntosJugador;
        let imagen = document.createElement('img');
        jugadorCartas.append(imagen);
        imagen.src = `assets/cartas/${carta}.png`;
        imagen.classList.add('carta');

        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }

    })

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
        btnDetener.disabled = true;
    })

    btnNuevo.addEventListener('click', () => {
        deck = [];
        crearDeck();
        btnPedir.disabled = false;
        btnDetener.disabled = false;
        puntosJugador = 0;
        puntosComputadora = 0;
        smalljugador[0].innerText = puntosJugador;
        smalljugador[1].innerText = puntosComputadora;
        jugadorCartas.innerHTML = ""
        jugadorComputadora.innerHTML = ""

    })
})();




// const victoria = () => {
//     if ((puntosJugador > puntosComputadora) && (puntosJugador <= 21)) {
//         alert('Gano el jugador');
//     } else {
//         alert('Gano la computadora');
//     }
// }