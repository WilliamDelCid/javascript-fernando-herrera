
class Persona {
    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + 'instancia';
    }

    static mensaje() {
        console.log(`${this.nombre}`);
        console.log('Soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';



    constructor(nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase') {
        if (!nombre) throw Error('Necisitamos el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }


    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy() {
        console.log(

            `Soy ${this.nombre} y mi identidad es ${this.codigo}`
        );
    }

    miFrase() {
        this.quienSoy(); //<---Para mandar a llamar algo de adentro en este caso funcion
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Nombre 1', 'Spider', 'Soy');
console.log({ spiderman });

spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = 'El pie de ceraza';
//spiderman.nemesiss = 'Duende';
/* spiderman.comida = 'Duende verda' */
/* console.log(spiderman.comida);
console.log(spiderman.getComidaFavorita); */

console.log(Persona._conteo);
Persona.mensaje();

Persona.propiedadExterna = "Hola Mundo";

console.log(Persona.propiedadExterna);
console.log(Persona);