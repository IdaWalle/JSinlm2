<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navigation/Navbar'


export default {
  name: 'Navbar',
  components: {
    Navbar
  }
}
</script>
