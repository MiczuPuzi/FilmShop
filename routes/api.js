const express = require('express');
const router = express.Router();

const FilmActions = require('../actions/api/Films')


router.get('/', FilmActions.saveFilm)


module.exports = router;