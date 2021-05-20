<template>
  <div>
      
    <div v-if="product" class="container my-5 py-5">
        <section class="text-center">
 
            <h3 class="mb-5">Product Details</h3>
 
            <div class="row">
 
                <div class="col-lg-6">
                   <img :src="product.image" alt="" class="img-fluid">
                </div>
 
                <div class="col-lg-6 text-center text-lg-start">
                    <h2>{{ product.name }}</h2>
                    <h2> {{ product.desc }}</h2>
                <div class="d-flex justify-content-between align-items-center">
                     <h2 class="text-danger pt-4">{{ product.price }} <span class="text-dark">SEK</span></h2>
                     <button class="btn btn-dark" @click="addProductToCart({ product, quantity })"> Add to cart</button>    
                </div>
                    
                </div>
 
            </div>
        </section>
    </div>
    <div v-else>
        Loading
    </div>
  </div>
 
</template>
 
<script>
import { mapActions, mapGetters } from 'vuex'
 
export default {
    name:'ProductDetails',
    
    props: ['id'],
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
        ...mapActions(['getOneProduct', 'cleanup'])
    },
    computed: {
        ...mapGetters(['product'])
    },
    created() {
        this.getOneProduct(this.id)
    },
    destroyed() {
        this.cleanup()
    }
}
</script>
 
<style scoped>
 
</style>