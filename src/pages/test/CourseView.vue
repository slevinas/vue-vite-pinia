<template>
  <div class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center">
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">Mastering Nuxt 3</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
        <h3>Chapters</h3>
        <div class="space-y-1 mb-4 flex flex-col" v-for="chapter in chapters" :key="chapter.slug">
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

      <!-- <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <RouterView />
      </div> -->
      <div class="prose p-12 bg-red-100 rounded-md w-[65ch]">
        <h2>Lesson</h2>
        <p>This is a lesson</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import TopNavbar from '../../components/top-navbar/TopNavbar.vue'
// import Note from '../../components/notes/Note.vue'



// import { useStoreNotes } from '../../stores/storeNotes.js'
import { useCoureDataStore } from '../../stores/storeCoureData.js'
import { onMounted, ref } from 'vue'

const courseDataStore = useCoureDataStore()
const chapters = ref([]) // Declare chapters as a reactive reference
// console.log(chapters)

onMounted(async () => {
  const chaptersRaw = await courseDataStore.getChapters()
  chapters.value = chaptersRaw.map((chapter) => ({
    ...chapter,
    lessons: chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    })),
  }))
  // chapters.value = await courseDataStore.getChapters() // Assign the fetched chapters to chapters.value
  console.log(chapters.value)
})



</script>