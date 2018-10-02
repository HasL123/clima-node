// const axios = require('axios');


const lugar = require('./Lugar/lugar')

const clima = require('./Clima/clima')


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'la neta no se que poner',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugaLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `el clima en ${coors.direccion} es de ${ temp } grados centigrados`

    } catch (error) {
        return `no se pudo encontrar el clima de ${ direccion }`
    }



}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// lugar.getLugaLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(23.2494148, -106.4111425)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));





// let encodedUrl = encodeURI(argv.direccion)

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
//     .then(resp => {
//         console.log('Latitud: ',
//             resp.data.results[0].geometry.location.lat);
//         console.log('Longitud: ',
//             resp.data.results[0].geometry.location.lng);
//         console.log('Direccion: ',
//             resp.data.results[0].formatted_address);
//         // console.log(resp.status);
//     })
//     .catch(e => console.log('ERROR!!!', e));