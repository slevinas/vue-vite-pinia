import axios from 'axios'
import { defineStore } from 'pinia'

function compare(a, b) {
  return b.id - a.id
}

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [],
  }),
  actions: {
    async getNotesDb() {
      const notesURL = `${process.env.API_BASE_URL}/projects/notes`
      try {
        const response = await axios.get(notesURL)
        if (Array.isArray(response.data)) {
          let notes = response.data.sort(compare)
          this.notes = notes
          return this.notes
        } else {
          console.error('Response data is not an array')
        }
      } catch (error) {
        console.error('error ' + error)
      }
    },
    async addNote(newNoteContent) {
      const URL = `${process.env.API_BASE_URL}/projects/note`
      const data = { content: newNoteContent }
      try {
        const response = await axios.post(URL, data)
        console.log('from storeNotes.js addNote', response.data)
      } catch (error) {
        console.error('error ' + error)
      }
    },
    async deleteNote(idToDelete) {
      const deleteURL = `${process.env.API_BASE_URL}/projects/note/${idToDelete}`
      try {
        const response = await axios.delete(deleteURL)
        console.log('from storeNotes.js deleteNote', response.data)
      } catch (error) {
        console.error('error ' + error)
      }
    },
    updateNote(id, content) {
      const note = this.notes.find((note) => note.id === id)
      if (note) note.content = content
    },
  },
  getters: {
    getNoteContent: (state) => (id) => {
      const note = state.notes.find((note) => note.id === parseInt(id))
      return note ? note.content : undefined
    },
    totalNotesCount: (state) => state.notes.length,
    totalCharactersCount: (state) =>
      state.notes.reduce((count, note) => count + note.content.length, 0),
  },
})