const express = require('express')
const app = express()
const port = 7000
const cors = require('cors')

app.use(cors())

app.get('/login', (req, res) => {

    let email = req.query.email
    let phone = req.query.phone
    let address = req.query.address
    let password = req.query.password

    console.log(email)
    console.log(phone)
    console.log(address)
    console.log(password)


    const jsonData = {

        email : email,
        phone : phone,
        address : address

    }

    res.setHeader('Content-Type', 'application/json')
    res.send(jsonData)
    
})

app.get('/google', (req, res) => {
    res.send('google')
})

app.get('/facebook', (req, res) => {
    res.send('facebook')
})

app.listen(port, () => {
    console.log(port + " is listening")
})