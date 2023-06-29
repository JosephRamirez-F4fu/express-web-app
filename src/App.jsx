import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/SignupPage";
import Home from "./Pages/Home";
import NotesPage from "./Pages/NotePage";
import TaskPage from "./Pages/TaskPage";
import {UserContextProvider} from "./context/UserContext"
import Navbar from "./Components/Navbar";
function App() {
  return (
    
    <div  className="bg-slate-800 min-h-screen">
      <UserContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/notes" element={<NotesPage/>}></Route>
          <Route path="/tasks" element={<TaskPage/>}></Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
