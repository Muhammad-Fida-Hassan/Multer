const express = require("express");
const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, 'images/');
    } else if (file.mimetype.startsWith('video')) {
      cb(null, 'videos/');
    } else {
      cb(new Error('Invalid file type'));
    }
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    cb(null, new Date().toISOString() + '-' + file.originalname + fileExtension);
  }
});

const upload = multer({ storage: imageStorage });

module.exports = upload;
