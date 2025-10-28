const express = require('express');
const FileController = require('../Controllers/FileController');
const router = express.Router();

router.post("/upload-file",FileController.upload);

module.exports = router;