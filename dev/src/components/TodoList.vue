<template>
  <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.id}} - {{todo.todo}} 
        <button v-on:click="deleteTodo(todo.id)">X</button>
      </li>
    </ul>
</template>

<script>
  export default {
    name: 'TodoList',
    props: {
      todos: {
        type: Array,
        required: false
      }
    }
  }
</script>