const express = require("express")
const router = express.Router();

import {register} from '../controllers/auth'
router.post('/register', register);
// router.post('/login', login);


module.exports = router;