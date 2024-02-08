const express = require('express');
const app = express();
const cors =require('cors');
const controller = require('./controller');


app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users',(req,res)=> {
    controller.getUsers((req,res,next) => {
        res.send();
    });
});

app.post('/createuser', (req,res) => {
    controller.addUser(req.body,(callack) => {
        res.send();
    });
});

app.post('/updateuser', (req,res) => {
    controller.updateUser(req.body,(callack) => {
        res.send(callack);
    });
});

app.post('/deleteuser', (req,res) => {
    controller.deleteUser(req.body,(callack) => {
        res.send(callack);
    });
});

module.exports = app;

