'use strict'
const mongoose = require('mongoose');

// schema for favorite pyschonauts

const CharactersSchema=mongoose.Schema({
    name:{
        
            type: String,
            trim: true,
            unique: true,
            lowercase: true
        
    },
    slug:{
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    gender:String,
    image:String,
    psipowers:[]

})

const CharactersModel=mongoose.model('Characters',CharactersSchema)

module.exports=CharactersModel