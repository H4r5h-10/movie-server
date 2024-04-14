import express from 'express'
import {deleteMovie, fetchWatched, fetchWatchlist, postMovie, putMovie}  from '../controllers/functions.js';
// import {isAuthenticated} from '../middlewares/auth.js'

const router = express.Router();

router.get('/watched', fetchWatched);
router.get('/watchlist', fetchWatchlist);
router.post('/addmovie', postMovie);
router.put('/changetype', putMovie);
router.delete('/deletemovie', deleteMovie);


export default router;