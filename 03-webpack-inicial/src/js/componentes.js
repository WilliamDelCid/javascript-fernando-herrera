import '../css/componentes.css'
// import gato from '../assets/img/gato.png';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!!`;
    document.body.append(h1);

    // console.log(gato);
    // const img = document.createElement('img');
    // img.src = gato;
    // document.body.append(img);
}