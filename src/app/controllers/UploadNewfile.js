const SingleFile = require('../models/singlefile');
const MultipleFile = require('../models/multiplefile');

module.exports.index = (req, res) => {
    res.render('pages/upload-file/index',{
    pageTitle: "Tải tài liệu"
    });
}


module.exports.singleFileUpload = async (req, res, next) => {
    try{
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}
module.exports.multipleFileUpload = async (req, res, next) => {
    try{
        let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            filesArray.push(file);
            console.log(file);
        });
        console.log(req.body);
        const multipleFiles = new MultipleFile({
            title: req.body.title,
            files: filesArray 
        });
        await multipleFiles.save();
        // Update User ID 
        const user_id = req.cookies.tokenUser;
        await multipleFiles.updateOne ( 
            {
            _id: req.params.orderId
            },
            {
            $set: {
                "user_id": user_id
            }
            }
        )
        // res.status(201).send('Files Uploaded Successfully');
        res.redirect('/print/modify');
    }catch(error) {
        res.status(400).send(error.message);
    }
}

module.exports.getallSingleFiles = async (req, res, next) => {
    try{
        const files = await SingleFile.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}
module.exports.getallMultipleFiles = async (req, res, next) => {
    try{
        const files = await MultipleFile.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

// module.exports = {
//     singleFileUpload,
//     multipleFileUpload,
//     getallSingleFiles,
//     getallMultipleFiles
// }
