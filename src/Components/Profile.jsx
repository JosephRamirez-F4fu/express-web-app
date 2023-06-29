import { UseUser } from "../context/UserContext";


export  function Profile() {
    const {user ,tasks,notes} = UseUser();
    return (
    <div className="border-2 border-yellow-600 rounded-lg text-white p-8 ">
        <div>Bienvenido !</div>
        <div>{user.firstname} {user.lastname}</div>
        <div>
        <div>Tienes {tasks.length} tareas pendientes </div>
        <div>Tienes {notes.length} notas, no te olvides de revisarlas</div>
        </div>
    </div>
    );
  }