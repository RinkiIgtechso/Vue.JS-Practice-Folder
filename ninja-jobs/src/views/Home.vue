<template>
  <div class="home">
    <child-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></child-header>
  </div>
</template>

<script>
import ChildPareEventsVue from './ChildPareEvents.vue';


export default {
  name: 'HomeView',
  components: { 'child-header': ChildPareEventsVue },
  data(){
    return{
      title:"Homepage"
    }
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle
    }
  }
}
</script>
