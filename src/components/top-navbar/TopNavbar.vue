

<template>
  <nav class="py-2 fixed-top">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><router-link to="/" class="nav-link px-2 active" aria-current="page">Home</router-link></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">About</a></li>
      </ul>
      <div class="flex-shrink-0 dropdown">
        <a href="#" class="d-block text-decoration-none" id="dropdownUser2" data-bs-toggle="dropdown"
          aria-expanded="false" style="margin-top:5px">
          <img src="/images-cloud/user_account_profile_icon.svg" alt="profile" width="24" height="24"
            class="rounded-circle">
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" style="">
          <li><router-link class="dropdown-item" to="/sign-in/">Sign-in</router-link></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="/register/">Register</a></li>
        </ul>
      </div>
      <div class="shopping-cart">
        <router-link to="/cart/" class="d-block text-decoration-none" id="dropdownUser2" aria-expanded="false"
          style="margin-top:4px">
          <img src="/images-cloud/basket_icon.svg" alt="cart" width="28" class="rounded-circle">
          <span class="badge bg-primary rounded-pill">{{ count }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useCart } from '/Users/sagilevinas/Desktop/My-EDU-sep-23/vue-pinia-nestbackend/testing/vite-project/src/stores/storeCart.js'




const count = ref(0)
const cart = useCart()

</script>

<style scoped src="./top-navbar.css"></style>
