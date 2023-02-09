import { valorCarta } from "./valor-carta";

/**
 * 
 * @param {*} carta 
 * @param {*} turno 
 * @returns 
 */

export const acumularPuntos = (carta, turno, puntosJugadores, smalljugador) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    smalljugador[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}