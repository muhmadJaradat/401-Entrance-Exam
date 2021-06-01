'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const getDataFromPsychonauts=require('./controllers/pyschonauts.controller')

const favoriteController=require('./controllers/favorite.pyschonauts.controller')

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DATABASE_URL;

mongoose.connect(`${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());


// API proof of life
app.get('/', (req, res) => {
    res.send('everything is working!')
});
app.get('/get-characters', getDataFromPsychonauts)


app.get('/favorite', favoriteController.getFavoriteData)
app.post('/favorite', favoriteController.addNewpyschonaut)
app.delete('/favorite/:slug', favoriteController.deleteFavoriteItem)
app.put('/favorite/:slug', favoriteController.updateFavoriteItem)




app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});