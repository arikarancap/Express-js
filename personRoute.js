const express = require('express');
const router= express.Router();
const Persons= require('./PersonsSchema')
router.post('/',(request,response)=>{
    // response.json("Router is Working...")
    const postPerson= new Persons({
        Name: request.body.Name,
        Age: request.body.Age,

    })
    const savePerson= postPerson.save();
    response.status(200).json(savePerson);
})
module.exports= router;