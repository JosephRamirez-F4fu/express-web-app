import React, { useState } from 'react';
import banner from "/notion-parade.avif"
import  logo from "/Notion-logo.svg.png"
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor.
    // Por simplicidad, este ejemplo solo muestra los datos en la consola.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='flex'>
    <div className="flex flex-row gap-12 justify-center items-center py-8 bg-violet-900 min-h-screen w-full">
    <div >
    <Link to="/">
    <img src ={logo} className='w-32 mx-auto'></img>
    </Link>
    <img src={banner} className='w-5/6'/>
    </div>
    <div className="w-full max-w-sm border-2 border-white rounded-lg overflow-hidden">
      <form className="flex flex-col items-center p-4" onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
        >
          Iniciar sesión
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
        >
         ¿No tienes un cuenta ? registrate aquí!  
        </button>
      </form>
    </div>
    </div>
    
  </div>
  );
};

export default LoginPage;
