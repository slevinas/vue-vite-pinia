<template>
  <div class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center">
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          App:
          <span class="font-bold">Zigi's ChatBot</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
        <h3>Chapters</h3>
        <div class="space-y-1 mb-4 flex flex-col" v-for="chapter in chapters" :key="chapter.slug">
          <!-- <h5 class="text-green-500">Chapter Slug from Source: {{ chapter.slug }}</h5> -->
          <h4>{{ chapter.title }}</h4>
          <RouterLink v-for="(lesson, index) in chapter.lessons" :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4" :to="lesson.path" :class="{
              'text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }">
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </RouterLink>
        </div>
      </div>



      <div class="prose p-12 bg-red-100 rounded-md w-[65ch]">

        <!-- <LessonVue :lesson="currentLesson" /> -->
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
const chapters = ref([]) // Declare chapters as a reactive reference
// console.log(chapters)
const route = useRoute()

const currentChapter = computed(() => {
  const chapter = chapters.value.find((chapter) => chapter.slug === route.params.chapterSlug)
  console.log(chapter)
  return chapter
})


//   // return chapters.value.find((chapter) => chapter.slug === route.params.chapterSlug)
// })

const currentLesson = computed(() => {
  return currentChapter.value.lessons.find((lesson) => lesson.slug === route.params.lessonSlug)
})

console.log(chapters.value)


onMounted(async () => {
  const chaptersRaw = await courseDataStore.getChapters()

  console.log('chaptersRaw')
  console.log(chaptersRaw)

  const chaptersLessonsPath = await chaptersRaw.map((chapter) => ({
    ...chapter,
    lessons: chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapters/${chapter.slug}/lesson/${lesson.slug}`,
    })),
  }))

  console.log(chaptersLessonsPath)

  chapters.value = chaptersLessonsPath

})


// chapters.value = await courseDataStore.getChapters() // Assign the fetched chapters to chapters.value




</script>