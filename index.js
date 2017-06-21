const express = require('express');
const bodyParser = require('body-parser');
const PhepTinh = require('./PhepTinh');

const parser = bodyParser.urlencoded({ extended: false });
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
const arrUsers = [
    new User('pho', '123'),
    new User('khoa', '321'),
    new User('tien', '456')
];

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.get('/tinh', (req, res) => res.render('tinh'));

app.get('/admin', (req, res) => res.render('admin', { arrUsers })); //Route 1

app.get('/dangky', (req, res) => res.render('dangky'));

app.post('/dangky', parser, (req, res) => {
    const { username, password } = req.body;
    const user = new User(username, password);
    arrUsers.push(user);
    res.send('Dang ky thanh cong: ' + username);
    // res.send('Dang ky thanh cong');
});

app.post('/tinh', parser, (req, res) => {
    const { soA, soB, tenPt } = req.body;
    const pt = new PhepTinh(soA, soB, tenPt);
    res.send(pt.getResultString());
});

app.post('/xuLy', parser, (req, res) => {
    console.log(req.body.username);
    res.send('Da nhan duoc request');
});

app.listen(3000, () => console.log('Server started!'));
