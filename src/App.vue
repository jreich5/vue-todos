<template>
  <div class="wrapper bg-primary">
    <TodosView
      @deleteTodoEmit="deleteTodo"
      @updateTodoEmit="updateTodo"
      @addTodoEmit="addTodo"
      :todos="todos"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import TodosView from "./views/TodosView.vue";
import { findAll, deleteById, create, update } from "./TodosAPI";
import type { Todo } from "./interfaces";

let todos: Ref<Array<Todo>> = ref([]);

function loadTodos() {
  findAll().then((apiTodos) => {
    todos.value = apiTodos;
  });
}

function deleteTodo(todoToDelete: Todo) {
  if (todoToDelete.id) {
    deleteById(todoToDelete.id);
    todos.value = todos.value.filter((todo) => todo.id !== todoToDelete.id);
  }
}

function updateTodo(todoToUpdate: Todo) {
  update(todoToUpdate);
}

async function addTodo(todoToAdd: Todo) {
  const addedTodo = await create(todoToAdd);
  todos.value.push(addedTodo);
}

onMounted(loadTodos);
</script>

<style scoped>
.wrapper {
  min-height: 100vh;
}
</style>
