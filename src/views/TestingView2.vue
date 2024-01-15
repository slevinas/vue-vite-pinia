<template>
  <div class="prose p-12 bg-red-100 rounded-md w-[65ch]">
    <section class="container">
      <h2>{{ uName }}</h2>
      <h3>{{ age }}</h3>
      <button @click.prevent="setAge">Change Age</button>
      <div>
        <input type="text" placeholder="First Name" @input="setFirstName" />
        <input type="text" placeholder="Last Name" @input="setLastName" />

      </div>

    </section>


  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const uName = computed(function () {
  return `${firstName.value} - ${lastName.value}`
})

//   return `${userName.firstName} ${userName.lastName}`
// })

// const userName = reactive({
//   firstName: 'Sagi',
//   lastName: 'Levinas'
// })

const firstName = ref('')
const lastName = ref('')

const age = ref(30)

function setLastName(event) {
  lastName.value = event.target.value

}

function setFirstName(event) {
  firstName.value = event.target.value

}

function setAge() {
  age.value = age.value + 1
}



</script>

<style></style>