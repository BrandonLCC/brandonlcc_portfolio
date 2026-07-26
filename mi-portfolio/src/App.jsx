import { useState } from 'react'

import './App.css'



// Mis componentes

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Scroll from './components/scroll'

import HeroLeft from "./components/hero-left";
import Divider from "./components/divider/divider";
import Divider2 from "./components/divider/divider2";
import SobreMi from './components/sobre-mi'
import Proyectos from './components/proyectos'

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

      {/* PAGINA */}

      <div className="fondo-svg  min-h-screen">   {/* Contenedor general */}

        <Navbar />

        <main className="mx-auto max-w-7xl"> {/* Aquí defini el margen general */}

          {/*1. PRESENTACIÓN */}

          {/* En vez de aplicar los margenes de responsive en main, se aplicara en las sections. px-5 etc.. */}

          <section className="min-h-screen flex flex-col px-5 md:px-10 lg:px-16">
            <div className="flex-1 flex flex-col lg:flex-row items-center">
              <div className="w-full ms:w-1/2">
                <Hero />
              </div>

              <div className="w-full md:w-1/2 w-full flex  justify-end mb-5 ">
                {/* Imagen, modelo 3D o ilustración */}
                <HeroLeft />
              </div>
            </div>

            <div className="flex justify-center pb-2">

              <Scroll />

            </div>


          </section>

          <Divider />

          {/*2. SOBRE MÍ*/}

          {/* En vez de aplicar los margenes de responsive en main, se aplicara en las sections. px-5 etc.. */}

          <section className="w-full  bg-black">
            {/* Segunda sección */}
            <SobreMi />
          </section>

          <Divider2 />

          {/*3. PROYECTOS*/}


          <section>
            <Proyectos />
          </section>



        </main>

      </div>
    </>
  );
}

export default App;


