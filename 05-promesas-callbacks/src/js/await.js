import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(id => buscarHeroe(id));
export const obtenerHeroesArr = async () => {

    return await Promise.all(heroesIds.map(buscarHeroe))

    /*     const heroesArr = [];
        for (const id of heroesIds) {
            // const heroe = await buscarHeroe(id)
            // heroesArr.push(heroe);
            heroesArr.push(buscarHeroe(id));
            // .then(heroe => heroesArr.push(heroe))
    
        }
        // setTimeout(() => {
        //     console.log('Obtener');
        //     console.table(heroesArr);
        // }, 1000);
        // return heroesArr;
        return await Promise.all(heroesArr); */


}

export const obtenerHeroeAwait = async (id) => {
    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (error) {
        console.log('catch');
        // console.log(error);
        // throw error;
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }
}

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');


    // const heroes = await Promise.all(heroesPromesas)
    // heroes.forEach(heroe => console.log(heroe))

    // for await (const heroes of heroesPromesas) {
    //     console.log(heroes);
    // }

    console.timeEnd('HeroesCiclo');
}

export const heroeIfAwait = async (id) => {
    if ((await buscarHeroeAsync(id)).nombre === 'IronMan') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Naaaaaa');
    }
}