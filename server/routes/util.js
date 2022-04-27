const express = require("express")
const router = express.Router();
import formidable from 'express-formidable'
import {
  searchUser, 
  uploadImage, 
  getUser,
  payRent
} from '../controllers/util'

router.get('/search-user/:query', searchUser);
router.post('/upload-image', formidable({maxFileSize: 5 *1024* 1024}), uploadImage);
router.get('/get-user/:id', getUser);
router.put('/stripe-pay/:id', payRent)

module.exports = router;