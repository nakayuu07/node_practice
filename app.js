console.log("app.js稼働開始!!")

const notes = require("./notes")
const yargs = require("yargs")

const argv = yargs.argv
const command = argv._[ 0 ]

if (command === "add")
{
  let note = notes.addNote(argv.title, argv.body)
  if (note)
  {
    console.log("noteが保存されました")
    notes.logNotes(note)
  } else
  {
    console.log("noteのタイトルが重複しています")
  }
} else if (command === "list")
{
  let allNotes = notes.showAll()
  console.log(`表示件数: ${allNotes.length}`)
  allNotes.forEach(note => notes.logNotes(note))
} else if (command === "read")
{
  let note = notes.readNote(argv.title)
  if (note)
  {
    console.log("見つかりました！")
    notes.logNotes(note)
  } else
  {
    console.log("見つかりませんでした")
  }
} else if (command === "remove")
{
  let isRemoved = notes.removeNote(argv.title)
  let message = isRemoved ? '削除されました' : '削除されませんでした'
  console.log(message)
}
