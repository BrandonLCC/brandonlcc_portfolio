# Mi Portfolio

Portfolio personal desarrollado con React, Vite y Tailwind CSS.

## Requisitos

- Node.js 18 o superior
- npm

Verificar la instalación:

```bash
node -v
npm -v
```

---

## Crear el proyecto

Crear el proyecto con Vite:

```bash
npm create vite@latest mi-portfolio -- --template react
```

Entrar al directorio del proyecto:

```bash
cd mi-portfolio
```

Instalar las dependencias:

```bash
npm install
```

---

## Instalar Tailwind CSS

Instalar Tailwind CSS y el plugin para Vite:

```bash
npm install tailwindcss @tailwindcss/vite
```

Modificar el archivo `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

## Configurar Tailwind

Abrir el archivo:

```
src/index.css
```

Eliminar el contenido generado por defecto y dejar únicamente:

```css
@import "tailwindcss";
```

---

## Ejecutar el proyecto

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```
http://localhost:5173
```

---

## Compilar para producción

Generar la versión optimizada del proyecto:

```bash
npm run build
```

Los archivos de producción se generarán en:

```
dist/
```

Para probar la versión compilada localmente:

```bash
npm run preview
```

---

## Publicación con GitHub Pages

Después de realizar cambios:

```bash
git add .
git commit -m "Actualización del proyecto"
git push
```

Si GitHub Pages está configurado mediante GitHub Actions, la publicación se realizará automáticamente después de cada `push`.

---

## Estructura recomendada

```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## Tecnologías

- React
- Vite
- Tailwind CSS

---

## Comandos útiles

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Compilar el proyecto:

```bash
npm run build
```

Previsualizar la versión de producción:

```bash
npm run preview
```