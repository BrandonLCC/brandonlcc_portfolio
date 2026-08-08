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
/* 
RESPONSABILIDAD DE CADA PROPIEDAD

FLEX
- justify-* → eje principal (horizontal si flex-row)
- items-* → eje secundario
- gap-* → separación entre hijos
- flex-col → cambia la dirección a vertical

GRID
- grid-cols-* → cantidad/estructura de columnas
- gap-* → separación entre filas y columnas
- Se puede combinar con flex dentro de cada hijo

RESPONSIVE
- grid-cols-1 md:grid-cols-2
  → 1 columna en móvil, 2 en desktop

- No necisto crear porcentajes manualmente (w-1/2)
  si el layout naturalmente se puede resolver con Grid.

CONTENEDOR (div padre) [OK]

- max-w-5xl → limita el ancho máximo
- w-full   → permite ocupar todo el ancho disponible
- mx-auto  → centra el contenedor
- px-5     → espacio interno horizontal (por ver)
- py-20    → espacio interno vertical

ESPACIADO

3 categorias de gap
gap-5 → separación entre hijos de Flex/Grid
gap-10 → separación entre hijos de Flex/Grid
gap-15 → separación entre hijos de Flex/Grid

padding → espacio DENTRO del elemento
margin  → espacio FUERA del elemento

Usar una escala consistente:
4 / 8 / 16 / 24 / 32 / 48 / 80px


ALTURA

- min-h-* → altura mínima, puede crecer con el contenido
- h-*     → altura fija


Para secciones responsive normalmente:
min-h-screen
(o altura natural + py-* cuando no necesitas 100vh)

REGLA MENTAL

- Flex → "¿Cómo distribuyo estos elementos?"
- Grid → "¿Cómo divido/estructuro este espacio?"

Grid puede contener Flex y Flex puede contener Grid.
No son excluyentes.

flex-row → horizontal
flex-col → vertical

justify-center → centra horizontalmente
items-center → centra verticalmente

LOGOS

- logos normales: size={17}
- Logos de adorno: size={x}
- Maximo de tamaño: size={x}

ROUNDED PENDIENTE
TAMAÑO TEXTOS 2 SUB TITULOS PENDIENTE

**/
    <main>
      <Navbar />
      {/* Aplicando la regla: Los secctions no contienen margenes sino los contenedores */}
      <section id="inicio" className="linea-horizontal">
        {/* Como exepción se define pt-30 debido al navbar */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto px-5 py-30 linea-vertical"> 
          <HeroLeft />
          <HeroRight />
        </div>
          <Scroll />
      </section>

      {/*2. SOBRE MÍ*/}
      <SobreMi />

      {/*3. MIS PROYECTOS */}
      <MisProyectos />

      {/*4. FORMULARIO*/}
      <FormContact />

      <Footer />
    </main>
  );
}
export default App;


