import axios from "axios"
export const getUserId = async(id)=>{
    await  axios.get(`http://3.219.121.80:8000/api/user/${id}`);
} 
export const delUserId = async(id)=>{
    await axios.delete(`http://3.219.121.80:8000/api/user/${id}`)
}
export const putUserId = async(id,putUser)=>{
    await axios.put(`http://3.219.121.80:8000/api/user/${id}`,putUser);
}

export const postUser = async(newUser)=>{
    await axios.post(`http://3.219.121.80:8000/api/user`,newUser);
}
export const loginUser = async(dataUser)=>{
    await axios.post(`http://3.219.121.80:8000/api/user/login`,dataUser)
}