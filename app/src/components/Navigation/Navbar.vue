<template>
  <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <li class="nav-item">
            <router-link class="nav-link active" to="/products">Products</router-link>
          </li>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Products</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>