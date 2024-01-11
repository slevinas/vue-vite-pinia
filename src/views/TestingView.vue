<template>
  <div>
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <h3 v-if="showGoals">OUTPUT COURSE GOAL</h3>
    <p>Course Goal A: {{ courseGoalA }}</p>

    <p>Course Goal B: {{ courseGoalB }}</p>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="toggleGoal" class="goal-button">Toggle
      Goal</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->

  </div>
</template>

<script setup>
import { ref } from 'vue'



// Task 3: Manage data in three ways
// => Separate refs
// => Ref Object
// => Reactive Object
const courseGoalA = ref('Finish the course and learn Vue!')
const courseGoalB = ref('Master Vue and build amazing apps!')
const showGoals = ref(true)
const vueLink = ref('https://vuejs.org')

// Task 2: Toggle (show/ hide) the goal with help of the button
const toggleGoal = () => {
  // Task 3: Manage data in three ways
  // => Separate refs
  // => Ref Object
  // => Reactive Object
  courseGoalA.value = 'Master Vue and build amazing apps!'
  courseGoalB.value = 'Finish the course and learn Vue!'

  console.log('toggleGoal')
  showGoals.value = !showGoals.value
}

// Task 3: Manage data in three ways
// => Separate refs
// => Ref Object
// => Reactive Object




</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 3rem;
  text-align: center;
}

.goal-button {
  background-color: #4CAF50;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
}

.goal-button:hover {
  background-color: #45a049;
}
</style>