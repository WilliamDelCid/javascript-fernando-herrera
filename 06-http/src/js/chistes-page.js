import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;
const emoji = [
    "😂",
    "🤣",
    "🤠",
    "😆",
    "😋",
    "😜",
    "😝",
    "😛",
    "🤪",
    "🤭",
    "😹",
];

const crearChisteHtml = () => {
    const html = `
    <h1 class="m-2">Chistes</h1>
    <hr class="m-2" />
    <button type="button" class="btn btn-primary m-2">Otro chiste</button>
    <ol class="list-group m-2">
     
    </ol>`;
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
}

const eventos = () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');
    btnOtro.addEventListener('click', async () => {
        btnOtro.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtro.disabled = false;
    })

}

//id value
const dibujarChiste = (chiste) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `${obtenerEmoji()}-${chiste.value}`;
    olItem.classList.add('list-group-item');
    // olItem.classList.add('d-flex');
    // olItem.classList.add('justify-content-between');
    // olItem.classList.add('align-items-center');

    olList.append(olItem);


}

const obtenerEmoji = () => {
    const rand = Math.floor(Math.random() * emoji.length);
    return emoji[rand];
};

export const init = () => {
    crearChisteHtml();
    eventos();
}