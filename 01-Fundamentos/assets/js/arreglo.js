let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length-1];

console.log({primero,ultimo});

juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr});
})

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud,juegos});

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});


let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(pos,2);
console.log({juegosBorrados,juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});

//TODO: Referencia



let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors',personaje.coords);
console.log('Lat', personaje.coords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje['ultima-pelicula']);




