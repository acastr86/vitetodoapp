<script setup>
    import useTasks from "../composables/useTasks";

    const {pending, completed, changeStatus} = useTasks();

    defineProps({
        isCompleted: {
            default: false,
            type: Boolean,
        }
    });
</script>

<template>
    <div class="w-1/3">
      <h3 class="text-2xl text-center "
          :class = "isCompleted ? 'text-blue-400' : 'text-yellow-400' ">
          {{isCompleted ? "Completed" : "Pending"}} Tasks</h3>
      <ul class="pt-8 space-y-4">
        <li v-for="task in (isCompleted ? completed : pending)"
        :key="task.id"
        @click="changeStatus(task.id)"
        :class="isCompleted ? 'text-blue-800 hover:bg-blue-400' 
        : 'text-yellow-800 hover:bg-yellow-400'"
        class="w-full px-4 py-2 font-bold text-center transition-colors duration-500 bg-gray-300 rounded-lg hover:cursor-pointer hover:text-gray-200">{{task.name}}</li>
      </ul>
      </div>
</template>