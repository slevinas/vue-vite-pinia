<template >
  <div class="container new-arrivals-panel">
    <h1>New Arrivals</h1>
    <p>Check out our latest books</p>


    <div class="row mb-2 new-arrival">
      <div class="col-md-6" v-for="bookDetail in newArrivals" :key="bookDetail.isbn13">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary book-category">{{ bookDetail.category }}</strong>
            <h3 class="mb-0 book-title">{{ bookDetail.title }}</h3>
            <div class="mb-1 text-muted book-author">{{ bookDetail.author }}</div>
            <p class="card-text mb-auto book-description">{{ bookDetail.description }}</p>

            <div class="input-group">
              <span class="price"><input type="text" :style="{ '--currency': bookDetail.currency }"
                  :value="bookDetail.price" class="form-control" readonly aria-label=""></span>
              <button @click="addToCart(bookDetail)" class="btn btn-outline-secondary add-to-cart" type="button"><img
                  src="/images-cloud/basket_icon.svg" alt="Add to basket"></button>
            </div>

          </div>
          <div class="col-auto d-md-block book-thumbnail">
            <img :src="bookDetail.image" :alt="bookDetail.title + ' by ' + bookDetail.author" />
          </div>
        </div>
      </div>


    </div>
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue'
import { useCatalog } from '/Users/sagilevinas/Desktop/My-EDU-sep-23/vue-pinia-nestbackend/testing/vite-project/src/stores/storeCatalog.js'
import { useCart } from '/Users/sagilevinas/Desktop/My-EDU-sep-23/vue-pinia-nestbackend/testing/vite-project/src/stores/storeCart.js'


const catalogStore = useCatalog()
const cart = useCart()

const newArrivals = ref([])

onMounted(async () => {
  try {
    const ResponseFromStore = await catalogStore.fetchNewArrivals()
    newArrivals.value = ResponseFromStore

  } catch (error) {
    console.error('Error fetching new arrivals:', error)
  }
})

const addToCart = (bookDetail) => {
  cart.addToCart(bookDetail)
}
</script>

<style scoped>
.container.new-arrivals-panel {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.new-arrivals-panel h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.new-arrivals-panel p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 30px;
}

.new-arrival {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.new-arrival .col-md-6 {
  flex: 0 0 calc(50% - 10px);
  margin-bottom: 20px;
}

.position-static {
  padding: 20px;
  background-color: #fff;
}

.book-category {
  color: #007bff;
  font-weight: bold;
}

.book-title {
  font-size: 1.5em;
  margin: 10px 0;
}

.book-author {
  color: #666;
}

.book-description {
  color: #333;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.2em;
  font-weight: bold;
}

.add-to-cart {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.book-thumbnail img {
  max-width: 100%;
  height: auto;
}
</style>