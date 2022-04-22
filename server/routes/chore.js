const express = require("express")
const router = express.Router();

import {addChore, getChores} from '../controllers/chore.js'

router.post('/add-chore', addChore);
router.get('/get-chores/:user_id', getChores) //getting chores for all the roommates of current user and the chores of the current user

module.exports = router;
