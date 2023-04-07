const express = require('express');
const peerController = require('../controllers/peerController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);
router.get('/', peerController.getPeers);
router.get('/custom-category-peers',peerController.getCustomCategoryPeers)

router.get('/:username', peerController.getPeer);
router.post('/:username/rate-peer', peerController.ratePeer);

module.exports = router;
