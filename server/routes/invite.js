const express = require("express")
const router = express.Router();

import {inviteUser, getInvite, denyInvite, acceptInvite} from '../controllers/invite.js'

router.post('/invite/:id', inviteUser);
router.get('/get-invite/:invite_id/:sender_id', getInvite);
router.put('/deny-invite', denyInvite);
router.put('/accept-invite', acceptInvite)

module.exports = router;
