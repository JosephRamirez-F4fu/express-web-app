import axios from "axios"
export const getTaskId = async(id)=>{
    await  axios.get(`http://3.219.121.80:8001/api/task/${id}`);
}
export const getTasksUserId = async(id)=>{
    await  axios.get(`http://3.219.121.80:8001/api/tasks/student/${id}`);
} 
export const delTaskId = async(id)=>{
    await axios.delete(`http://3.219.121.80:8001/api/task/${id}`)
}
export const putTaskId = async(id,putTask)=>{
    await axios.put(`http://3.219.121.80:8001/api/task/${id}`,putTask);
}

export const postTask = async(newTask)=>{
    await axios.post(`http://3.219.121.80:8001/api/task`,newTask);
}
