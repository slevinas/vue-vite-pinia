<script setup>
import TopNavbar from '../../components/top-navbar/TopNavbar.vue'
import Note from '../../components/notes/Note.vue'



// import { useCourseStore } from '../../stores/storeCoureData'
// import { onMounted } from 'vue'

// const courseStore = useCourseStore()

// onMounted(() => {

//   courseStore.getChapters()


// })


</script>
<template>
  <TopNavbar />
  <div class="flex flex-row justify-center flex-grow">
    <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
      <h3>Chapters</h3>
      <!-- <div
          class="space-y-1 mb-4 flex flex-col"
          v-for="chapter in chapters"
          :key="chapter.slug"
        >
          <h4>{{ chapter.title }}</h4>
          <RouterLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
            :to="lesson.path"
            :class="{
              'text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }"
          >
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </RouterLink>
        </div> -->

      <!-- <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" /> -->
    </div>


  </div>
</template>
