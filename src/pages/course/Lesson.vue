<template>
  <h2>Lesson Title: </h2>
  <p>
  <h2>{{ currentLesson }}</h2>
  </p>

  <p>Current Lesson Text: {{ currentLesson }}</p>
  <!-- <h2>{{ lesson }}</h2> -->


  <p>Chapter Slug: {{ chapterSlug }}</p>
  <p>Lesson Slug: {{ lessonSlug }}</p>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCoureDataStore } from '../../stores/storeCoureData.js'

const route = useRoute()
const chapters = ref([])
const courseDataStore = useCoureDataStore()

onMounted(async () => {
  chapters.value = await courseDataStore.getChapters()
})

const currentChapter = computed(() => {
  return chapters.value.find((chapter) => chapter.slug === route.params.chapterSlug)
})

const currentLesson = computed(() => {
  if (currentChapter.value) {
    return currentChapter.value.lessons.find((lesson) => lesson.slug === route.params.lessonSlug)
  }
})

// const props = defineProps({
//   chapterSlug: String,
//   lessonSlug: String
// })
</script>