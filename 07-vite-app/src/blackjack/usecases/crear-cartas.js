
/**
 * 
 * @param {*} carta 
 * @param {*} turno 
 */

export const crearCarta = (carta, turno, divCartasJugador) => {
    const imagen = document.createElement('img');
    imagen.src = `assets/cartas/${carta}.png`;
    imagen.classList.add('carta');
    divCartasJugador[turno].append(imagen);
}