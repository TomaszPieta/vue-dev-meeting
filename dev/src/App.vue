<template>
  <div id="app">
    <h3>My awasome todo list:</h3>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.id}} - {{todo.todo}} 
        <button v-on:click="deleteTodo(todo.id)">X</button>
      </li>
    </ul>
    <p v-if="!todos.length">No products!</p>

    <form action="" v-on:submit.prevent="addTodo()">
      <input type="text" value="enter todo name" v-model="newTodo" v-validate="'required:true'">
      <button>Add new Todo</button>
    </form>
    <br>
    <button v-on:click="deleteLast">Delete last Todo</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      todos: [{
          id: 0, todo: 'buy milk'
        },{
          id: 1, todo: 'buy bread'
        },{
          id: 2, todo: 'go for a walk'
        },{
          id: 3, todo: 'take umbrella'
        },{
          id: 4, todo: 'go to sleep'
        }]
    }
  },
  methods: {
        deleteLast() {
          this.todos.pop();
        },
        deleteTodo(id, todo) {
          this.todos.splice(id,1)
        },
        addTodo() {
          this.todos.push({ todo: this.newTodo, id: 5 });
          this.newTodo = '';
        }
      }
}
</script>

<style>
body {
      background-color: green;
      text-align: center;
      font-size: 1.2rem;
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      background-color: yellow;
      color: #2c3e50;
      margin: 60px auto;
      padding: 30px;
      width: 400px;
    }
    ul, li {
      list-style-type: none;
    }
    button {
      background-color: red;
      color: white;
      border: none;
      padding: 10px;
    }
    button:hover {
      background-color: white;
      color: red;
    }
</style>
