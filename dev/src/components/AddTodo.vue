<template>  
<form action="" v-on:submit.prevent="addTodo()">
      <input name="todo" type="text" value="enter todo name" v-model="newTodo" v-validate="'required|min:3'">
      <button>Add new Todo</button>
      <div v-show="errors.has('todo')">
        {{ errors.first('todo') }}
      </div>
    </form>
</template>

<script>
  export default {
    name: "Addtodo",
    data() {
      return {
        newtodo: {
          name: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$validator.validateAll().then(result => {
          if (!result) {
            return;
          }          
          this.$emit('add-todo', {
            id: uuid(),
            ...this.newtodo
          });
          this.newtodo.name = '';
          this.$validator.reset();
        });
      }
    }
  }
</script>
