<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">

      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <!-- <RouterLink v-if="lesson.sourceUrl" class="font-normal text-md text-gray-500" :to="lesson.sourceUrl">
        Download Source Code
      </RouterLink>
      <RouterLink v-if="lesson.downloadUrl" class="font-normal text-md text-gray-500" :to="lesson.downloadUrl">
        Download Video
      </RouterLink> -->
    </div>
    <!-- <VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" /> -->
    <p>{{ lesson.text }}</p>
    <!-- <LessonCompleteButton
      :model-value="isLessonComplete"
      @update:model-value="toggleComplete"
    /> -->
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
const chaptersWithPath = ref([])

onMounted(async () => {

  const chaptersRaw = await courseDataStore.getChapters()
  const chaptersLessonsPath = await chaptersRaw.map((chapter) => ({
    ...chapter,
    lessons: chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapters/${chapter.slug}/lesson/${lesson.slug}`,
    })),
  }))

  console.log(chaptersLessonsPath)

  chaptersWithPath.value = chaptersLessonsPath
  isDataLoaded.value = true
})

// const currentChapter = computed(() => {
//   const chapter = courseDataStore.chapters.find((chapter) => chapter.slug === route.params.chapterSlug)
//   return chapter
// })

// const currentLesson = computed(() => {
//   if (currentChapter.value && currentChapter.value.lessons) {
//     const lesson = currentChapter.value.lessons.find((lesson) => lesson.slug === route.params.lessonSlug)
//     return lesson
//   }
// })
///////////////////


const chapter = computed(() => {
  const currentChapter = chaptersWithPath.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  )

  return currentChapter
})

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  )
})

const title = computed(() => {
  return `${lesson.value.title} - ${course.title}`
})
useHead({
  title,
})

const progress = useState('progress', () => {
  return []
})

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false
  }

  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false
  }

  return progress.value[chapter.value.number - 1][lesson.value.number - 1]
})

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = []
  }

  progress.value[chapter.value.number - 1][lesson.value.number - 1] =
    !isLessonComplete.value
}


</script>