<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '../stores/post'
import { onMounted, ref, computed, watch } from 'vue'

const postStore = usePostStore()
const { posts, loading, error } = storeToRefs(usePostStore())

// const posts = ref([])
watch(posts, newValue => console.log('posts:', newValue))
watch(loading, newValue => console.log('loading:', newValue))
watch(error, newValue => console.log('error:', newValue))
const isDataLoaded = ref(false)




onMounted(async () => {
  await postStore.fetchPosts()
  isDataLoaded.value = true

})

// const currentPost = computed(() => {
//   const post = postStore.posts.find((post) => post.id === route.params.postId)
//   return post
// })


</script>

<template>
  <div v-if="isDataLoaded">
    <main>
      <p v-if="loading">Loading posts...</p>
      <p v-if="error">{{ error.message }}</p>

      <div v-if="posts">
        <div class="space-y-1 mb-4 flex flex-col" v-for="post in posts" :key="post.id">
          <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
          <p>{{ post.body }}</p>
        </div>
      </div>

    </main>
  </div>
</template>
