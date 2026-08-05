// Mis componentes
import Navbar from "./components/navbar/navbar";
import HeroLeft from "./components/hero/hero-left";
import HeroRight from "./components/hero/hero-right";
import Scroll from './components/otros/scroll'
import SobreMi from './components/sobre-mi/sobre-mi'
import ProjectCard from './components/card/projectCard'
import FormContact from './components/form/form-contact'
import Footer from './components/footer/footer'
import MisProyectos from './components/proyectos/MisProyectos';

function App() {

  return (
    <>
      <div className="min-h-screen ">
        <Navbar />
        <main className="">

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

          <section id="sobreMi" className="w-full mx-auto   ">
            <SobreMi />
          </section>

          {/*SECCIÓN MIS PROYECTOS */}
          <MisProyectos />

          {/* SECCIÓN FORMULARIO */}
          <section id="contacto" className="w-full mx-auto max-w-6xl px-5 md:px-10 lg:px-16 py-20">
            <FormContact />

          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}
export default App;


