const jokeUrl = 'https://api.chucknorris.io/jokes/random'

const obtenerChiste = async () => {
    // fetch(jokeUrl).then(resp => resp.json()).then(({ id, value }) => {
    //     console.log(id);
    //     console.log(value);
    // })

    try {
        const resp = await fetch(jokeUrl)
        if (!resp.ok) throw 'No se pudo realizar ';
        const { id, value } = await resp.json()

        return { id, value };

    } catch (error) {
        throw error;
    }


}



export {
    obtenerChiste
}