const callCryptoAPI = async (url) => {
    const response = await fetch(url);
    const result = await response.json();

    const cryptoArray = result.Data.map(crypto => {
        const cryptoObj = {
            id: crypto.CoinInfo.Name,
            name: crypto.CoinInfo.FullName
        }
        return cryptoObj
    })

    return cryptoArray
};

const callCalculatorAPI = async (url, currency, crypto) => {
    const response = await fetch(url)
    const result = await response.json();

    return (result.DISPLAY[crypto][currency])
}

export {
    callCryptoAPI,
    callCalculatorAPI
}

