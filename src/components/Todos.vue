<template>
  <section>
    <ul class="list-group">
      <li
        class="list-group-item bg-light d-flex align-items-center"
        v-for="todo in todos"
        :key="todo.id"
      >
        <Todo
          @deleteTodoEmit="(todo) => $emit('deleteTodoEmit', todo)"
          @updateTodoEmit="(todo) => $emit('updateTodoEmit', todo)"
          :todo="todo"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import Todo from "./Todo.vue";
const { todos } = defineProps(["todos"]);
const emit = defineEmits(["addTodoEmit", "deleteTodoEmit"]);
</script>

<style scoped></style>
