const express = require('express');
const router = express.Router();
const { getPackages, createPackage, getPackageById, updatePackage, deletePackage } = require('../controllers/package.controller');

router.post('/package' , createPackage);
router.get('/packages' , getPackages);
router.get('/packages/:id' , getPackageById);
router.put('/packages/:id' , updatePackage);
router.delete('/packages/:id' , deletePackage);

module.exports = router;