const express = require("express")
const router = express.Router();

import {addChore, getChore} from '../controllers/chore.js'

router.post('/add-chore', addChore);
router.get('/get-chores/:user_id', getChore) //getting chores for all the roommates of current user and the chores of the current user

module.exports = router;
