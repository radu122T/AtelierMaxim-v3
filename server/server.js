const express = require('express')
const app = express()
const PORT = 2121    
require('dotenv').config()

app.use(express.static('dist'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/',(req, res)=>{
    res.sendFile(__dirname, 'index.html')
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})