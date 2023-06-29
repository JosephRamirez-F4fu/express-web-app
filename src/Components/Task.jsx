import { useEffect, useState } from "react";
export  function Task({ task }) {
    const [isDone, setIsDone] = useState(task.isDone);
    const handleDone=()=>{
        setIsDone(!isDone)
    }
    useEffect(()=>{
        task.isDone=isDone;
    },[isDone])

  return (
    <div className="flex justify-center items-center">
      {task.name} <label onClick={handleDone} className="cursor-pointer hover:scale-75">{isDone? "✅":"❎" }</label>
    </div>
  );
}

export function TaskCard({task}){
    return (<></>)
}