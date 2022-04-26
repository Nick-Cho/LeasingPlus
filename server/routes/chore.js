const express = require("express")
const router = express.Router();

import 
{
  addChore, 
  getChores, 
  updateChore,
  checkChore,
  deleteChore
} 
from '../controllers/chore.js'

router.post('/add-chore', addChore);
router.get('/get-chores/:user_id', getChores) //getting chores for all the roommates of current user and the chores of the current user
router.put('/update-chore',updateChore) //updates chores from drag and drop action
router.put('/check-chore', checkChore) //updates chore from checking completion
router.delete('/delete-chore/:chore_id', deleteChore)

module.exports = router;
