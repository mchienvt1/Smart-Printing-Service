const express = require('express');
const {upload} = require('../app/helpers/filehelper');
const {singleFileUpload, multipleFileUpload, getallSingleFiles, getallMultipleFiles} = require('../app/controllers/UploadNewfile');
const uploadController = require('../app/controllers/UploadNewfile');
const router = express.Router();

router.get('/', uploadController.index);
router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);

// router.post('/upfile', printOrderController.modify);

module.exports = router;