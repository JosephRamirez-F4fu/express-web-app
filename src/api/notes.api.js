import axios from "axios"
export const getNoteId = async(id)=>{
    return await  axios.get(`http://3.219.121.80:8001/api/note/${id}`);
}
export const getNotesUserId = async(id)=>{
    return  await  axios.get(`http://3.219.121.80:8001/api/student/notes/${id}`);
} 
export const delNoteId = async(id)=>{
    return  await axios.delete(`http://3.219.121.80:8001/api/note/${id}`)
}
export const putNoteId = async(id,editNote)=>{
    return  await axios.put(`http://3.219.121.80:8001/api/note/${id}`,editNote);
}

export const postNote = async(newNote)=>{
    return await axios.post(`http://3.219.121.80:8001/api/note`,newNote);
}
