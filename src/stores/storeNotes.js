import { storeDatabase } from '@/dataBase/storeDatabase.js'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
    }
  },
  actions: {
    async getNotesDb() {
      // let notes = []

      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${USER_TOKEN}`,
      //   },
      // }
      const notesURL = 'http://localhost:3077/projects/notes'

      const notesRes = await axios
        .get(notesURL)
        .then((response) => {
          console.log('from storeNotes.js getNotes')
          console.log(response)
          if (response.data) {
            // notes = response.data

            function compare(a, b) {
              return b.id - a.id
            }
            const sortedNotes = response.data.sort(compare)
            console.log('from storeNotes.js getNotes', sortedNotes)

            this.notes = sortedNotes
            return this.notes
          }
        })
        .catch((error) => {
          console.log('error ' + error)
          return error
        })
      return notesRes
    },
    async addNote(newNoteContent) {
      console.log(`addNote() was called with content: ${newNoteContent}`)

      let newNote = {
        content: newNoteContent,
      }
      // this.notes.value.unshift(newNote)

      // const USER_TOKEN = await this.getAccessToken()

      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${USER_TOKEN}`,
      //   },
      // }

      const URL = 'http://localhost:3077/projects/note'
      const data = newNote
      // const data = {
      //   content: newNoteContent,
      // }

      const noteRes = await axios
        .post(URL, data)
        .then((response) => {
          console.log('from storeNotes.js addNote', response.data)
          if (response.data) {
            console.log('from storeNotes.js addNote', response.data)
          }
        })
        .catch((error) => {
          console.log('error ' + error)
          return error
        })
    },
    async deleteNote(idToDelete) {
      console.log('from storeNotes.deleteNote received id', idToDelete)
      // const USER_TOKEN = await this.getAccessToken()

      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${USER_TOKEN}`,
      //   },
      // }

      const deleteURL = `http://localhost:3077/projects/note/${idToDelete}`
      const deletedNote = await axios.delete(deleteURL).then((response) => {
        console.log('from storeNotes.js deleteNote', response)
        if (response.data) {
          console.log('from storeNotes.js deleteNote', response.data)
        }
      })
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id)
      this.notes[index].content = content
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (idd) => {
        let content
        console.log('from storeNotes-getNoteContent')
        console.log(state.notes)
        // console.log(`from getNoteContent received ID ${id}`)
        const testContentOfNote = state.notes
        for (let i = 0; i < testContentOfNote.length; i++) {
          console.log(testContentOfNote[i].id)
          console.log(typeof testContentOfNote[i].id)
          console.log(typeof idd)

          if (testContentOfNote[i].id === parseInt(idd)) {
            console.log('testNoteContent is:')
            content = testContentOfNote[i].content
            console.log(testContentOfNote[i].content)
            return content
          }
          // console.log(
          //   `ObjectEntries of testContentOfNote is ${Object.entries(
          //     testContentOfNote[i]
          //   )}`
          // )
        }

        // const testContentOfNote2 = state.notes.map((note) => {
        //   console.log(note)
        // })

        // console.log('testNoteContent2 is:')
        // console.log(testContentOfNote2)
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach((note) => {
        count += note.content.length
      })
      return count
    },
  },
})
