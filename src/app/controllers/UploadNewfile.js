class UploadNewfile{
    index(req, res) {
        res.render('pages/upload-file/index');
    }
}

module.exports = new UploadNewfile();
