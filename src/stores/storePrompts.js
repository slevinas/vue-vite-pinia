import { defineStore } from 'pinia'
import courseData from '/Users/sagilevinas/Desktop/My-EDU-sep-23/vue-pinia-nestbackend/vue-comp-api-notes-pinia-nestbackend/src/data/courseData.js'

export const usePromptDataStore = defineStore('promptDataStore', {
  state: () => {
    return {
      chapters: [],

      // fetching: false
    }
  },

  getters: {
    course(state) {
      return state.course
    },
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId)
    },
    getCurrenChapterByChapterSlug(state) {
      return (chapterSlug) => state.chapters.find((chapter) => chapter.slug === chapterSlug)
    },


    getCurrentLessonByLessonSlug(state) {
      return (lessonSlug) => state.chapters.find((lesson) => lesson.slug === lessonSlug)
    }

  },

  actions: {

    async getChapters() {
      this.fetching = true
      // const response = courseData.chapters




      try {
        // const result = response
        // data = Array.from(result.chapters)
        let chapters = courseData.chapters.map((chapter) => ({
          ...chapter
        }))
        console.log('from storeCourseData', chapters)

        this.chapters = chapters
        return this.chapters

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