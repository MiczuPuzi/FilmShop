const express = require('express');
const router = express.Router();

const FilmActions = require('../actions/api/FilmActions')


router.get('/films', FilmActions.getAllFilms)
router.get('/films/:id', FilmActions.getFilm)
router.post('/films', FilmActions.saveFilm)
router.put('/films/:id', FilmActions.updateFilm)
router.delete('/films/:id', FilmActions.deleteFilm)




module.exports = router;