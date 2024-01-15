<template>
  <div class="prose p-12 bg-red-100 rounded-md w-[65ch]">
    <section class="container">
      <h2>{{ userName }}</h2>
      <h3>{{ age }}</h3>
      <button @click="setAge">Change Age</button>
      <div>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />

      </div>

    </section>


  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'




</script>

<style></style>