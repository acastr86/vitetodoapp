<script setup>
import {ref, computed} from "vue";

const newTask = ref("");

const tasks = ref([]);

const pending = computed(() => {
  return tasks.value.filter((task) => !task.done);
});

const completed = computed(() => {
  return tasks.value.filter((task) => task.done);
});

const addTask = () => {
  if(newTask.value.trim()){
    tasks.value.push({
      id: parseInt(Math.floor(Math.random() * 100000)),
     name: newTask.value,
     done: false,
    });
    newTask.value="";
  }
};

const changeStatus = (id) => {
  const task = tasks.value.find((task) => task.id === id);
  task.done = !task.done;
};
</script>

<template>
<div class="min-h-screen bg-gray-600">
  <div class="container flex flex-col pt-8 mx-auto space-y-8">
    <h1 class="pb-4 text-6xl font-thin tracking-tight text-center text-gray-200">My Tasks

    </h1>
    <input @change="addTask" v-model="newTask" type="text" class="px-4 py-2 text-xl text-center rounded-lg" placeholder="New Task"/>
    <div class="flex justify-around">

      <div class="w-1/3">
      <h3 class="text-2xl text-center text-yellow-400">Pending Tasks</h3>
      <ul class="pt-8 space-y-4">
        <li v-for="task in pending"
        :key="task.id"
        @click="changeStatus(task.id)"
        class="w-full px-4 py-2 font-bold text-center text-yellow-800 transition-colors duration-500 bg-gray-300 rounded-lg hover:cursor-pointer hover:bg-yellow-400 hover:text-gray-200">{{task.name}}</li>
      </ul>
      </div>
      <div class="w-1/3">
      <h3 class="text-2xl text-center text-blue-400">Completed Tasks</h3>
      <ul class="pt-8 space-y-4">
        <li  v-for="task in completed"
        :key="task.id"
        @click="changeStatus(task.id)"
        class="w-full px-4 py-2 font-bold text-center text-blue-800 transition-colors duration-500 bg-gray-300 rounded-lg hover:cursor-pointer hover:bg-blue-400 hover:text-gray-200">{{task.name}}</li>
      </ul>
      </div>

    </div>
  </div>
</div>
  
  
</template>

