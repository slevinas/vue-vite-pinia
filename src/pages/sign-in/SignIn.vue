<script setup>
import TopNavbar from '../../components/top-navbar/TopNavbar.vue'
import Footer from '../../components/footer/Footer.vue'
</script>

<template>
  <div class="wrapper">
    <TopNavbar />

    <main class="form-signin">
      <form>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted"></p>
      </form>
    </main>

    <Footer />
  </div>
</template>

<style scoped src="./sign-in.css"></style>