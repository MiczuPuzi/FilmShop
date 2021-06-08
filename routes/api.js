const express = require('express')
const router = express.Router()

const filmActions = require('../actions/api/filmActions')
const opinionActions = require('../actions/api/opinionActions')
const authActions = require('../actions/api/authActions')
const buyingActions = require('../actions/api/buyingActions')

// Auth
router.post('/register', authActions.register)
router.post('/login', authActions.login)
// Filmy
router.get('/films', filmActions.getAllFilms)
router.get('/films/:id', filmActions.getFilm)
router.post('/films', filmActions.saveFilm)
router.put('/films/:id', filmActions.updateFilm)
router.delete('/films/:id', filmActions.deleteFilm)
// Opinie
router.get('/opinions', opinionActions.getAllOpinions)
router.get('/opinions/:id', opinionActions.getOpinion)
router.post('/opinions', opinionActions.saveOpinion)
router.put('/opinions/:id', opinionActions.updateOpinion)
router.delete('/opinions/:id', opinionActions.deleteOpinion)
//Zakup
router.post('/buy', buyingActions.buyFilms)



module.exports = router
