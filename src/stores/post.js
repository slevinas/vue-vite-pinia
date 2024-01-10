import axios from 'axios'
import { defineStore } from 'pinia'

function compare(a, b) {
  return b.id - a.id
}


export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    },
    fetchAuthors: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    }
  },
  actions: {
    async fetchPosts() {
      const postsURL = `${process.env.API_BASE_URL}/posts/all`
      try {
        const response = await axios.get(postsURL)
        if (Array.isArray(response.data)) {
          let posts = response.data
          this.posts = posts
          // const postsString = JSON.stringify(this.posts)
          // console.log(`from posts.js recieved posts:`)
          // console.log(postsString)
          /*
          [
           {
            id: 1,
            title: 'First Post',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            userId: 1
          },
          ]

          */
          return this.posts
        } else {
          console.error('Response data is not an array')
        }
      } catch (error) {
        console.error('error ' + error)
      }
    },
    // async fetchPost(id) {
    //   this.post = null
    //   this.loading = true
    //   try {
    //     this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //       .then((response) => response.json())
    //   } catch (error) {
    //     this.error = error
    //   } finally {
    //     this.loading = false
    //   }
    // },
    async fetchPost(id) {
      const postsByIdURL = `${process.env.API_BASE_URL}/posts/byPostId/${id}`
      try {
        const response = await axios.get(postsByIdURL)
        if (Array.isArray(response.data)) {
          // let post = response.data.sort(compare)
          this.post = response.data
          return this.post
        } else {
          console.error('Response data is not an array')
        }
      } catch (error) {
        console.error('error ' + error)
      }
    },
  }
})