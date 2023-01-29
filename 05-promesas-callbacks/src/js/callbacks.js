const heroes = {
    Capi: {
        nombre: 'Capitan America',
        poder: 'aaaaaa'
    },
    iron: {
        nombre: 'IronMan',
        poder: 'Dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Alergia'
    }
}

export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];

    if (heroe) {
        callback(null, heroe);
    } else {
        callback(`No existe un heroe con el id ${id}`);
    }


    // callback(heroe);

}