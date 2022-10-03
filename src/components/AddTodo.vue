<template>
  <div class="form-floating">
    <input
      id="add-todo"
      class="form-control"
      type="text"
      placeholder="Enter todo"
      v-model="newName"
      @keyup="changeTodo"
    />
    <label for="add-todo" class="form-label">Add Todo</label>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from "@/interfaces";
import { ref } from "vue";
const newName = ref("");
const emit = defineEmits(["addTodoEmit"]);

function changeTodo(e: { key: any }) {
  const todo: Todo = {
    name: newName.value,
    isDone: false,
    dateAdded: Date.now(),
  };
  if (e.key === "Enter") {
    emit("addTodoEmit", todo);
    newName.value = "";
  }
}
</script>

<style scoped></style>
