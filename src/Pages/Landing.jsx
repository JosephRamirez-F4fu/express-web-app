import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Limage1 from "/home-hero.avif";
import LimageUsers from "/avatars.avif";
import beforNotion from "/tools-before-notion-V2.avif" 
import lineNotion from "/tools-strikethrough-V2.png" 
import parade from "/notion-parade.avif"
import production from "/sidekick-desktop-app.png"
import toDo from "/list.webp"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow">
       
        <div className="h-8"></div>
        <div className="flex flex-col gap-10">
          <div className="text-4xl font-bold text-center text-white mb-4">
            Nition
          </div>
          <img src={parade} className="w-3/6 mx-auto mb-4"/>
          <div className="text-xl text-center text-gray-200 mb-4">
            Por qué escogernos...
          </div>
          <img
            src={Limage1}
            alt="Imagen de referencia 1"
            className="mx-auto mb-4"
          />
          <div className="text-xl text-center text-gray-200 mb-4">
            Todo lo que puedes hacer...
          </div>
          <img
            src={toDo}
            alt="Imagen de referencia 2"
            className="mx-auto mb-4 w-4/6"
          />
          <div className="text-xl text-center text-gray-200 mb-4">
            Organízate y sé productivo...
          </div>
          <img
            src={production}
            alt="Imagen de referencia 3"
            className="mx-auto mb-4 w-4/6"
          />
          <div className="text-xl text-center text-gray-200 mb-4">
            No te olvides de nada nunca más...
          </div>
          <div className="mx-auto h-20">
          <div className="relative">
            <img
              src={beforNotion}
              alt="Imagen 2"
            />
            <img
              src={lineNotion}
              alt="Imagen 1"
              className="absolute top-0 left-0"
            />
          </div>
          </div>
          <div className="text-xl text-center text-gray-200">
            Nuestros usuarios...
          </div>
          <img className="mx-auto mb-4" src={LimageUsers} />
        </div>
      </main>
      <footer className="text-slate-50 flex justify-center gap-x-40 px-20 ">
        <Link className="hover:underline decoration-solid">Facebook</Link>
        <Link className="hover:underline decoration-solid">Twitter</Link>
        <Link className="hover:underline decoration-solid">Instagram</Link>
      </footer>
    </div>
  );
}
