const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy Falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || 'regresaTrue()' || 'Ya no soy falso de nuevo ' || true;

console.log({ a1, a2, a3, a4, a5 });
if ('regresaFalse()' && 'regresaTrue()' && (true || false || true)) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}

/**
 * Dias de semana abrimos a las 11,
 * peros losfines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy...

const dia = 0; // domingo
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, esta cerrado , abrimos a las XX

// if (dia === 0 || dia === 6) {
/* if ([0, 6].includes(dia)) {
    console.log('Fin de semana')
} else {
    console.log('Dia de semana')
    horaApertura = 11;
}
 */

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

mensaje = horaActual >= horaApertura ? 'Esta Abierto' : 'Esta cerrado'

const elMayor = (a, b) => (a > b) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? '$2' : '$5';

console.log(elMayor(10, 15))
console.log(tieneMembresia(false))

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (() => 'Nick Fury')(),
    elMayor(10, 15)
]


const nota = 65;
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A' :
        nota >= 85 ? 'B+' :
            nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' :
                    nota >= 70 ? 'C' : 'F';

console.log({ nota, grado });