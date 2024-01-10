import axios from 'axios'
import { defineStore } from 'pinia'
import { usePostStore } from './post'

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: []
  }),
  getters: {
    getPostComments: (state) => {
      const postSore = usePostStore()
      return state.comments.filter((post) => post.postId === postSore.post.id)
    }
  },
  actions: {

    async fetchComments() {
      const commentURL = `${process.env.API_BASE_URL}/comments`
      try {
        const response = await axios.get(commentURL)
        if (Array.isArray(response.data)) {
          let comments = response.data
          this.comments = comments
          return this.comments
        } else {
          console.error('Response data is not an array')
        }
      } catch (error) {
        console.error('error ' + error)
      }
    },
  }
})