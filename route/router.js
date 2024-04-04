const express = require('express');
const router = express.Router();
const Busboy = require('busboy');
const fs = require('fs');
const fileChecker = require('../Custom Middleware/customMiddle');

router.post('/', (req, res, next) => {
    const busboy = new Busboy({ headers: req.headers });

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        req.body[fieldname] = filename;
        const saveTo = 'uploads/' + filename;
        file.pipe(fs.createWriteStream(saveTo));
    });

    busboy.on('field', (fieldname, val) => {
        req.body[fieldname] = val;
    });

    busboy.on('finish', () => {
        console.log('Parsing finished.');
        fileChecker(req, res, next);
    });

    req.pipe(busboy);
});

module.exports = router;
