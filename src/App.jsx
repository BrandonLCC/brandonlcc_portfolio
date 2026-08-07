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


          {/*max-w-6x1: Ancho maximo. */}

{/*          <section id="inicio" className="bg-white/10 hero-bg flex flex-col mx-auto max-w-6xl px-5 md:px-10 lg:px-16 py-20 ">
  */}
          {/* Aplicando la regla: Los secctions no contienen margenes sino los contenedores */}
          <section id="inicio" className="py-20 flex-col items-center">
            {/* Alinear los */}
            <div className="bg-white/10 mx-auto flex flex-col lg:flex-row items-center justify-center  max-w-5xl   ">
                <HeroLeft />

                <HeroRight />
                {/*<Scroll />*/}
            </div>
          </section>

          {/*2. SOBRE MÍ*/}

          {/* En vez de aplicar los margenes de responsive en main, se aplicara en las sections. px-5 etc.. */}
          {/* margen eliminado: px-5 md:px-10 lg:px-16  */}

          <section id="sobreMi" className="w-full mx-auto  ">
            <SobreMi />
          </section>

          {/*SECCIÓN MIS PROYECTOS */}
          <MisProyectos />

          {/* SECCIÓN FORMULARIO */}
          <section id="contacto" className="w-full mx-auto">
            <FormContact />

          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}
export default App;


