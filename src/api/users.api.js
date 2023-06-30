import axios from "axios"
export const getUserId = async(id)=>{
    return await  axios.get(`http://3.219.121.80:8000/api/user/${id}`);
} 
export const delUserId = async(id)=>{
   return await axios.delete(`http://3.219.121.80:8000/api/user/${id}`)
}
export const putUserId = async(id,putUser)=>{
    return  await axios.put(`http://3.219.121.80:8000/api/user/${id}`,putUser);
}

export const postUser = async(newUser)=>{
    return  await axios.post(`http://3.219.121.80:8000/api/user`,newUser);
}
export const loginUser = async(dataUser)=>{
    return await axios.post(`http://3.219.121.80:8000/api/user/login`,dataUser)
}