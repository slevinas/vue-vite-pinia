import { defineStore } from 'pinia'

export const useCatalog = defineStore('catalog-store', {
  state: () => {
    return {
      newArrivals: [],
      fetching: false
    }
  },

  getters: {
    results(state) {
      return state.newArrivals
    },

    isFetching(state) {
      return state.fetching
    }
  },

  actions: {
    async fetchNewArrivals() {
      this.fetching = true
      const response = await fetch('/data/new-arrivals.json')
      let data = []
      try {
        const result = await response.json()
        data = Array.from(result.books)
        this.newArrivals = data
        return data
        console.log('from storeCatalog.js fetchNewArrivals', this.newArrivals)
      } catch (err) {
        this.newArrivals = []
        console.error('Error loading new arrivals:', err)
        return err
      }

      this.fetching = false
    }
  }
})