<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const courseGoalA = ref('Finish the course and learn Vue!');
    const courseGoalB = ref('Master Vue and build amazing apps!');
    const vueLink = ref('https://vuejs.org');

    // Task 2: Toggle (show/ hide) the goal with help of the button
    const toggleGoal = () => {
      // Task 3: Manage data in three ways
      // => Separate refs
      // => Ref Object
      // => Reactive Object
      courseGoalA.value = 'Master Vue and build amazing apps!';
      courseGoalB.value = 'Finish the course and learn Vue!';
    };

    // Task 3: Manage data in three ways
    // => Separate refs
    // => Ref Object
    // => Reactive Object
    return {
      courseGoalA,
      courseGoalB,
      vueLink,
      toggleGoal
    };
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    
    <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button>Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->

  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
