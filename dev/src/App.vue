<template>
  <div id="app">
    <h3>My awasome todo list:</h3>
    <TodoList :todos="todos"></TodoList>
    <p v-if="!todos.length">No products!</p>
    <AddTodo></AddTodo>
    <button v-on:click="deleteLast">{{buttonLabel}}</button>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import Form from './components/AddTodo'

export default {
  name: 'app',
  components: {
    TodoList, AddTodo
  },
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
