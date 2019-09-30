const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/b6dd8e8b4a96cd9ec0d6daf24322f6d0/' + latitude + ',' + longitude + '?units=si';
    //console.log(url)
    request({url, json: true}, (error, {body}) =>{
        if(error){
            callback("Can not connect to weather service",undefined);
        } else if(body.error){
            callback('Unable to find location');
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance of rain." )
        }

    })
}

module.exports = forecast