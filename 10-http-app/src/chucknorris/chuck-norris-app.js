/**
 * @returns {Object}quote infromation
 */
const fetchQuote = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    console.log(data);
    return data;
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const ChuckNorrisApp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'ChuckNorris App';
    element.innerHTML = 'Loading...';
    // fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.value;
        authoLabel.innerHTML = data.updated_at;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton)
    }

    fetchQuote().then(renderQuote);
    nextQuoteButton.addEventListener('click', async () => {
        nextQuoteButton.setAttribute('disabled', true);
        element.innerHTML = 'Loading...';
        await fetchQuote().then(renderQuote);
        nextQuoteButton.removeAttribute('disabled');
    })

}