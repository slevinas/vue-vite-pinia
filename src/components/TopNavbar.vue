<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/cart/">Cart</router-link>
  <router-link to="/sign-in/">Sign In</router-link>
  <router-link to="/test/">Tests</router-link>
</template>

<style scoped>
.router-link-exact-active,
.router-link-active {
  color: #42b983;
  text-decoration: none;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
  margin-right: 20px;
  /* Add right margin for spacing */
}

.router-link-exact-active:hover,
.router-link-active:hover {
  background-color: #e9e9e9;
}

.read-the-docs {
  color: #888;
}
</style>
