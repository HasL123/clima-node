const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=28645b534018aa13aa609c29a8ffd96b`)


    return resp.data.main.temp;

}
module.exports = {
    getClima
}