const saveGenres = require("./saveGenres");
const axios = require("axios");
const { API_KEY } = process.env;

const getGenres = async () => {
    const response = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const data = response.data.results;
    saveGenres(data);
}
module.exports = getGenres;


//console.log(data);
// const response = await axios(`http://localhost:3001/genres${API_KEY}`);