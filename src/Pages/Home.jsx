import {Profile} from "../Components/Profile";
import {Note} from "../Components/Note";
import {Task} from "../Components/Task";
import { UseUser } from "../context/UserContext";
import { useEffect } from "react";

export default function Home() {
  const { notes, tasks } = UseUser();
  const lastThreeTasks = tasks.filter(task => task.isDone == false ).slice(-3);
  const lastThreeNotes = notes.slice(-6);

  function  renderTasks () {
    return lastThreeTasks.map((task)=><Task className ="hover:bg-slate-300" task ={task} key={task.id}/>)
  }

  function  renderNotes () {
    return notes.map((note)=><Note note ={note} key={note.id}/>)
  }



  return (
    <main className="grid h-[85vh] justify-center p-10">
      <div className="grid grid-rows-3 grid-cols-5 gap-10 ">
        <div className="row-span-3 col-span-2 flex flex-col justify-center">
          <Profile />
        </div>
        <div className="col-span-3 mb-10 bg-yellow-200 rounded-xl p-5 grid grid-rows-1 grid-cols-3">{renderTasks()}</div>
        <div className="row-span-2 col-span-3 bg-blue-200 rounded-xl p-5 grid grid-rows-2 grid-cols-3 gap-8">{renderNotes()}</div>
      </div>
    </main>
  );
}
