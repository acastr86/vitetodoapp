<script setup>
import {ref} from "vue";
import useTasks from "../composables/useTasks"; 

const {addTask} = useTasks();
const newTask = ref("");

const add = () => {
  if (newTask.value) {
    addTask(newTask.value);
    newTask.value = "";
  }
};
</script>

<template>
<h1 class="pb-4 text-6xl font-thin tracking-tight text-center text-gray-200">My Tasks

    </h1>
    <input @change="add" v-model="newTask" type="text" class="px-4 py-2 text-xl text-center rounded-lg" placeholder="New Task"/>
</template>
