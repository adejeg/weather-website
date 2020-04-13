const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e804bb14208845e252eaeb59ab3f2f0b/' + latitude + ',' + longitude

    request({ url, json: true }, (error, res) => {
        
        
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (res.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, res.body.daily.data[0].summary + ' It is currently ' + res.body.currently.temperature + ' degress out. There is a ' + res.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast