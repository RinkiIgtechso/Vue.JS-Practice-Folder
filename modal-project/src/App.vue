<template>
  <h1>{{ title }}</h1>
  <teleport to=".modals" v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal" >
      <template v-slot:links>
        <a href="#">Sign Up</a>
        <a href="#">More Info</a>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </teleport> 
  <teleport to=".modals" v-if="showNewModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModalTwo" >
      <h1>Sign up to the newsletter</h1>
      <p>For updates and promo codes</p>
    </Modal>
  </teleport>
  <br/>
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModalTwo">New Modal Open</button>
  <!-- <input type='text' ref="name" /> -->
  <!-- <button @click="handleClick">Onclick</button> -->
</template> 

<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return {
      title: "My fav is vue app :)",
      header:"Sign up for the give away.",
      text: "Grab your ninja or half price!",
      showModal: false,
      showNewModal: false
    }
  },
  methods:{
    // handleClick(){
    //   console.log(this.$refs.name);
    //   this.$refs.name.classList.add("active");
    //   this.$refs.name.focus();
    // }
    toggleModal(){
      this.showModal = !this.showModal;
    },
    toggleModalTwo(){
      this.showNewModal = !this.showNewModal
    }
  }
}
</script>

<style>
  #app, .modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:#2c3e50;
    margin-top: 60px;
  }
</style>
