/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async (element) => {

    console.time('Start');

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await FastPromise();
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        FastPromise(),
    ])
    element.innerHTML = `
        value1: ${value1} <br/>
        value2: ${value2} <br/>
        value3: ${value3} <br/>
    `
    console.timeEnd('Start');


}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('slow Promise')
    }, 2000);
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('medium Promise')
    }, 1500);
})

const FastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('fasttt  Promise')
    }, 1000);
})