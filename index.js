const express = require('express');
const path = require('path');
const filesRouter = require('./route/router');

const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    return res.render('view');
});

app.use('/upload', filesRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
