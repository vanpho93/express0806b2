const express = require('express');
const bodyParser = require('body-parser');
const parser = bodyParser.urlencoded({ extended: false });

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.post('/xuLy', parser, (req, res) => {
    console.log(req.body);
    res.send('Da nhan duoc request');
});

app.listen(3000, () => console.log('Server started!'));