# `@theme` y `var()` en Tailwind CSS

Esta guía explica cuándo conviene definir un token en `@theme` y cuándo leer una variable CSS con `var()`. El proyecto usa Tailwind CSS 4.

## `@theme`: crear utilidades de Tailwind

`@theme` sirve para declarar tokens que Tailwind puede convertir en clases de utilidad. El prefijo de la variable indica el tipo de utilidad que se generará.

```css
@theme {
  --color-primary-text: #67e8b5;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}
```

Esas variables permiten escribir clases como:

```jsx
<h2 className="text-primary-text font-mono">Sobre mí</h2>
```

Para colores se usa el prefijo `--color-`; por ejemplo, `--color-primary-text` genera `text-primary-text` y `bg-primary-text`. Para fuentes, `--font-mono` genera `font-mono`.

El nombre generado incluye el resto del token. Por eso `--color-bg-second` genera `bg-bg-second`, no `bg-second`.

## `var()`: leer una variable CSS

Las variables CSS normales se declaran en una regla como `:root` y se leen desde CSS o desde una utilidad arbitraria de Tailwind:

```css
:root {
  --bg-second: #0f1313;
}

.tarjeta {
  background-color: var(--bg-second);
}
```

En JSX también se puede escribir:

```jsx
<article className="bg-[var(--bg-second)]">...</article>
```

Usa `var()` cuando el valor necesite cambiar en tiempo de ejecución, por ejemplo, al alternar un tema:

```css
:root {
  --bg-second: #0f1313;
}

html.glimpses-mode {
  --bg-second: #d5d5d5;
}
```

La clase `bg-[var(--bg-second)]` leerá el valor activo de la variable. El selector del tema debe coincidir con el elemento al que JavaScript agrega la clase; en este proyecto se agrega a `<html>`.

## ¿Cuál elegir?

- Elige `@theme` para nombres de diseño reutilizables que quieras aplicar mediante clases estándar de Tailwind, como `text-primary-text` o `font-mono`.
- Elige una variable CSS y `var()` cuando el valor se cambia por tema, estado o contexto, o cuando necesitas usarla desde CSS tradicional.
- No mantengas el mismo valor fijo por separado en `:root` y `@theme` si no hace falta: con el tiempo pueden quedar desincronizados.

Para un valor que deba cambiar con el tema, la opción directa es definirlo en `:root` y sobrescribirlo en el selector del tema; luego usar `bg-[var(--bg-second)]`, `text-[var(--primary-text)]` o `border-[var(--border)]` según corresponda. Para colores fijos que forman parte del sistema visual, define tokens `--color-*` en `@theme` y utiliza las clases que Tailwind genera.

## Errores comunes

- `--primary-text` dentro de `@theme` no crea las utilidades de color esperadas; usa `--color-primary-text`.
- `--color-bg-second` corresponde a `bg-bg-second`, no a `bg-second`.
- La sintaxis para una variable arbitraria es `bg-[var(--bg-second)]`, no `bg-[--var(bg-second)]`.
- Si la clase compila pero el tema no cambia, comprueba que la variable se sobrescriba en el elemento que realmente lleva la clase de tema.
