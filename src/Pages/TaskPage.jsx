import { useEffect, useState } from "react";
import { UseUser } from "../context/UserContext";

export default function TaskPage() {
  const [isNewTask, setIsNewTask] = useState(true);
  const {tasks, setTasks,getTasksUserIdConsumer,user} = UseUser();
  useEffect(()=>{
    getTasksUserIdConsumer(user._id)
    console.log(tasks)
  },[])
  // Nueva subtarea
  const [subtask, setSubTask] = useState({
    name: "nueva subtarea",
    isDone: false,
  });

  // Mi tarea nueva
  const [task, setTask] = useState({
    name: "nueva tarea",
    isDone: false,
    subtasks: [],
  });

  // TAREA PRINCIPAL
  const updateTask = (index, newTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTask;
    setTasks(updatedTasks);
  };

  const handleTaskTitle = (e) => {
    setTask({ ...task, name: e.target.value });
  };

  const blurTaskTitle = (e) => {
    if (e.target.value === "") {
      e.target.value = "nueva tarea";
      setTask({ ...task, name: "nueva tarea" });
    }
  };

  const focusTaskTitle = (e) => {
    if (e.target.value === "nueva tarea") {
      e.target.value = "";
    }
  };

  const handleIsDone = (e) => {
    setTask({ ...task, isDone: e.target.checked });
  };

  // NUEVA SUBTAREA
  const handleNewSubTaskTitle = (e) => {
    setSubTask({ ...subtask, name: e.target.value });
  };

  const blurNewSubTaskTaskTitle = (e) => {
    if (e.target.value === "") {
      e.target.value = "nueva subtarea";
      setSubTask({ ...subtask, name: "nueva subtarea" });
    }
    if (e.target.value !== "" && e.target.value !== "nueva subtarea") {
      setTask({ ...task, subtasks: [...task.subtasks, subtask] });
      setSubTask({
        name: "nueva subtarea",
        isDone: false,
      });
    }
  };

  const focusNewSubTaskTaskTitle = (e) => {
    if (e.target.value === "nueva subtarea") {
      e.target.value = "";
    }
  };

  const updateSubTaskTitle = (index, value) => {
    const updatedSubTasks = [...task.subtasks];
    updatedSubTasks[index] = { ...updatedSubTasks[index], name: value };
    setTask({ ...task, subtasks: updatedSubTasks });
  };

  const updateSubTaskIsDone = (index, value) => {
    const updatedSubTasks = [...task.subtasks];
    updatedSubTasks[index] = { ...updatedSubTasks[index], isDone: value };
    setTask({ ...task, subtasks: updatedSubTasks });
  };

  const handleDeleteTask = () => {
    if (isNewTask) return;
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
    setIsNewTask(true);
    setTask({
      name: "nueva tarea",
      isDone: false,
      subtasks: [],
    });
  };

  const handleDeleteSubTask = (index) => {
    const updatedSubTasks = [...task.subtasks];
    updatedSubTasks.splice(index, 1);
    setTask({ ...task, subtasks: updatedSubTasks });
  };

  const handleSaveTask = () => {
    if (isNewTask) {
      // Agregar nueva tarea
      const newTask = {
        id: tasks.length + 1,
        name: task.name,
        isDone: task.isDone,
        subtasks: task.subtasks,
      };
      setTasks([...tasks, newTask]);
      setIsNewTask(false);
    } else {
      // Editar tarea existente
      const index = tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        updateTask(index, task);
      }
    }
  };

  return (
    <div className="grid  justify-center">
      <main className="w-[80rem] min-h-[88vh] grid grid-cols-5 grid-rows-2 gap-3 p-4">
        <div className="col-span-1 row-span-2 bg-yellow-500 rounded-xl p-4">
          <div
            className="bg-yellow-300 px-3 rounded-md cursor-pointer hover:bg-yellow-200 mb-2"
            onClick={() => {
              setIsNewTask(true);
              setTask({
                name: "nueva tarea",
                isDone: false,
                subtasks: [],
              });
            }}
          >
            nueva tarea
          </div>
          <ul>
            {tasks.map((item) => (
              <li key={item.id}>
                <div
                  className="bg-yellow-400 px-3 rounded-md cursor-pointer hover:bg-yellow-200 mb-2"
                  onClick={() => {
                    setTask(item);
                    setIsNewTask(false);
                  }}
                >
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-4 row-span-2 bg-green-400  rounded-xl p-4">
          <div>
            <div className="text-slate-600">
              <input
                onChange={handleIsDone}
                type="checkbox"
                className="appearance-none h-6 w-6 mx-2 rounded-full cursor-pointer  border-2 border-white hover:border-none
                 hover:bg-white hover:ring-2 hover:ring-white hover:ring-opacity-50
                  transition-transform duration-100 checked:bg-blue-600  checked:ring-2 checked:ring-black checked:ring-opacity-100 checked:text-white checked:border-none"
              ></input>
              <input
                className="bg-green-200 border-none outline-none  h-10 w-3/6 rounded-md px-4 my-2"
                type="text"
                value={task.name}
                onBlur={blurTaskTitle}
                onChange={handleTaskTitle}
                onFocus={focusTaskTitle}
              ></input>
              {!isNewTask && (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                  onClick={handleDeleteTask}
                >
                  Eliminar Tarea
                </button>
              )}
            </div>
          </div>
          <ul>
            {task.subtasks.map((subtask, index) => (
              <li key={index}>
                <div className="flex">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="appearance-none h-6 w-6 mx-2 rounded-full cursor-pointer  border-2 border-white hover:border-none
                 hover:bg-white hover:ring-2 hover:ring-white hover:ring-opacity-50
                  transition-transform duration-100 checked:bg-blue-600  checked:ring-2 checked:ring-black checked:ring-opacity-100 checked:text-white checked:border-none"
                      checked={subtask.isDone}
                      onChange={(e) =>
                        updateSubTaskIsDone(index, e.target.checked)
                      }
                    ></input>
                  </div>
                  <div className="w-full">
                    <input
                      className="bg-green-200 border-none outline-none  h-10 w-3/6 rounded-md px-4 my-2 mr-2"
                      type="text"
                      value={subtask.name}
                      onBlur={(e) => blurNewSubTaskTaskTitle(e, index)}
                      onChange={(e) =>
                        updateSubTaskTitle(index, e.target.value)
                      }
                      onFocus={(e) => focusNewSubTaskTaskTitle(e, index)}
                    ></input>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDeleteSubTask(index)}
                    >
                      Eliminar Subtarea
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="appearance-none h-6 w-6 mx-2 rounded-full cursor-pointer  border-2 border-white hover:border-none
                 hover:bg-white hover:ring-2 hover:ring-white hover:ring-opacity-50
                  transition-transform duration-100 checked:bg-blue-600  checked:ring-2 checked:ring-black checked:ring-opacity-100 checked:text-white checked:border-none"
                checked={subtask.isDone}
                onChange={(e) => setSubTask({ ...subtask, isDone: e.target.checked })}
              ></input>
              <input
                className="bg-green-200 border-none outline-none  h-10 w-3/6 rounded-md px-4 my-2"
                type="text"
                value={subtask.name}
                onBlur={blurNewSubTaskTaskTitle}
                onChange={handleNewSubTaskTitle}
                onFocus={focusNewSubTaskTaskTitle}
              ></input>
              
            </div>
          </div>
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSaveTask}
            >
              Guardar Tarea
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
