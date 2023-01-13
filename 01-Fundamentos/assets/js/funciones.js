function saludar() {
    console.log('Hola Mundo')
}

var saludar = 123;

// console.log(saludar)
//EJECITANDOLA
// saludar()

const saludar2 = function (nombre) {
    console.log('Hola' + nombre)
}

// funciones de flecha

const saludarFlecha = () => {
    console.log('Hola Flecha')
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola Flecha')
}


//RETRONO DE FUNCIONES

const saludarFlecha3 = () => {
    console.log('Hola Flecha')

    return ['🍎,🥑,🍏'];

    //esto nunca se va a
console.log('hola')
}

console.log(saludarFlecha3())


const sumar = (a, b) => {
    return a + b;
}


console.log(sumar(1, 2))


const getAleatorio = () => Math.random();

console.log(getAleatorio());

const crearPersona = (nombre) =>( {nombre});

console.log(crearPersona('Fernando','Herrera'));

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad,...args) =>{
    // console.log({edad,args});
    return args;
}

const [casado,vivo,nombre1,saludo] = imprimeArgumentos2(10,true,false,'Fernando','Hola');

const {nombre} = crearPersona('Fernando');
console.log(nombre);

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I','Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({nombre,codeName,vivo,edad=15,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);