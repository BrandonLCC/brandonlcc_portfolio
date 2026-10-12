# `main` vs `origin/main`: por qué se separaron y cómo evitarlo

Este documento explica, con el caso real de este repositorio, la diferencia
entre la rama local y la rama del remoto, por qué quedaron "diverged" y qué
hacer (y qué no hacer) cuando pase de nuevo.

## 1. Conceptos básicos

| Nombre | Qué es | Dónde vive |
|---|---|---|
| `main` | La rama **local**. Es tu copia de trabajo con tus commits. | En tu disco |
| `origin` | El nombre que Git le da al **remoto** (aquí: GitHub). | Configuración del repo |
| `origin/main` | Una **foto** de cómo estaba `main` en GitHub la última vez que hiciste `git fetch` o `git pull`. **No es una rama**, no se mueve sola. | En tu disco (como referencia) |

Regla mental: `origin/main` solo se actualiza cuando tú hablas con GitHub
(`git fetch` / `git pull` / `git push`). Si trabajas 3 días sin fetchear,
`origin/main` muestra una verdad vieja, aunque GitHub haya cambiado.

## 2. Ahead, behind y diverged

Cuando `git status` dice algo como *"Your branch and 'origin/main' have
diverged, and have 42 and 41 different commits each"*, significa:

- **ahead 42**: tienes 42 commits en local que el remoto no tiene → se
  resuelve con `git push`.
- **behind 41**: el remoto tiene 41 commits que tú no tienes → se resuelve
  con `git pull`.
- **diverged**: las dos ramas avanzaron por caminos distintos desde un punto
  común. Git no sabe cuál elegir y te pide decidir.

## 3. Qué pasó realmente en este repo

El mensaje de `git status` asustaba (42 y 41 commits distintos), pero el
diagnóstico real era otro. Los pasos que lo revelaron:

**a) Ver los commits de cada lado**

```bash
git fetch origin                      # refresca la foto de origin/main
git log --oneline main ^origin/main   # solo locales
git log --oneline origin/main ^main   # solo del remoto
```

Los mensajes de commit eran **los mismos** en ambos lados... pero los hashes
eran distintos. Hashes distintos con el mismo mensaje = alguien reescribió la
historia en algún momento (`rebase`, `amend`, o commits rehechos desde otro
cliente/cuenta).

**b) Encontrar el punto donde se separaron**

```bash
git merge-base main origin/main       # ancestro común
```

**c) Confirmar si el contenido cambió o solo los metadatos**

```bash
git range-diff <ancestro>..origin/main <ancestro>..main
```

El range-diff mostró que 36 de los 40 commits eran **idénticos en contenido**
y 4 solo cambiaban de metadatos (el autor pasó de
`br.casas@duocuc.cl` a `brandonluiscasas1@gmail.com`). Traducción: **el
remoto no tenía ningún archivo que el local no tuviera**.

**d) La prueba definitiva**

```bash
git diff <commit-local-equivalente> <HEAD-remoto> --stat
```

Sin salida = los árboles de archivos son idénticos. El remoto no tenía
trabajo exclusivo que perder.

**Conclusión:** la "divergencia" no eran dos trabajos distintos. Era el mismo
trabajo con la historia reescrita en un lado más 2 commits nuevos en local.

## 4. Cómo se resolvió

Como se comprobó que el remoto no tenía contenido único, se reemplazó el
remoto con el estado local:

```bash
git push --force-with-lease origin main
```

- `--force-with-lease` (y no `--force` simple) es el cinturón de seguridad:
  falla si alguien pusheó al remoto después de tu último `fetch`, evitando
  que le pises el trabajo a otra persona.

Después, para que todos los commits quedaran con el email
`br.casas@duocuc.cl`, se reescribió la historia completa:

```bash
git tag backup-pre-rewrite main       # respaldo SIEMPRE antes de reescribir

git filter-branch -f --env-filter "export GIT_AUTHOR_NAME=BrandonLCC; export GIT_AUTHOR_EMAIL=br.casas@duocuc.cl; export GIT_COMMITTER_NAME=BrandonLCC; export GIT_COMMITTER_EMAIL=br.casas@duocuc.cl" -- --all

git push --force-with-lease origin main
```

Verificación final: los 55 commits delrepo (local y `origin/main`) tienen
autor **y** committer `BrandonLCC <br.casas@duocuc.cl>`.

El tag `backup-pre-rewrite` sigue existiendo por si acaso. Para borrarlo
cuando ya no lo necesites:

```bash
git tag -d backup-pre-rewrite
```

## 5. Cómo evitar que vuelva a pasar

1. **Configura tu identidad desde el día uno.** En este repo ya quedó
   configurado (`git config user.name` / `git config user.email`). Si quieres
   que aplique a todos tus proyectos:

   ```bash
   git config --global user.name "BrandonLCC"
   git config --global user.email "br.casas@duocuc.cl"
   ```

2. **No reescribas historia ya publicada** (nada de `amend` o `rebase` sobre
   commits que ya están en GitHub) salvo que sea necesario, y si lo haces usa
   `--force-with-lease`.

3. **Sincroniza antes de trabajar.** Al empezar el día:

   ```bash
   git pull --rebase origin main
   ```

   `--rebase` mantiene tu historia lineal y evita commits de merge fantasma.

4. **Un solo lugar de trabajo.** No edites el mismo repo en dos carpetas o
   dos PCs a la vez sin pushear/fetchear entre medio. Si clonas de nuevo,
   borra el clon viejo.

5. **Ante "diverged", diagnóstica antes de actuar.** Nunca fuercees a ciegas.
   La secuencia de la sección 3 (fetch → ver logs → merge-base → range-diff →
   diff de contenido) dice si el remoto tiene trabajo real que perder.

6. **Commits chicos y push seguido.** Mientras menos tiempo pase sin empujar,
   menos margen para divergencias.

## 6. Comandos de rescate rápido

| Situación | Comando |
|---|---|
| Quedarme con el remoto y descartar mi local | `git reset --hard origin/main` |
| Conservar mi local y pisar el remoto (tras verificar) | `git push --force-with-lease origin main` |
| Unir ambas historias con un commit de merge | `git pull --no-rebase origin main` |
| Traer los cambios del remoto encima de los míos | `git pull --rebase origin main` |
| Ver qué cambió realmente entre local y remoto | `git diff main origin/main` |
| Respaldar antes de reescribir historia | `git tag backup` o `git branch respaldo` |

## Resumen para recordar

- `main` es tu trabajo; `origin/main` es una foto vieja del remoto.
- "Diverged" no siempre significa desastre: puede ser la misma historia con
  hashes distintos.
- Verifica siempre con `git diff`/`range-diff` si el remoto tiene contenido
  que no tienes antes de decidir entre `reset`, `pull` o `push --force-with-lease`.
- Reescribir historia (autor, mensajes) es posible pero **cambia todos los
  hashes** y obliga a un force push: hazlo con respaldo (`git tag`).
