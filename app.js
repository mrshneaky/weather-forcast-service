const path = require('path')
const express = require('express')
const forecast = require('./utils/forecast')
const app = express();

const PORT = process.env.HTTP_PORT || 3002

//const latitude = process.env.LATITUDE
//const longitude = process.env.LONGITUDE
//const location = process.env.LOCATION

app.get('/api', (req, res) => {
    if (!req.query.latitude){
        return res.send({
            error: 'Geo Code information'
        })

        }else{
            forecast(req.query.latitude, req.query.longitude, (error, forecastData) => {
                if (error) {
                    return res.send({
                        error: error
                    })
                }
    
                return res.send({
                    location : req.query.location,
                    forecast: forecastData
                })
                    
                })
            }
    
    
})
app.listen(PORT, () => {
    console.log('server started on port ' + PORT)
})