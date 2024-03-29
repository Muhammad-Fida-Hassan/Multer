const upload = require('../upload/multer');

const fileChecker = (req, res, next) => {
    console.log(req.files)
    if (req.files && req.files.length === 1) {
        return upload.single('file')(req, res, next);
    } else if (Array.isArray(req.files)) {
        if (req.files.every(item => typeof item === 'object')) {
            const field = req.files.map(file => ({ name: file.fieldname }));
            return upload.fields(field)(req, res, next);
        } else {
            return upload.array('file', 2)(req, res, next);
        }
    } else {
        return res.status(400).send('Invalid files array.');
    }
};

module.exports = fileChecker;
