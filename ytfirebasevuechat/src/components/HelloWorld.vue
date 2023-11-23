<template>
  <div>
    <PrivateRoute />
  </div>
</template>

<script>
import PrivateRoute from '@/views/PrivateRoute.vue';

export default {
  name: 'HelloWorld',
  components:{
    PrivateRoute
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
