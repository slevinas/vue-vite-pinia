import { createRouter } from 'vue-router'
import Cart from '../pages/cart/Cart.vue'
import Homepage from '../pages/home/Home.vue'
import SignIn from '../pages/sign-in/SignIn.vue'

import CourseView from '../pages/test/CourseView.vue'
import TestView from '../pages/test/TestView.vue'
import LessonVue from '../pages/course/Lesson.vue'


const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/sign-in/',
    component: SignIn
  },
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
    path: '/note/',
    component: TestView
  },
  {
    path: '/course/',
    component: CourseView
  },
]
export default function (history) {
  return createRouter({
    history,
    routes
  })
}