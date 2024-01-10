import axios from 'axios'
import { defineStore } from 'pinia'
import { usePostStore } from './post'

function compare(a, b) {
  return b.id - a.id
}

export const useAuthorStore = defineStore({
  id: 'author',
  state: () => ({
    authors: []
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore()
      return state.authors.find((author) => author.id === postStore.post.userId)
    }
  },
  actions: {

    async fetchAuthors() {
      const postUsersURL = `${process.env.API_BASE_URL}/posts-users`
      try {
        const response = await axios.get(postUsersURL)
        if (Array.isArray(response.data)) {
          // let authors = response.data.sort(compare)
          let authors = response.data

          this.authors = authors
          const authorsString = JSON.stringify(this.authors)
          console.log(`from authors.js recieved authors:`)
          console.log(authorsString)
          return this.authors
        } else {
          console.error('Response data is not an array')
        }
      } catch (error) {
        console.error('error ' + error)
      }
    },
  }
})