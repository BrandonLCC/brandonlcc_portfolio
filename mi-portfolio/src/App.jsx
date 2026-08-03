// Mis componentes

import Navbar from "./components/navbar/navbar";
import HeroLeft from "./components/hero/hero-left";
import HeroRight from "./components/hero/hero-right";
import Scroll from './components/otros/scroll'
import SobreMi from './components/sobre-mi/sobre-mi'
import ProjectCard from './components/card/projectCard'
import FormContact from './components/form/form-contact'
import Footer from './components/footer/footer'
function App() {

  return (
    <>
      {/* PAGINA */}
      {/* Contenedor general */}
      <div className="min-h-screen">
        <Navbar />
        <main>

          {/*1. PRESENTACIÓN */}

          {/* En vez de aplicar los margenes de responsive en main, se aplicara en las sections */}

          {/*max-w-6x1: Ancho maximo. */}

          <section id="inicio" className="hero-bg flex flex-col mx-auto max-w-6xl px-5 md:px-10 lg:px-16 py-20 relative">
            {/* Alinear los */}
            <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 max-w-xl">
                <HeroLeft />

              </div>

              <div className="w-full md:w-1/2 max-w-lg flex justify-center">
                {/* Imagen, modelo 3D o ilustración */}
                <HeroRight />


              </div>
            </div>

            <div className="mt-15">
              <Scroll />

            </div>
          </section>

          {/*2. SOBRE MÍ*/}

          {/* En vez de aplicar los margenes de responsive en main, se aplicara en las sections. px-5 etc.. */}
          {/* margen eliminado: px-5 md:px-10 lg:px-16  */}
          <section id="sobreMi" className="w-full mx-auto  py-20 ">
            {/* Segunda sección */}
            <SobreMi />
          </section>

          {/*3. PROYECTOS*/}
          <section id="proyectos" className="w-full mx-auto max-w-6xl px-5 md:px-10 lg:px-16 py-20">

            <div className='text-center '>
              <h2 className="subtitle-highlight  font-orbitron mr-2 text-5xl sm:text-5xl md:text-5xl lg:text-5xl">
                PROYECTOS
              </h2>

              <p className="text-white my-5">adipisicing elit. Doloribus voluptatibus adipisci maxime soluta hic odio exercitationem neque voluptatum tenetur, dolores possimus ex blanditiis laborum cosequuntur incidunt praesentium harum totam nemo!</p>

            </div>


            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ProjectCard
                title="Portfolio Personal"

                description="Portafolio desarrollado en React y Vite para mostrar proyectos, experiencia y contacto."
                tags={['React', 'Tailwind', 'TypeScript']}
                image="https://opengraph.githubassets.com/1/BrandonLCC/brandonlcc_portfolio"
                link="https://github.com/BrandonLCC/brandonlcc_portfolio"
              />

              <ProjectCard
                title="FIFA Web"
                description="Proyecto web enfocado en la presentación y despliegue del trabajo de FIFA."
                tags={['Django']}

                image="https://opengraph.githubassets.com/1/BrandonLCC/FIFA_web"
                link="https://github.com/BrandonLCC/FIFA_web"
              />

              <ProjectCard
                title="FIFA ML con Kedro"
                description="Experimento de machine learning con pipelines y flujo de trabajo estructurado."
                tags={['Kedro', 'Jupyter', 'DVC', 'ML']}

                image="https://opengraph.githubassets.com/1/BrandonLCC/FIFA_ML_Kedro"
                link="https://github.com/BrandonLCC/FIFA_ML_Kedro"
              />

              <ProjectCard
                title="RegistrAPP"
                description="Aplicación enfocada en registro y gestión con una estructura más completa."
                tags={['IONIC', 'MySQL', 'Angular']}
                image="https://opengraph.githubassets.com/1/BrandonLCC/RegistrAPP"
                link="https://github.com/BrandonLCC/RegistrAPP"
              />
            </div>

          </section>

          {/* Formulario */}
          <section id="contacto" className="w-full mx-auto max-w-6xl px-5 md:px-10 lg:px-16 py-20">
            <FormContact />

          </section>

          <section id="otros" className="w-full mx-auto max-w-6xl px-5 md:px-10 lg:px-16 py-20"></section>


          <Footer />

        </main>

      </div>
    </>
  );
}

export default App;


