import { defineStore } from 'pinia'
import newArrivalsData from '../data/new-arrivals.json'

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

      let data = []
      try {


        this.newArrivals = newArrivalsData.books
        // console.log('from storeCatalog.js fetchNewArrivals', this.newArrivals)
        return this.newArrivals

      } catch (err) {
        this.newArrivals = []
        console.error(`from storeCatalog new arrivals error `, err)
        return err
      }

      this.fetching = false
    }
  }
})