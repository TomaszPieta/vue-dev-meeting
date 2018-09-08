<template>
<form v-on:submit.prevent="addTodo()">
      <input name="todo" type="text" placeholder="enter todo name" v-model="newTodo.todo" v-validate="'required|min:3'">
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
      newTodo: {
        todo: ""
      }
    };
  },
  methods: {
    // addTodo() {
    //   this.$validator.validateAll().then(result => {
    //     if (!result) {
    //       return;
    //     }
    //     this.$emit('add-todo', {
    //       id: uuid(),
    //       ...this.newtodo
    //     });
    //     this.newtodo.name = '';
    //     this.$validator.reset();
    //   });
    // }
    addTodo() {
      this.$emit('add-todo', { ...this.newTodo});
      this.newTodo.todo = "";
    },
    deleteTodo(id, todo) {
      this.todos.splice(id, 1);
    },
    deleteLast() {
      this.todos.pop();
    }
  }
};
</script>
