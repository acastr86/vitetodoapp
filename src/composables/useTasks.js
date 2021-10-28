import {ref, computed} from "vue";

const tasks = ref([]);

const useTasks = () => {
    const pending = computed(() => {
        return tasks.value.filter((task) => !task.done);
      });
      
      const completed = computed(() => {
        return tasks.value.filter((task) => task.done);
      });
      
      const addTask = (newTask) => {
        if(newTask.trim()){
          tasks.value.push({
            id: parseInt(Math.floor(Math.random() * 100000)),
           name: newTask,
           done: false,
          });
        }
      };
      
      const changeStatus = (id) => {
        const task = tasks.value.find((task) => task.id === id);
        task.done = !task.done;
      };

      return {tasks, pending, completed, addTask, changeStatus};

};

export default useTasks;


