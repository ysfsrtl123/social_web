const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// Basit bir test rotası
router.get('/', userController.getHome );

module.exports = router;
