import _ from 'underscore';

/**
 *  Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposdeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de carta
 */

export const crearDeck = (tiposdeCarta, tiposEspeciales) => {

    if (!tiposdeCarta || tiposdeCarta.length === 0)
        throw new Error('Tipos De Carta es Obligatorio como un arreglo de string')

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('Tipos De Especiales es Obligatorio como un arreglo de string')
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposdeCarta) {
            deck.push(i + tipo)
        }
    }
    for (let tipo of tiposdeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo)
        }
    }
    return _.shuffle(deck);
}

// export default crearDeck;