'use strict'
const superagent = require('superagent');

const CharactersModel=require('../models/favorite.pyschonauts.model')
// function for posting data to the favorie endpoint

const addNewpyschonaut =async (req,res)=>{
    const {name,gender,image,psipowers}=req.body
const newCharacter= new CharactersModel({
    name:name,
    slug:name.toLowerCase().split(' ').join('-'),
    gender:gender,
    image:image,
    psipowers:psipowers.map(data=>data.name)
})
newCharacter.save();

    res.send(newCharacter);
}

// function to get the data from the favorite endpoint

const getFavoriteData =async (req,res)=>{
    CharactersModel.find((err,data)=>{
        res.send(data)
    })
   
}

//deleting an item from favorite endpoint

const deleteFavoriteItem= async (req,res)=>{
    const slug =req.params.slug
    CharactersModel.deleteOne({slug:slug},(err,data)=>{
        if (err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
}

//updating an item from favorite endpoint

const updateFavoriteItem=async(req,res)=>{
    const {name,gender}=req.body
    const slug=req.params.slug
    CharactersModel.updateOne({slug:slug},{name:name,gender:gender},(err,data)=>{
        if (err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
}

module.exports={addNewpyschonaut,getFavoriteData,deleteFavoriteItem,updateFavoriteItem}