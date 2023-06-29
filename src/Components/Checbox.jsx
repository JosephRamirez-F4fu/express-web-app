export const  Checkbox =({handleIsDone})=>{
    return( <input
       
        type="checkbox"
        className="appearance-none h-6 w-6 mx-2 rounded-full cursor-pointer  border-2 border-white
      hover:border-none
      hover:bg-white hover:ring-2 hover:ring-white hover:ring-opacity-50
      transition-transform duration-100 checked:bg-blue-600  checked:ring-2 checked:ring-black checked:ring-opacity-100 checked:text-white checked:border-none"
      ></input>)
}