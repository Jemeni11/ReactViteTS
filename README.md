# ReactViteTS (Vite + React + TypeScript + TailwindCSS + Prettier + ESLint)

## Introduction

Hey!
This is a Vite template with the following installed:

- [Vite v7](https://vite.dev/)
- [React v19](https://react.dev/)
- [Typescript v5](https://www.typescriptlang.org/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [Prettier v3](https://prettier.io/)
- [prettier-plugin-tailwind v0.6.14](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [ESLint v9](https://eslint.org/)
- [Stylelint v16](https://stylelint.io/)
- lint-staged
- @ianvs/prettier-plugin-sort-imports v4
- [eslint/you-might-not-need-an-effect plugin](https://github.com/NickvanDyke/eslint-plugin-react-you-might-not-need-an-effect)

## Installation

You can either:

- Clone the repo and run `pnpm install` in the root directory

  Bash:

  ```bash
  git clone https://github.com/Jemeni11/ReactViteTS.git && cd ReactViteTS && pnpm install
  ```

  Powershell:

  ```powershell
  git clone https://github.com/Jemeni11/ReactViteTS.git; cd ReactViteTS; pnpm install
  ```

  <br/>
  <br/>

- Or click on the `use this template` button and pick whatever option you prefer

  <br/>
  <br/>

  <img width="945" alt="Screenshot of this repo's github page" src="https://github.com/user-attachments/assets/bc779b76-8c38-451f-91f3-6712ebff2860">

## Wait a minute, who are you?

Hello there! I'm Emmanuel Jemeni, and I work as a Frontend Developer. You can find me on various platforms:

- [LinkedIn](https://www.linkedin.com/in/emmanuel-jemeni)
- [GitHub](https://github.com/Jemeni11)
- [Twitter/X](https://twitter.com/Jemeni11_)
- [Bluesky](https://bsky.app/profile/jemeni11.bsky.social)

## Vite-Specific Information

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
