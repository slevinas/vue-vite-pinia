<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '../stores/post'
import { onMounted, ref, computed, watch } from 'vue'

const postStore = usePostStore()

const authors = ref([])

const isDataLoaded = ref(false)

onMounted(async () => {
  await postStore.fetchPosts()
  if (postStore.posts) {
    let authorsArray = postStore.posts.map(post => post.author)
    if (Array.isArray(authorsArray)) {
      authorsArray = [...new Set(authorsArray)]
      console.log(authorsArray)
      authors.value = authorsArray

      isDataLoaded.value = true
    }
  }
})
</script>

<template>
  <div v-if="isDataLoaded">
    <div v-for="(author, index) in authors" :key="index">
      <RouterLink :to="`/author/${author}`">{{ author }}</RouterLink>
    </div>
  </div>
</template>