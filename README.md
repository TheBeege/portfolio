# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🌐 Languages

The site is published in English (`/`) and Korean (`/ko/`).

- **Text** lives in `src/data/content/en.ts` and `src/data/content/ko.ts`. Both files share the `HomeContent` type, so a missing translation fails the build's type check (`npx astro check`).
- **Language-neutral data** (tags, links, screenshot paths, ordering) lives once in `src/data/site.ts`. To add a project, add it there, then add its text to every language file.
- **Interface strings** (nav, buttons, labels) are in `src/i18n/ui.ts`.
- **Detection:** on a first visit to `/`, an inline script sends visitors whose browser prefers Korean to `/ko/`. Choosing a language with the switcher is saved in `localStorage` and always wins over detection. Direct links to `/ko/` are never redirected.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
