<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{sale: theme === 'sale'}">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
      <div class="add">
        <slot name="newModal"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['header','text', 'theme'],
    methods:{
      closeModal(){
        this.$emit('close');
      }
    }
  }
</script>

<style scoped>
  .modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }
  .backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1{
    color:#03cfb4;
    border: none;
    padding: 0; 
  }
  .modal .sale{
    background: crimson;
    color:white;
  }
  .modal .sale h1{
    color: white;
  }
  .modal .actions{
    text-align: center;
    margin: 30px 0px 10px 0px;
    color: #333;
  }
  .modal .actions a{
    padding: 8px;
    border: 1px solid #aaa;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px; 
  }  
</style>