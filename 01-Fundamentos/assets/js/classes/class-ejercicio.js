class Animales {
    nombre = '';
    color = '';
    grupo = '';

    constructor(nombre = 'No tiene', color = "No tiene", grupo = "No tiene") {
        if (!nombre) throw Error('Necisitamos el nombre');
        this.nombre = nombre;
        this.color = color;
        this.grupo = grupo;
    }



}

const perico = new Animales('Perico', 'Verde', 'Mamifero');
console.log(perico);