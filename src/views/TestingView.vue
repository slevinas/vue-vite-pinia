<template>
  <div class="prose p-12 bg-red-100 rounded-md w-[65ch]">

    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <div v-if="courseData.showGoals">
      <h3>OUTPUT COURSE GOAL</h3>
      <p>Course Goal A: {{ courseData.courseGoalA }}</p>

      <p>Course Goal B: {{ courseData.courseGoalB }}</p>
      <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->

    </div>
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
import { ref, reactive } from 'vue'


const courseData = reactive({
  courseGoalA: 'Finish the course and learn Vue!',
  courseGoalB: 'Master Vue and build amazing apps!',
  showGoals: true,
  vueLink: 'https://vuejs.org'
})
// Task 3: Manage data in three ways
// => Separate refs
// => Ref Object
// => Reactive Object
// const courseGoalA = ref('Finish the course and learn Vue!')
// const courseGoalB = ref('Master Vue and build amazing apps!')
// const showGoals = ref(true)
// const vueLink = ref('https://vuejs.org')

// Task 2: Toggle (show/ hide) the goal with help of the button
const toggleGoal = () => {
  // Task 3: Manage data in three ways
  // => Separate refs
  // => Ref Object
  // => Reactive Object
  // courseGoalA.value = 'Master Vue and build amazing apps!'
  // courseGoalB.value = 'Finish the course and learn Vue!'

  // console.log('toggleGoal')
  // showGoals.value = !showGoals.value

  courseData.showGoals = !courseData.showGoals

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