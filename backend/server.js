//Importing Express
const express = require('express')

//importing cors
const cors = require('cors')

//Importing mongoose
const mongoose = require('mongoose')

//Importing dotenv file
require('dotenv/config')

//Importing port from dotenv file
const Port = process.env.PORT || 9000

//using express
const app = express()


//Importing routes
const createUserRoute = require('./routes/user')
const loginRoute = require('./routes/user')

//Connecting to the database
mongoose.connect(process.env.MONGO_URL, {}, () => {
    console.log('Successfully connected to the Database')
})

//Base Route
app.get('/', (req,res) => {
    res.send('We are on the Base Route')
})

//using Express json
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

//Using the Routes imported
app.use('/createUser', createUserRoute)
app.use('/login', loginRoute)

//starting our server
app.listen(Port, () => {
    console.log(`Server running on port:${Port}`)
})