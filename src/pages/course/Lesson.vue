<template>
  <h2>Lesson</h2>
  <p>This is a lesson</p>

  <h2>{{ lesson.title }}</h2>
  <p>{{ lesson.text }}</p>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'

import VideoPlayer from '../../components/VideoPlayer.vue'

const route = useRoute()

const currentChapter = ref({})
const currentLesson = ref({})
const lesson = ref({})


const props = defineProps({
  lesson: Object
})



// const currentChapterTest = computed(() => {
//   return chapters.value.find((chapter) => chapter.slug === route.params.chapterSlug)
// })



</script>