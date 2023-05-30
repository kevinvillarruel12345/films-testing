const express = require('express');
const genreRouter = require('./genre.rout');
const actorRouter = require('./actor.rout');
const directorRouter = require('./director.rout');
const movieRouter = require('./movie.rout');
const router = express.Router();

// colocar las rutas aquí
router.use('/genres', genreRouter);
router.use('/actors', actorRouter);
router.use('/directors', directorRouter);
router.use('/movies', movieRouter);


module.exports = router;