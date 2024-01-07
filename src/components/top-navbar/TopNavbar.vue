<template>
  <nav class="navbar fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <ul class="nav d-flex align-items-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link px-2 active" aria-current="page">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/note" class="nav-link px-2 active" aria-current="page">
            Note
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/course" class="nav-link px-2 active" aria-current="page">
            Test
          </router-link>
        </li>
        <li class="nav-item"><a href="#" class="nav-link px-2">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">About</a></li>
        <div class="dropdown">
          <a href="#" class="d-block text-decoration-none" id="dropdownUser2" data-bs-toggle="dropdown"
            aria-expanded="false">
            <img src="/images-cloud/user_account_profile_icon.svg" alt="profile" width="24" height="24"
              class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li>
              <router-link class="dropdown-item" to="/sign-in/">
                Sign-in
              </router-link>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>

            </li>
          </ul>
        </div>
        <div class="shopping-cart ms-3">
          <router-link to="/cart/" class="d-block text-decoration-none" id="dropdownUser2" aria-expanded="false">
            <img src="/images-cloud/basket_icon.svg" alt="cart" width="28" class="rounded-circle">

            <span class="badge bg-primary rounded-pill">
              {{ count }}
            </span>
          </router-link>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useCart } from '/Users/sagilevinas/Desktop/My-EDU-sep-23/vue-pinia-nestbackend/testing/vite-project/src/stores/storeCart.js'

const count = ref(0)
const cart = useCart()
</script>

<style scoped>
.navbar {
  background-color: #f8f9fa;
}

.dropdown,
.dropend,
.dropstart,
.dropup {
  position: relative;
}

.nav-link {
  color: #333;
}

.nav-link.active {
  color: #007bff;
}

.dropdown-menu {
  min-width: auto;
}

.shopping-cart .badge {
  position: absolute;
  top: -10px;
  right: -10px;
}
</style>