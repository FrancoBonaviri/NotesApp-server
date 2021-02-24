const { Router } = require('express');
const router = Router();

const { GetNotes, PostNotes, Put, Delete, GetByid } =  require('../controllers/NotesController');


router.route('/')
            .get( GetNotes )
            .post( PostNotes )
;


router.route('/:id')
            .get( GetByid )
            .put( Put )
            .delete( Delete )
;



module.exports = router;

