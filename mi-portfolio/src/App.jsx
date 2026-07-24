import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'




// Mis componentes

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HeroLeft from "./components/hero-left";

function App() {
  
  return (
  <> 
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
      rel="stylesheet"
    />
  </div>
    
  <div className="fondo-svg min-h-screen">   {/* Contenedor general */}

    <Navbar />

    <main className="mt-15 mx-30 flex flex-col items-center ">

      <section className="flex flex-col   lg:flex-row   flex items-center">

        {/* Primero toma la forma del primer w, luego el w-full.. */}
        
        <div className="w-1/2 w-full">
          <Hero />
        </div>

        <div className=" w-1/2 w-full flex  justify-end ">
          {/* Imagen, modelo 3D o ilustración */}
          <HeroLeft />
        </div>

      </section>

    </main>

  </div>
  </>
  );
}

export default App;


