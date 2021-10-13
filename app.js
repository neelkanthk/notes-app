const notes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')

const yargs = require('yargs')
const { strict } = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            title: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        console.log('Listing Notes')
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Reading note')
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(process.argv)

// const command = process.argv[2]

// if(command === 'add')
// {
//     console.log('adding notes')
// }
// if(command === 'remove')
// {
//     console.log('removing notes')
// }

// var notes = getNotes()
// console.log(chalk.yellow.bgRed(notes))
// console.log(validator.isEmail('neelkanth@example.com'))


// const fs = require('fs')
// fs.appendFileSync('notes.txt', 'This text is appended by node!')