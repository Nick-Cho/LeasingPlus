const express = require("express")
const router = express.Router();
import formidable from 'express-formidable'
import {searchUser,uploadImage} from '../controllers/util'

router.get('/search-user/:query', searchUser);
router.post('/upload-image', formidable({maxFileSize: 5 *1024* 1024}), uploadImage)
module.exports = router;