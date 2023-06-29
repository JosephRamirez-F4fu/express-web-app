import { useEffect, useState } from "react";

export function Note({ note }) {
  const [isDeleted, setIsDeleted] = useState(false);

    

  const handleDelete = () => {
    setIsDeleted(true);
  };
  useEffect(() => {}, [isDeleted]);
  return (
    <div className={`w-40 bg-lime-400 p-4  ${isDeleted ? " duration-200 transform scale-0 " : ""}`} >
      <div className={`text-right `}>
        {""}
        <label
          className="cursor-pointer text-2xl hover:text-red-700 "
          onClick={handleDelete}
        >
          x
        </label>{" "}
      </div>
      <div className="font-bold">{ note.note.title.length<10 ? note.note.title : note.note.title.slice(0,10)+"..."}</div>
      <div className="whitespace-pre-wrap" >{ note.note.text.length<50 ?  note.note.text : note.note.text.slice(0,50)+"..."}</div>
    </div>
  );
}
