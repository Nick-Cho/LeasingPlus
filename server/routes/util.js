const express = require("express")
const router = express.Router();

import {searchUser} from '../controllers/util'

router.get('/search-user/:query', searchUser);

module.exports = router;