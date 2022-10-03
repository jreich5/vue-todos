<template>
  <header>
    <h1 class="text-center display-1 text-white py-3">Vue Todos!</h1>
  </header>
  <div class="container">
    <div class="card p-2">
      <AddTodo @addTodoEmit="(todo) => $emit('addTodoEmit', todo)" />
      <div class="mt-5 mb-2 d-flex justify-content-center">
        <div class="dropdown me-2">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter
          </button>
          <ul class="dropdown-menu">
            <li
              @click="changeFilterType"
              data-filter="all"
              class="dropdown-item"
            >
              All
            </li>
            <li
              @click="changeFilterType"
              data-filter="completed"
              class="dropdown-item"
            >
              Completed
            </li>
            <li
              @click="changeFilterType"
              data-filter="pending"
              class="dropdown-item"
            >
              Pending
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort
          </button>
          <ul class="dropdown-menu">
            <li
              @click="changeSortType"
              data-sort="newest-to-oldest"
              class="dropdown-item"
            >
              Newest to Oldest
            </li>
            <li
              @click="changeSortType"
              data-sort="oldest-to-newest"
              class="dropdown-item"
            >
              Oldest to Newest
            </li>
            <li
              @click="changeSortType"
              data-sort="alphabetically"
              class="dropdown-item"
            >
              Alphabetically
            </li>
          </ul>
        </div>
      </div>
      <p>
        Viewing
        <span style="text-transform: lowercase"
          ><strong>{{ filterType }}</strong> todos sorted
          <strong>{{ sortType }}</strong
          >.</span
        >
      </p>
      <Todos
        @deleteTodoEmit="(todo: Todo) => $emit('deleteTodoEmit', todo)"
        @updateTodoEmit="(todo: Todo) => $emit('updateTodoEmit', todo)"
        :todos="sortAndFilter(todos)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from "@/interfaces";
import { ref } from "vue";
import AddTodo from "../components/AddTodo.vue";
import Todos from "../components/Todos.vue";

const { todos } = defineProps(["todos"]);

// const emit = defineEmits(["addTodoEmit", "deleteTodoEmit"]);
let filterType = ref("all");
let sortType = ref("oldest-to-newest");

function changeFilterType(e: any) {
  filterType.value = e.target.dataset.filter;
}

function changeSortType(e: any) {
  sortType.value = e.target.dataset.sort;
}

function applyFilter(todos: Todo[]) {
  let filteredTodos = [];
  if (filterType.value === "all") {
    filteredTodos = todos;
  } else if (filterType.value === "completed") {
    filteredTodos = todos.filter((todo: Todo) => todo.isDone);
  } else {
    filteredTodos = todos.filter((todo: Todo) => !todo.isDone);
  }
  return filteredTodos;
}

function applySort(todos: Todo[]) {
  if (sortType.value === "oldest-to-newest") {
    todos.sort((t1, t2) => t1.dateAdded - t2.dateAdded);
  } else if (sortType.value === "newest-to-oldest") {
    todos.sort((t1, t2) => t2.dateAdded - t1.dateAdded);
  } else {
    todos.sort((t1, t2) => t1.name.localeCompare(t2.name));
  }
  return todos;
}

function sortAndFilter(todos: Todo[]) {
  let displayedTodos = applyFilter(todos);
  return applySort(displayedTodos);
}
</script>

<style scoped></style>
