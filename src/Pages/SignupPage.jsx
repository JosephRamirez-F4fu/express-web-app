import React, { useState } from "react";
import banner from "/notion-parade.avif";
import logo from "/Notion-logo.svg.png";
import { Link } from "react-router-dom";
import { UseUser } from "../context/UserContext";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastame] = useState("");
  const { createUserConsumer } = UseUser();
  const handleconfirmpasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastame(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      firstname: firstname,
      lastname: lastname,
      password: password,
      email: email,
    };
    if (password === confirmpassword) {
      createUserConsumer(user)
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex">
      <div className="flex flex-row gap-12 justify-center items-center py-8 bg-violet-900 min-h-screen w-full">
        <div>
          <Link to="/">
            <img src={logo} className="w-32 mx-auto"></img>
          </Link>
          <img src={banner} className="w-5/6" />
        </div>
        <div className="w-full max-w-sm border-2 border-white rounded-lg overflow-hidden">
          <form
            className="flex flex-col items-center p-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col mb-4">
              <label className="mr-2 text-white">Nombre:</label>
              <input
                type="text"
                value={firstname}
                onChange={handleFirstnameChange}
                className="border border-gray-400 px-2 py-1"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mr-2 text-white">Apellido:</label>
              <input
                type="text"
                value={lastname}
                onChange={handleLastnameChange}
                className="border border-gray-400 px-2 py-1"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mr-2 text-white">Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="border border-gray-400 px-2 py-1"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mr-2 text-white">Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="border border-gray-400 px-2 py-1"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mr-2 text-white"> Confirmar Contraseña:</label>
              <input
                type="password"
                value={confirmpassword}
                onChange={handleconfirmpasswordChange}
                className="border border-gray-400 px-2 py-1"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
            >
              Registrarse
            </button>
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
              to="/login"
            >
              ¿Ya tienes un cuenta ? Ingresa aquí!
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
