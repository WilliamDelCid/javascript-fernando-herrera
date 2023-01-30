const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';
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


const obtenerUsuarios = async () => {
    const resp = await fetch(urlUsuarios);
    const { data: usuarios } = await resp.json();
    return usuarios;
}


export {
    obtenerChiste,
    obtenerUsuarios
}