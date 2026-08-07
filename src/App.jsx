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
          {/* Aplicando la regla: Los secctions no contienen margenes sino los contenedores */}
          <section id="inicio" className=" py-20 flex-col items-center">
            <div className="mt-10 mx-auto flex flex-col lg:flex-row items-center justify-center  max-w-5xl   ">
                <HeroLeft />
                <HeroRight />
                {/*<Scroll />*/}
            </div>
          </section>

          {/*2. SOBRE MÍ*/}
          <SobreMi />

          {/*3. MIS PROYECTOS */}
          <MisProyectos />

          {/*4. FORMULARIO*/}
          <FormContact />

          <Footer />
        </main>
      </div>
    </>
  );
}
export default App;


