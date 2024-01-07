import { defineStore } from 'pinia'
import courseData from '../data/coursData.js'

export const useStoreCourseData = defineStore('couseData-store', {
  state: () => {
    return {
      chapters: [],
      fetching: false
    }
  },

  getters: {
    course(state) {
      return state.course
    },
  },

  actions: {

    async getChapters() {
      this.fetching = true
      const response = courseData.chapters

      let data = []
      try {
        // const result = response
        // data = Array.from(result.chapters)
        this.chapters = response
        return response
        console.log('from storeCatalog.js fetchNewArrivals', this.chapter)
      } catch (err) {
        this.chapters = []
        console.error('Error loading new arrivals:', err)
        return err
      }

      this.fetching = false
    }
  },
})


// export const useCourse = () => {
//   return {
//     ...courseData,
//     chapters: courseData.chapters.map((chapter) => ({
//       ...chapter,
//       lessons: chapter.lessons.map((lesson) => ({
//         ...lesson,
//         path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
//       })),
//     })),
//   };
// };