import { pedirCarta } from './pedir-carta'
import { acumularPuntos } from './acumular-puntos';
import { crearCarta } from './crear-cartas';
import { determinarGanador } from './determinar-ganador';
/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 */


export const turnoComputadora = (puntosMinimos, deck = [], puntosJugadores, smalljugador, divCartasJugador) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesario');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, smalljugador);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugador);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}