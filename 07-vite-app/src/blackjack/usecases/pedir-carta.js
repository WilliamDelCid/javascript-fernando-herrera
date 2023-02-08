
/**
 * 
 * @param {*} deck 
 * @returns 
 */

export const pedirCarta = (deck) => {
    console.log(deck)
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}