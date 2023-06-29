import { Link } from "react-router-dom";
import { UseUser } from "../context/UserContext";
import logo from "/Notion-logo.svg.png";
export default function Navbar() {
  const { isLogin,logout } = UseUser();
  return (
    <nav className="flex justify-between px-32 bg-violet-700 h-12 items-center text-slate-200 text-xl">
      <img alt="logo" src={logo} className="h-10" />

      {!isLogin ? (
        <div></div>
      ) : (
        <div>
          <Link className="px-8 hover:underline decoration-solid" to ="/home">Home</Link>
          <Link className="px-8 hover:underline decoration-solid" to ="/notes">Mis Notas</Link>
          <Link className="px-8 hover:underline decoration-solid" to ="/tasks">Mis Tareas</Link>
        </div>
        
      )}

      {!isLogin ? (
        <div>
          <Link className="px-4 hover:underline decoration-solid" to="/login">
            Login
          </Link>
          <Link className="px-4 hover:underline decoration-solid" to="/signup">
            Sign In
          </Link>
        </div>
      ) : (
        <div>
          <Link className="px-4 hover:underline decoration-solid" to="/profile">
            Profile
          </Link>
          <Link className="px-4 hover:underline decoration-solid" to="/" onClick={logout}>
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
}
