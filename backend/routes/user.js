//Importing Express
const express = require('express')

//Importing Router Method from express
const router = express.Router()

//Importing our model
const USER = require('../models/User')

//Creating our router
router.post('/', async (req,res) => {

    //Creating our new User
    const user = new USER(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    )

    //Saving the post to the database
    try{
        const savedUser = user.save()
        res.send(savedUser)
    } catch (err) {
        res.json(
            {
                message: err
            }
        )
    }
    // console.log(req.body)
})

router.post('/', async (req,res) => {
    let result = savedUser.find(user => user.email == req.body.email)

    if(result) {
        if(password==password) {
            res.status(200).send({
                message: 'Login successfully!!!!'
            })
        } else {
            res.status(404).send({
                message: 'Password or username is incorrect!!!!!!'
            })
        }
    } else {
        res.status(500).send({
            message: 'User not found!!!!!!!!!!'
        })
    }
})

//Exporting our Router
module.exports = router