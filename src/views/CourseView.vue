<template>
  <div v-if="isDataLoaded">
   

      
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
// const { chapters } = useCoureDataStore()
// const chapters = ref([]) // Declare chapters as a reactive reference
// console.log(chapters)
const route = useRoute()
const isDataLoaded = ref(false)



onMounted(async () => {

  await courseDataStore.getChapters()
  isDataLoaded.value = true


  console.log('Chapters fetched:', courseDataStore.chapters)

})

const chapters = computed(() => {
  return courseDataStore.chapters
})




</script>