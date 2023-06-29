import { useState, useEffect } from "react";

export default function TaskPage() {
  const [isNewTask, setIsNewTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "mi tarea",
      isDone: false,
      subtasks: [{ title: "subtarea 1", isDone: false }],
    },
  ]);

  // nueva subtarea
  const [subtask, setSubTask] = useState({
    title: "nueva subtarea",
    isDone: false,
  });
  // mi tarea nueva
  const [task, setTask] = useState({
    title: "nueva tarea",
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
    setTask({ ...task, title: e.target.value });
  };

  const blurTaskTitle = (e) => {
    if (e.target.value === "") {
      e.target.value = "nueva tarea";
      setTask({ ...task, title: "nueva tarea" });
    }
  };

  const focusTaskTitle = (e) => {
    if (e.target.value === "nueva tarea") e.target.value = "";
  };

  const handleIsDone = (e) => {
    setTask({ ...task, isDone: e.target.checked });
  };

  // NUEVA SUBTAREA
  const handleNewSubTaskTitle = (e) => {
    setSubTask({ ...subtask, title: e.target.value });
  };

  const blurNewSubTaskTaskTitle = (e) => {
    if (e.target.value === "") {
      e.target.value = "nueva subtarea";
      setSubTask({ ...subtask, title: "nueva subtarea" });
    }
    if (e.target.value !== "" && e.target.value !== "nueva subtarea") {
      setTask({ ...task, subtasks: [...task.subtasks, subtask] });
      setSubTask({
        title: "nueva subtarea",
        isDone: false,
      });
    }
  };

  const focusNewSubTaskTaskTitle = (e) => {
    if (e.target.value === "nueva subtarea") e.target.value = "";
  };

  const handleNewSubTaskIsDone = (e) => {
    setSubTask({ ...subtask, isDone: e.target.checked });
  };

  const UpdateSubTaskTitle = (index, value) => {
    const updateSubTasks = [...task.subtasks];
    updateSubTasks[index] = { ...updateSubTasks[index], title: value };
    setTask({ ...task, subtasks: updateSubTasks });
  };

  const UpdateSubTaskIsDone = (index, value) => {
    const updateSubTasks = [...task.subtasks];
    updateSubTasks[index] = {
      ...updateSubTasks[index],
      isDone: value,
    };
    setTask({ ...task, subtasks: updateSubTasks });
  };

  const handleSaveTask = () => {
    if (isNewTask) {
      // Agregar una nueva tarea
      const newTask = { ...task, id: tasks.length + 1 };
      setTasks([...tasks, newTask]);
      setTask({
        title: "nueva tarea",
        isDone: false,
        subtasks: [],
      })
    } else {
      // Editar una tarea existente
      const updatedTasks = [...tasks];
      const taskIndex = updatedTasks.findIndex((t) => t.id === task.id);
      if (taskIndex !== -1) {
        updatedTasks[taskIndex] = task;
        setTasks(updatedTasks);
      }
    }
  };

  return (
    <div className="grid  justify-center ">
      <main className="w-[80rem] min-h-[88vh] grid grid-cols-5 grid-rows-2 gap-3 p-4 ">
        <div className="col-span-1 row-span-2 bg-yellow-500 rounded-xl p-4 ">
          <div
            className="bg-yellow-300 px-3 rounded-md cursor-pointer hover:bg-yellow-200 mb-2"
            onClick={() => {
              setIsNewTask(true);
              setTask({
                title: "nueva tarea",
                isDone: false,
                subtasks: [],
              });
            }}
          >
            nueva tarea
          </div>
          <ul>
            {tasks.map((item) => {
              return (
                <li key={item.id}>
                  <div
                    className="bg-yellow-400 px-3 rounded-md cursor-pointer hover:bg-yellow-200 mb-2"
                    onClick={() => {
                      setTask(item);
                      setIsNewTask(false);
                    }}
                  >
                    {item.title}
                  </div>
                </li>
              );
            })}
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
                value={task.title}
                onBlur={blurTaskTitle}
                onChange={handleTaskTitle}
                onFocus={focusTaskTitle}
              ></input>
            </div>
          </div>
          <ul>
            {task.subtasks.map((subtask, index) => {
              return (
                <li key={index}>
                  <input
                    onChange={(e) =>
                      UpdateSubTaskIsDone(index, e.target.checked)
                    }
                    type="checkbox"
                    checked={subtask.isDone}
                    className="appearance-none h-6 w-6 mx-2 rounded-full cursor-pointer  border-2 border-white hover:border-none
        hover:bg-white hover:ring-2 hover:ring-white hover:ring-opacity-50
          transition-transform duration-100 checked:bg-blue-600  checked:ring-2 checked:ring-black checked:ring-opacity-100 checked:text-white checked:border-none"
                  ></input>
                  <input
                    className=" bg-green-700 border-none outline-none  h-10 w-3/6 rounded-md px-4  my-2"
                    type="text"
                    value={subtask.title}
                    onChange={(e) => UpdateSubTaskTitle(index, e.target.value)}
                  ></input>
                </li>
              );
            })}
          </ul>
          <div>
            <input
              onChange={handleNewSubTaskIsDone}
              type="checkbox"
              className="appearance-none h-6 w-6 mx-2 rounded-full cursor-pointer  border-2 border-white hover:border-none
                 hover:bg-white hover:ring-2 hover:ring-white hover:ring-opacity-50
                  transition-transform duration-100 checked:bg-blue-600  checked:ring-2 checked:ring-black checked:ring-opacity-100 checked:text-white checked:border-none"
            ></input>
            <input
              className=" bg-green-100 border-none outline-none  h-10 w-3/6 rounded-md px-4  my-2"
              type="text"
              value={subtask.title}
              onBlur={blurNewSubTaskTaskTitle}
              onChange={handleNewSubTaskTitle}
              onFocus={focusNewSubTaskTaskTitle}
            ></input>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleSaveTask}
          >
            Guardar Tarea
          </button>
        </div>
      </main>
    </div>
  );
}
