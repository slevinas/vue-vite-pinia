<script setup>
import TopNavbar from '../../components/top-navbar/TopNavbar.vue'
import NewArrivals from '../../components/new-arrivals/NewArrivals.vue'
import Footer from '/Users/sagilevinas/Desktop/My-EDU-sep-23/vue-pinia-nestbackend/testing/vite-project/src/components/footer/Footer.vue'


</script>


<template>
  <div class="d-flex flex-column align-items-center">
    <TopNavbar />
    <hr class="navbar-divider">
    <div class="container">
      <div id="top-section" class="top-text text-center">
        <h1>What the F is Middlemarch</h1>
        <!-- <p>Your nightly bookstore</p>
        <form>
          <input autofocus type="search" class="form-control form-control-dark" placeholder="Search books..."
            aria-label="Search">
          <button type="submit" class="submit"><img src="" alt="Search"></button>
        </form>
      </div> -->
      </div>
        <NewArrivals />
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <!-- Carousel items here -->
        </div>
        <Footer />
      </div>
    </div>
</template>


<style scoped>
.container .container-fluid .container-lg .container-md .container-sm .container-xl .container-xxl {
  width: 100%;
  padding-right: var(--bs-gutter-x, .75rem);
  padding-left: var(--bs-gutter-x, .75rem);
  margin-right: auto;
  margin-left: auto;
}

.wrapper {
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
}

.top-text {
  margin-bottom: 20px;
}

form {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

form .form-control {
  width: 50%;
  margin-right: 10px;
}

form .submit {
  align-self: center;
}

.carousel-item img {
  width: 100%;
  height: auto;
}
</style>

