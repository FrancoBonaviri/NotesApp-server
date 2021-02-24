const Note = require('../models/Note');


const notesCtrl = {};


notesCtrl.GetNotes = async(req, res) => {
    const notes = await Note.find();
    res.json({
        message: 'GET - NOTES ROUTES',
        notes,
    });
};


notesCtrl.PostNotes = (req, res) => {
    
    const { title, content, author, date } = req.body;
    
    const newNote = new Note({
        title: title,
        content: content, 
        author: author,
        date: date
    });
    
    newNote.save( (err, noteDB) => {
        if( err ){
            res.status(400).json({
                ok: false,
                message: 'Unknow error'
            });
        }

        if( noteDB ){
            res.json({
                ok: true,
                message: 'Note Saved',
                note: noteDB
            });
        }

    });

};


notesCtrl.GetByid = (req, res) => {
  
    const id = req.params.id;

    Note.findById(id, ( err, noteDB ) => {
        if( !noteDB ){
            res.status(400).json({
                ok: false,
                message: 'Note not found'
            });
            return;
        }

        if( err ){
            res.status(400).json({
                ok: false,
                message: 'Note not found'
            });
            return;
        }

        if( noteDB ){
            res.json({
                ok: true,
                message: 'Note Saved',
                note: noteDB
            });
            return;
        }
    });
};


notesCtrl.Delete = (req, res) => {
    const id = req.params.id;

    Note.findByIdAndDelete(id, ( err, noteDB ) => {
        if( err ){
            res.status(400).json({
                ok: false,
                message: 'Note not found'
            });
        }

        if( noteDB ){
            res.json({
                ok: true,
                message: 'Note Deleted',
                note: noteDB
            });
        }
    });
};


notesCtrl.Put =  (req, res) => {
   const id = req.params.id;
   const task = req.body;

   Note.findByIdAndUpdate(id, task, {new: true} , (err, noteDB) => {
       if( err ) {
            res.status(400).json({
                ok: false,
                message: err.message
            });
            return;
        }

       if( !noteDB ){
           res.status(400).json({
               ok: false,
               message: 'Unknow error'
           });
           return;
       }

       if( noteDB ) {
           res.json({
               ok: true,
               message: 'Note Updated',
               note: noteDB
           });
        }
    });
    
};

module.exports = notesCtrl;