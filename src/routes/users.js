const { Router } = require('express');
const router = Router();
const { GetById, GetUsers, Delete, Put, PostUsers} = require('../controllers/UsersControllers');

router.route('/')
    .get( GetUsers )
    .post( PostUsers )
;

router.route('/:id')
    .get( GetById )
    .put( Put )
    .delete( Delete )
;


module.exports = router;

