const { response } = require('./app');
const User = require('./model');

const getUsers = (req,res,next) => {
    User.find()
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error: error})
        })
};

const addUser = (req,res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error: error})
        })
};

const updateUser = (req,res,next) => {
    const {id,name}= req.body;
    User.updateOne({id: id}, {$set: {name:name}})
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error: error})
        })
}

const deleteUser = (req,res,next) => {
    const id = req.body.id;
    User.deleteOne({id:id})
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error: error})
        })
}

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;