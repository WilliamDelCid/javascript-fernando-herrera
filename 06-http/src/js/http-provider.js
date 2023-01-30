const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';
const cloudPreset = 'irb7zm4d';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dkghlvypj/upload';

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

const subirImagen = async (archivoSubir) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }

}



export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}