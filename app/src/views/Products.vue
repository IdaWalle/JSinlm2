<template>
<div>

  <ProductCardDeck/>
</div>
  
</template>
 
<script>
 
import ProductCardDeck from '../components/Products/ProductCardDeck.vue'
import { mapActions } from 'vuex'
 
export default {
    components: {
        ProductCardDeck
    },
    methods: {
      ...mapActions(['getProducts'])
    },
    created() {
      this.getProducts()
    }
}
</script>
 
<style>
 
</style>