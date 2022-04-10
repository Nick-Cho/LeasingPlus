const express = require("express")
const router = express.Router();

import {inviteUser, getInvite, denyInvite} from '../controllers/invite.js'

router.post('/invite/:id', inviteUser);
router.get('/get-invite/:invite_id/:sender_id', getInvite);
router.put('/deny-invite/:invite_id', denyInvite)

module.exports = router;
