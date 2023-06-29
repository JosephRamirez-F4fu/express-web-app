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
    firstname: "Gonzalo",
    lastname: "Nuñez",
    password: "654321",
    email: "Gonza@gmail.com",
  });
  const [notes, setNotes] = useState([
    {
      id: "1",
      id_student: "id id_student",
      note: 
        {
          title: "mi nota",
          text: "hay dios mio porfavor .... \n no se  asdasdas zxc asd xc zxqaeqwzcasdzxq das dasdczxc asds",
        }
    }, {
      id: "2",
      id_student: "id id_student",
      note: 
        {
          title: "mi nota",
          text: "hay dios mio porfavor .... \n no se ",
        }
    }, {
      id: "3",
      id_student: "id id_student",
      note: 
        {
          title: "mi nota",
          text: "hay dios mio porfavor .... \n no se ",
        }
    }, {
      id: "4",
      id_student: "id id_student",
      note: 
        {
          title: "mi nota",
          text: "hay dios mio porfavor .... \n no se ",
        }
    }
  ]);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "asdasd asd",
      isDone: false,
      subtasks: [{ name: "asdaaaasd", isDone: true }],
    },
    {
      id: 2,
      name: "asdasd asdasd",
      isDone: false,
      subtasks: [{ name: "asdasaaaad", isDone: true }],
    },
  ]);
  const [isLogin, setisLogin] = useState(true);

  const login = () => {
    setisLogin(true);
  };

  const logout = () => {
    setisLogin(false);
  };

  const createUserConsumer = async (newUser) => {
    try {
      const response = await postUser(newUser);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const loginUserConsumer = async (dataUserForLogin) => {
    try {
      const response = await loginUser(dataUserForLogin);
      setUser(response.data);
      setisLogin(true);
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
    } catch (error) {
      console.log(error);
    }
  };
  const putNoteIdConsumer = async (id, updateNote) => {
    try {
      await putNoteId(id, updateNote);
      setNotes(
        notes.map((note) => {
          if (note.id === id) {
            return { ...note, ...updateData };
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
