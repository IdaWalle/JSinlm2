<template>
  <div class="col mt-4">
      <div class="card p-4 mb-4">
          <img :src="product.image" alt="..." class="card-img-top ">
          <div class="card-body">
              <h4 class="card-title">{{ product.name }}</h4>
              <p class="card-text">{{ product.short }}</p>
              
 
              <router-link :to="{ name:'ProductDetails', params: { id: product._id }}" type="button" class="btn btn-dark">Visa produkt</router-link>
          </div>
      </div>
  </div>
</template>
 
<script>
export default {
    name: 'ProductCard',
    props: ['product']
}
</script>
 
<style>
 
</style>