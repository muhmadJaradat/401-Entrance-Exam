'use strict'
const superagent = require('superagent');

const pyschonauts =require('../models/pyschonauts.model')

const getDataFromPsychonauts = async (req,res)=>{
    const url ='https://psychonauts-api.herokuapp.com/api/characters?limit=10'
await superagent.get(url).then(data=>{
    const newPyschonaut = data.body.map(data=>new pyschonauts(data))
    res.send(newPyschonaut)
})

}

module.exports=getDataFromPsychonauts