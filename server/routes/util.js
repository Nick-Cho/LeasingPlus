const express = require("express")
const router = express.Router();
import formidable from 'express-formidable'
import {
  searchUser, 
  uploadImage, 
  getUser,
  stripeAccountOnboarding,
  getStripeAcc
} from '../controllers/util'

router.get('/search-user/:query', searchUser);
router.post('/upload-image', formidable({maxFileSize: 5 *1024* 1024}), uploadImage);
router.get('/get-user/:id', getUser);
router.post('/stripe-account-onboard', stripeAccountOnboarding)
router.get('/get-stripe-account/:id', getStripeAcc)
module.exports = router;