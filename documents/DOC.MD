codigo de instalacion aplicado

npm create vite@latest mi-portfolio -- --template react


---


1. Entra al proyecto
cd mi-portfolio
2. Instala las dependencias
npm install
3. Instala Tailwind CSS (forma recomendada con Vite)
npm install tailwindcss @tailwindcss/vite
4. Configura el plugin de Vite

Abre vite.config.js (o vite.config.ts si elegiste TypeScript) y déjalo así:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
5. Importa Tailwind

En src/index.css, reemplaza todo el contenido por:

@import "tailwindcss";
6. Inicia el proyecto
npm run dev

Verás algo como:

Local: http://localhost:5173

7. Limpia la plantilla

Elimina el contenido de App.jsx y prueba con algo sencillo:

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-6xl font-bold">
        Mi Portfolio 🚀
      </h1>
    </div>
  );
}

export default App;