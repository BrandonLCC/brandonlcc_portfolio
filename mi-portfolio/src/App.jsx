import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'




// Mis componentes

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HeroLeft from "./components/hero-left";
import Divider from "./components/divider";
import SobreMi from './components/sobre-mi'

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

    <main className="mt-15 mx-auto max-w-7xl ">

      {/* En vez de aplicar los margenes de responsive en main, se aplicara en las sections. px-5 etc.. */}

      <section className="flex flex-col px-5 md:px-10 lg:px-16  lg:flex-row  flex items-center">

        {/* Primero toma la forma del primer w, luego el w-full.. */}
        
        <div className="w-full ms:w-1/2">
          <Hero />
        </div>

        <div className="w-full md:w-1/2 w-full flex  justify-end ">
          {/* Imagen, modelo 3D o ilustración */}
          <HeroLeft />
        </div>

      </section>

        <Divider />
      
      {/* En vez de aplicar los margenes de responsive en main, se aplicara en las sections. px-5 etc.. */}

      <section className="w-full ">
        {/* Segunda sección */}
        <SobreMi />
      </section>

        <Divider />

      <section className="w-full ">
        {/* Segunda sección */}
        <SobreMi />
      </section>

    </main>

  </div>
  </>
  );
}

export default App;


