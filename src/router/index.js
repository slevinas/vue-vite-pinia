import { createRouter, createWebHistory } from 'vue-router'
import AuthorView from '../views/AuthorView.vue'
import CourseView from '../views/CourseView.vue'
import PostView from '../views/PostView.vue'
import PostsView from '../views/PostsView.vue'
import LessonVue from '/Users/sagilevinas/Desktop/My-EDU-sep-23/vue-pinia-nestbackend/vue-comp-api-notes-pinia-nestbackend/src/views/course/LessonView.vue'
import TestingView from '/Users/sagilevinas/Desktop/projects/my-repositiries/Vue3-Vite-Pinia-nested-routes/src/views/TestingView.vue'

import TestingView2 from '/Users/sagilevinas/Desktop/projects/my-repositiries/Vue3-Vite-Pinia-nested-routes/src/views/TestingView2.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsView
    },
    { path: '/post/:id', name: 'post', component: PostView },
    {
      path: '/authors',
      name: 'authors',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AuthorsView.vue')
    },
    { path: '/author/:username', name: 'author', component: AuthorView },
    {
      path: '/course',
      component: CourseView,
      children: [
        {
          path: 'chapters/:chapterSlug/lesson/:lessonSlug',
          name: 'Lesson',
          components: {
            default: LessonVue,
            lesson: LessonVue
          },
          props: {
            default: true,
            lesson: true
          }
        },
        // other child routes...
      ]
    },
    {
      path: '/testing',
      component: TestingView,
      children: [
        {
          path: 'tests/:appSlug/componentName/:componentNameSlug',
          name: 'Lesson',
          components: {
            default: LessonVue,
            lesson: LessonVue
          },
          props: {
            default: true,
            lesson: true
          }
        },
        // other child routes...
      ]
    },

    {
      path: '/testing',
      name: 'testing',
      component: TestingView

    },
    {
      path: '/testing2',
      name: 'testing2',
      component: TestingView2

    },


    // { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') }



  ]
})

export default router