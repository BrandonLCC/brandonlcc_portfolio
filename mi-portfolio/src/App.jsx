import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Mis componentes

import Navbar from "./components/navbar";
import Hero from "./components/hero";


function App() {
  
  return (
    
  <div className="min-h-screen">   {/* Contenedor general */}

    <Navbar />

    <main className="bg-white/10 mt-15">

      <section className="bg-white/20  flex items-center justify-between">

        <div className="bg-white/20  w-1/2">
          <Hero />
        </div>

        <div className="bg-white/20  w-1/2">
          {/* Imagen, modelo 3D o ilustración */}
          <Hero />

        </div>

      </section>

    </main>

  </div>
  );
}

export default App;


