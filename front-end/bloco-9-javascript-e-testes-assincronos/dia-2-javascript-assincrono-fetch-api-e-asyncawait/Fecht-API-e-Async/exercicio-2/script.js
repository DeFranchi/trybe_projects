const fetch = require('../node_modules/node-fetch');

const fecthCripto = async () => {
    const url =  `https://api.coincap.io/v2/assets`;
    const result = await fetch(url)

    .then(response => console.log(response.json()))
    .then((data) => console.log(data))
    

}
fecthCripto();

