const chalk = require('chalk')
const fs = require('fs')
const moment = require('moment')

const addNote = (title, body) => 
{
    let notes = loadNotes()

    debugger

    let duplicateNote = notes.filter((note) => {
        return note.title === title
    })
    
    if (duplicateNote.length === 0)
    {
        let newNote = {
            title: title, body: body, created_at: moment().format()
        }
    
        notes.push(newNote)
    
        saveNotes(notes)

        console.log('New note added !')
    }
    else
    {
        console.log('Note title already exists !')
    }
}

const removeNote = (title) =>
{
    let notes = loadNotes()

    let notesToKeep = notes.filter((note) => {
        return note.title !== title
    })

    saveNotes(notesToKeep)
}

const listNotes = () => {
    let notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    let notes = loadNotes()
    let noteToRead = notes.find((note) => note.title === title)
    // console.log(noteToRead)
    if(noteToRead)
    {
        console.log(chalk.green(noteToRead.body))
    }
    else{
        console.log(chalk.red('Not found'))
    }
    
}

const loadNotes = function()
{
    try {
        let notesBuffer = fs.readFileSync('notes.json')
        let notesJSON = notesBuffer.toString()
        return JSON.parse(notesJSON)
    } catch (error) {
        console.log(error)
        return []
    }
}

const saveNotes = (notes) =>
{
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}