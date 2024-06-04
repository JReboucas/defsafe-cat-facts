import { defineStore } from 'pinia'
import axios from 'axios'

export const useCatFactStore = defineStore('catFact', {
  state: () => ({
    fact: '',
    factsCache: [],
  }),
  actions: {
    async fetchCatFact() {
      if (this.factsCache.length > 0) {
        this.fact = this.factsCache.pop()
      } else {
        const response = await axios.get('https://meowfacts.herokuapp.com/')
        this.factsCache = response.data.data
        this.fact = this.factsCache.pop()
      }
    }
  }
})
