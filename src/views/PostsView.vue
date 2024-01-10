<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '../stores/post'

const { fetchPosts } = usePostStore()
const { posts, loading, error } = storeToRefs(usePostStore())

fetchPosts()
</script>

<template>
  <main>
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="posts">
      <div v-for="post in posts" :key="post.id">
        <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </main>
</template>
