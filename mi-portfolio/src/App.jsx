import { useState } from 'react'
import './App.css'

// Mis componentes

import Navbar from "./components/navbar/navbar";
import HeroLeft from "./components/hero/hero-left";
import HeroRight from "./components/hero/hero-right";
import Scroll from './components/otros/scroll'
import Divider from "./components/otros/divider";
import SobreMi from './components/sobre-mi/sobre-mi'
import ProjectCard from './components/card/projectCard'
import FormContact from './components/form/form-contact'
import Footer from './components/footer/footer'

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
      {/* Contenedor general */}
      <div className="min-h-screen">  

        <Navbar />

        <main className="mx-auto max-w-7xl"> {/* Aquí defini el margen general */}

          {/*1. PRESENTACIÓN */}

          {/* En vez de aplicar los margenes de responsive en main, se aplicara en las sections. px-5 etc.. */}

          <section className="min-h-screen flex flex-col px-5 md:px-10 lg:px-16">
            <div className="flex-1 flex flex-col lg:flex-row items-center">
              <div className="w-full ms:w-1/2">
                <HeroLeft />
              </div>

              <div className="w-full md:w-1/2 w-full flex  justify-end mb-5 ">
                {/* Imagen, modelo 3D o ilustración */}
                <HeroRight />
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

          <Divider />

          {/*3. PROYECTOS*/}
          <section className="px-6 py-20">

            <div className="mx-auto max-w-7xl">
              <div className='text-center '>
                <h2 className="diseño-sub-titulos-morado my-5 text-4xl font-bold text-white">
                  PROYECTOS
                </h2>

                <p className="text-white my-5">adipisicing elit. Doloribus voluptatibus adipisci maxime soluta hic odio exercitationem neque voluptatum tenetur, dolores possimus ex blanditiis laborum cosequuntur incidunt praesentium harum totam nemo!</p>

              </div>


              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">

                <ProjectCard
                  title="Mi proyecto"
                  description="Descripción de mi proyecto."
                  image="https://avatars.githubusercontent.com/brandonlcc"
                />

                <ProjectCard
                  title="Mi proyecto"
                  description="Descripción de mi proyecto."
                  image="https://avatars.githubusercontent.com/brandonlcc"
                />

                <ProjectCard
                  title="Mi proyecto"
                  description="Descripción de mi proyecto."
                  image="https://avatars.githubusercontent.com/brandonlcc"
                />

                <ProjectCard
                  title="Mi proyecto"
                  description="Descripción de mi proyecto."
                  image="https://avatars.githubusercontent.com/brandonlcc"
                />

              </div>

            </div>

          </section>

          {/* Formulario */}
          <section>
            <FormContact />

          </section>

          <Footer />

        </main>

      </div>
    </>
  );
}

export default App;


