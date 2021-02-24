const User = require('../models/User');

const UserCtrl =  {};


UserCtrl.GetUsers = async (req, res) => {
    const Users = await User.find();
    res.json({
        message: 'GET - USER ROUTES',
        Users,
    });
};

UserCtrl.PostUsers = (req, res) => {
    const { username } = req.body;

    const user = new User({
        username : username
    });
    
    user.save( (err, userDB) => {
        if(err){
            res.status(400).json({
                ok: false,
                message: err.message
            });
            return;
        }

        if(userDB) {
            return res.json({
                message: 'POST - USER ROUTES',
                user: userDB
            });
        }
    });
};


UserCtrl.GetById = async(req, res) => {
    const id = req.params.id

    const user = await User.findById(id);
    res.json({
        message: 'GET- USER ROUTES',
        user
    });
};


UserCtrl.Delete = async(req, res) => {
    const id = req.params.id
    
    await User.findByIdAndDelete(id);

    res.json({
        message: 'User Deleted',
    });
};

UserCtrl.Put = (req, res) => {
    const id = req.params.id
    const body = req.body;

    User.findByIdAndUpdate(id, body,{new: true}, (err, userDB) => {
        if(err){
            return res.status(400).json({
                ok:false,
                message: err.message
            });
        }

        res.json({
            message: 'PUT- USER ROUTES',
            User: userDB
        });
    });
};


module.exports = UserCtrl;