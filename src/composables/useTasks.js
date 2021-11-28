import {ref, computed} from "vue";
import axios from "axios";

const tasks = ref([]);

const api = axios.create({
  baseURL: import.meta.env.VITE_TODO_API_BASE_URL,
  params: {
    username : import.meta.env.VITE_TODO_API_USER,
    password : import.meta.env.VITE_TODO_API_PASS,
  }
});

const useTasks = () => {

    const getAll = async () =>{
        const {data} = await api.get();
        tasks.value = data;
    };

    const pending = computed(() => {
        return tasks.value.filter((task) => !task.completed);
      });
      
      const completed = computed(() => {
        return tasks.value.filter((task) => task.completed);
      });
      
      const addTask =  async (newTask) => {
        if(newTask.trim()){
          await api.post('',
          {
             text: newTask.trim(),
             completed : false
          });

          await getAll();
        }
      };
      
      const changeStatus = async (id) => {
        const task = tasks.value.find((task) => task.id === id);
        task.completed = !task.completed;

        const {id: _id, ...taskUpdate} = task;

        await api.put(`/${id}`, taskUpdate);
        
        await getAll();
      };


      getAll();

      return {tasks, pending, completed, addTask, changeStatus};

};

export default useTasks;


