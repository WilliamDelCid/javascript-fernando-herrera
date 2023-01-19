
class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase') {
        if (!nombre) throw Error('Necisitamos el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

const spiderman = new Persona('Nombre 1', 'Spider', 'Soy');
console.log({ spiderman });