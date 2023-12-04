import _ from 'underscore'
// Esta función crea un nuevo deck

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
    if(!tiposCarta || tiposCarta === 0) 
        throw new Error('tiposCarta obligatorio');
    
    if(!tiposEspeciales || tiposEspeciales === 0) 
        throw new Error('tiposEspeciales obligatorio');

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;