console.log("note.js稼働開始")

const fs = require("fs")

let fetchNotes = () => {
  try
  {
    let notesString = fs.readFileSync("note-data.json")
    return JSON.parse(notesString)
  } catch (e)
  {
    return [];
  }
}

let saveNotes = (notes) => {
  fs.writeFileSync("note-data.json", JSON.stringify(notes))
}

let addNote = (title, body) => {
  let notes = fetchNotes()
  let note = {
    title,
    body
  }

  let duplicatenote = notes.filter(note => note.title === title)
  if (!duplicatenote.length)
  {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

let showAll = () => {
  return fetchNotes()
}

let readNote = title => {
  let notes = fetchNotes()
  let filterdNote = notes.find(note => note.title === title)
  return filterdNote
}

let removeNote = title => {
  let notes = fetchNotes()
  let filterdNotes = notes.find(note => note.title !== title)
  saveNotes(filterdNotes)
  return notes.length !== filterdNotes.length
}

let logNotes = note => {
  console.log("------------------")
  console.log(`tilte: ${note.title}`)
  console.log(`body: ${note.body}`)
}

module.exports = {
  addNote,
  showAll,
  readNote,
  removeNote,
  logNotes
}