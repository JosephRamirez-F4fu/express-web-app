import { createContext, useContext, useState } from "react";

import {
  loginUser,
  delUserId,
  getUserId,
  postUser,
  putUserId,
} from "../api/users.api";
import {
  delNoteId,
  getNoteId,
  getNotesUserId,
  postNote,
  putNoteId,
} from "../api/notes.api";
import {
  delTaskId,
  getTaskId,
  getTasksUserId,
  postTask,
  putTaskId,
} from "../api/tasks.api";

export const UserContext = createContext();

export const UseUser = () => {
  const context = useContext(UserContext);
  if (context == undefined) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  });
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isLogin, setisLogin] = useState(false);

  const login = () => {
    setisLogin(true);
  };

  const logout = () => {
    setisLogin(false);
  };

  const createUserConsumer = async (newUser) => {
    try {
      //console.log(newUser)
      const response = await postUser(newUser);
      console.log(response.data)
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const loginUserConsumer = async (dataUserForLogin) => {
    try {
      const response = await loginUser(dataUserForLogin);
      if(response.status==200 && response.data[0]){
        setUser(response.data[0]);
        setisLogin(true);
        console.log(user)
        return true
      }else{
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const delUserIdConsumer = async (id) => {
    try {
      const response = await delUserId(id);
      setUser({});
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserIdConsumer = async (id) => {
    try {
      const response = await getUserId(id);
      setUser(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const putUserIdConsumer = async (id, putUser) => {
    try {
      await putUserId(id, putUser);
      const response = await getUserId(id);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTaskIdConsumer = async (id) => {
    try {
      const response = await getTaskId(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const delTaskIdConsumer = async (id) => {
    try {
      await delTaskId(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const putTaskIdConsumer = async (id, updateData) => {
    try {
      await putTaskId(id, updateData);
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return { ...task, ...updateData };
          }
          return task;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const postTaskConsumer = async (newTask) => {
    try {
      const response = await postTask(newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const getTasksUserIdConsumer = async (id) => {
    try {
      const response = await getTasksUserId(id);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNoteIdConsumer = async (id) => {
    try {
      const response = await getNoteId(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const delNoteIdConsumer = async (id) => {
    try {
      await delNoteId(id);
      setTasks(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const getNotesUserIdConsumer = async (id) => {
    try {
      const response = await getNotesUserId(id);
      setNotes(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const putNoteIdConsumer = async (id, editNote) => {
    try {
      await putNoteId(id, editNote);
      setNotes(
        notes.map((note) => {
          if (note.id === id) {
            return { ...note, ...editNote };
          }
          return note;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  const postNoteConsumer = async (newNote) => {
    try {
      const response = await postNote(newNote);
      setNotes([...notes, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        notes,
        tasks,
        isLogin,
        setTasks,setNotes,
        createUserConsumer,
        loginUserConsumer,
        delUserIdConsumer,
        getUserIdConsumer,
        putUserIdConsumer,
        getTaskIdConsumer,
        delTaskIdConsumer,
        putTaskIdConsumer,
        postTaskConsumer,
        getTasksUserIdConsumer,
        getNoteIdConsumer,
        delNoteIdConsumer,
        getNotesUserIdConsumer,
        putNoteIdConsumer,
        postNoteConsumer,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
