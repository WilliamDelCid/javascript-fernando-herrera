

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...';

    const renderValue = (value) => {
        element.innerHTML = value;
    }


    Promise.race([
        slowPromise(),
        mediumPromise(),
        // fastPromise(),

    ]).then(
        (response) => response.json()).then((data) => Array.isArray(data) ? renderValue(data[0]["id"]) : renderValue(data["id"]))
}

const slowPromise = () => {
    // .then((response) => response.json())
    return fetch('https://gorest.co.in/public/v2/posts')
}

const mediumPromise = () => {
    return fetch('https://api.chucknorris.io/jokes/random')
}

const fastPromise = () => new Promise(resolve => {
    return fetch('https://dummy.restapiexample.com/api/v1/employees')

})