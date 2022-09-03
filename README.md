# Teller

<img src="https://raw.githubusercontent.com/GuiMoraesDev/teller/main/public/img/Icon.png" alt="Teller logo" height="100px" align="right" />

[![axios](https://img.shields.io/badge/axios-%5E0.27.2-%235A29E4)](https://axios-http.com/)
[![next](https://img.shields.io/badge/nextjs-%5E12.2.3-white?logo=Next.js)](https://nextjs.org/)
[![typescript](https://img.shields.io/badge/typescript-%5E4.7.4-blue?logo=Typescript)](https://www.typescriptlang.org/)
[![styled-components](https://img.shields.io/badge/styled--components-%5E5.3.5-ff69b4?logo=styled-components)](https://styled-components.com/)
[![react-hook-form](https://img.shields.io/badge/react--hook--form-%5E7.34.0-EC5990?logo=React-Hook-Form)](https://react-hook-form.com/)
[![@tanstack/react-query](https://img.shields.io/badge/react--query-%5E4.0.10-FF4154?logo=React-Query)](https://tanstack.com/query/v4/)

</br>

<small>All badges are links to each doc</small>

## Description of that project 📖

Teller app is an POC of a social media based on twitter to test out many technologies. This project is a playground project to test some concepts;

## Project Links

- 📝[Figma Project](https://www.figma.com/file/Jtw62Q7XIKtG4wwemhBzgV/Teller)
- 📱[Production Link](https://teller-six.vercel.app/)
- 🖥️[Server project](https://github.com/GuiMoraesDev/teller-api)

## Requirements 🛑

### Mandatory

For development, you will need some software installed in your environment.

- [NodeJS](https://nodejs.org/en/download/),
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

### Optional

To improve your experience and enjoy each linter, here are some extensions </br>
<small>For VSCode, if you use another editor, please look at your marketplace</small>

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Editorconfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## Configuring your Project 🧰

Yarn will install all dependencies into all projects, start and build them

```batch
yarn install
yarn dev
yarn build
```

## Project Folders Structure 👷

```code
.
├── .husky
├── .jest
├── .storybook
├── .swc
├── public
├── src
│    ├── @types
│    ├── components
│    │    └── [component_folder]
│    │         ├── __snapshots__
│    │         ├── [component_folder].stories.tsx
│    │         ├── index.tsx
│    │         └── styles.ts
│    ├── constant
│    ├── context
│    ├── layouts
│    │    ├── Private
│    │    │    ├── components
│    │    │    │    └── [component_folder]
│    │    │    │         ├── index.tsx
│    │    │    │         └── styles.ts
│    │    │    ├── index.tsx
│    │    │    └── styles.ts
│    │    └── Sign
│    │         ├── index.tsx
│    │         └── styles.ts
│    ├── pages
│    ├── patterns
│    │    └── [pattern_folder]
│    │         ├── __snapshots__
│    │         ├── [pattern_folder].stories.tsx
│    │         ├── index.tsx
│    │         ├── styles.ts
│    │         └── text.spec.tsx
│    ├── router
│    ├── services
│    │    └── github
│    ├── styles
│    │    ├── global
│    │    └── themes
│    ├── tests
│    └── views
│         └── [view_folder]
│              ├── index.tsx
│              └── styles.ts
└── [...]
```

## Project Linters 🧹

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## Project Maintenance 👨‍🔧

- Project is using Angular Commits Guide Line, for more information, click on this [link](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

## How this project can grow? 🪴

- Tests, tests and more tests
- Apply internationalization would be a good option to turn it more world wide spread.
- Maybe this project could be better with more themes
