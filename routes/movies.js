import express from 'express'
import {fetchWatched, fetchWatchlist, postMovie}  from '../controllers/functions.js';
// import {isAuthenticated} from '../middlewares/auth.js'

const router = express.Router();

router.get('/watched', fetchWatched);
router.get('/watchlist', fetchWatchlist);
router.post('/addmovie', postMovie);


export default router;