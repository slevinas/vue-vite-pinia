<template>
  <div v-if="isDataLoaded">
    <h2>Lesson Title: </h2>

    <div>Current Chapter Title:
      <h2>{{ currentChapter.title }}</h2>
    </div>

    <div>Current Lesson Title:
      <h2>{{ currentLesson.title }}</h2>
    </div>

    <div>Current Lesson Text:
      <h2>{{ currentLesson.text }}</h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCoureDataStore } from '/Users/sagilevinas/Desktop/My-EDU-sep-23/vue-pinia-nestbackend/vue-comp-api-notes-pinia-nestbackend/src/stores/storeCourseData.js'
import { storeToRefs } from 'pinia'
const route = useRoute()
const courseDataStore = useCoureDataStore()
const isDataLoaded = ref(false)

onMounted(async () => {
  
  await courseDataStore.getChapters()
  isDataLoaded.value = true
})

const currentChapter = computed(() => {
  const chapter = courseDataStore.chapters.find((chapter) => chapter.slug === route.params.chapterSlug)
  return chapter
})

const currentLesson = computed(() => {
  if (currentChapter.value && currentChapter.value.lessons) {
    const lesson = currentChapter.value.lessons.find((lesson) => lesson.slug === route.params.lessonSlug)
    return lesson
  }
})
</script>