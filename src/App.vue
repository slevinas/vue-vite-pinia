<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div>
      <nav>
        <RouterLink to="/">Posts</RouterLink> -
        <RouterLink to="/authors">Authors</RouterLink> -
        <RouterLink to="/course">Course</RouterLink> -
        <RouterLink to="/testing">Testing</RouterLink> -
        <RouterLink to="/testing2">Testing-2 </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
.navbar {
  background-color: lightgreen;
  padding: 1.2rem;
}
</style>