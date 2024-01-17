<template>
  <div class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center">
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          App:
          <span class="font-bold">Zigi's Testing ViewApps </span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
        <h3>Apps:</h3>
        <!-- <ul>
          <li v-for="name in componentNames" :key="name" @click="selectComponent(name)">
            {{ name }}
          </li>
        </ul>
        <component :is="currentComponent"></component> -->
        <RouterLink v-for="(component, index) in componentsObjArr" :key="component.slug"
          class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4" :to="component.path" :class="{
            'text-blue-500': component.path === $route.fullPath,
            'text-gray-600': component.path !== $route.fullPath,
          }">
          <span class="text-gray-500">{{ index + 1 }}.</span>
          <span>{{ component.name }}</span>
        </RouterLink>
      </div>



      <div class="prose p-12 bg-red-100 rounded-md w-[65ch]">

        <RouterView />


      </div>
    </div>
  </div>
</template>


<script setup>
// import TopNavbar from '../../components/top-navbar/TopNavbar.vue'
// import Note from '../../components/notes/Note.vue'



// import { useStoreNotes } from '../../stores/storeNotes.js'
import { useCoureDataStore } from '/Users/sagilevinas/Desktop/My-EDU-sep-23/vue-pinia-nestbackend/vue-comp-api-notes-pinia-nestbackend/src/stores/storeCourseData.js'
import { onMounted, ref, computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import LessonVue from '/Users/sagilevinas/Desktop/My-EDU-sep-23/vue-pinia-nestbackend/vue-comp-api-notes-pinia-nestbackend/src/views/course/LessonView.vue'


const courseDataStore = useCoureDataStore()
const appsInfoArray = ref([]) // Declare chapters as a reactive reference
// console.log(chapters)
const route = useRoute()

const appsData = ref([]) // Declare chapters as a reactive reference

const currentComponent = ref(null)

// const componentNames = ['Component1', 'Component2', 'Component3']



// const loadComponent = (name) => import(`@/views/tests/${name}.vue`)

// const selectComponent = (name) => {
//   loadComponent(name).then(component => {
//     currentComponent.value = component.default
//   })
// }


const componentsObjArr = [
  {
    name: 'Component1',
    slug: '1-introduction-to-typescript-with-vue-js-3',
    path: `/tests/1-view-1/TestView1`,
  },
  {
    name: 'Component2',
    slug: '2-typescript-in-vue-components',
    path: `/tests/1-view-2/TestView2`,
  },
  {
    name: 'Component3',
    slug: '3-typing-component-events',
    path: `/tests/1-view-3/TestView3`,
  },
]



onMounted(async () => {

  const pathToDir = "src/views/testing"



  // const chaptersRaw = await courseDataStore.getChapters()

  // console.log('chaptersRaw')
  // console.log(chaptersRaw)





  appsInfoArray.value = apps

  console.log('chapters.value')
  console.log(appsInfoArray.value)

})




// chapters.value = await courseDataStore.getChapters() // Assign the fetched chapters to chapters.value
const apps = [

  {
    title: 'Introduction to TypeScript with Vue.js 3',
    componentName: '1-introduction-to-typescript-with-vue-js-3',
    path: `/tests/1-view-1/TestView1`,
  },
  {
    title: 'TypeScript in Vue Components',
    componentName: '2-typescript-in-vue-components',
    path: `/tests/1-view-2/TestView2`,

  },
  {
    title: 'Typing Component Events',
    componentName: '3-typing-component-events',
    path: `/tests/1-view-3/TestView3`,

  },
]






</script>