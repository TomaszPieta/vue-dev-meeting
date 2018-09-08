<template>  
<form action="" v-on:submit.prevent="addTodo()">
      <input type="text" value="enter todo name" v-model="newTodo" v-validate="'required:true'">
      <button>Add new Todo</button>
    </form>
</template>

<script>
  export default {
    name: 'Form',
    props: {}
  }
</script>
