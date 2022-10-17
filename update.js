const fs = require('fs')

const update = function(note, oldNote){

    const oNote = JSON.parse(oldNote)
     const newNote = oNote.map(function(n,idx){
        if(n.id == note.id) {
            n.name = note.name
            n.gender = note.gender   
        
        } 
        return n
     })
     fs.writeFileSync('./note.txt', JSON.stringify(newNote))

     console.log(newNote)
}

module.exports = update