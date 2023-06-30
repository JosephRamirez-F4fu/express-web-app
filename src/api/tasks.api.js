import axios from "axios"
export const getTaskId = async(id)=>{
    return   await  axios.get(`http://3.219.121.80:8001/api/task/${id}`);
}
export const getTasksUserId = async(id)=>{
    return await  axios.get(`http://3.219.121.80:8001/api/tasks/student/${id}`);
} 
export const delTaskId = async(id)=>{
    return  await axios.delete(`http://3.219.121.80:8001/api/task/${id}`)
}
export const putTaskId = async(id,putTask)=>{
    return  await axios.put(`http://3.219.121.80:8001/api/task/${id}`,putTask);
}

export const postTask = async(newTask)=>{
    return await axios.post(`http://3.219.121.80:8001/api/task`,newTask);
}
