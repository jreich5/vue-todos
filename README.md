# Vue Todos

This repo contains a basic todo application built using [Vue JS](https://vuejs.org/) and [Vite](https://vitejs.dev/). The code is written in [TypeScript](https://www.typescriptlang.org/) with the help of the [Volar VS Code plugin](https://github.com/johnsoncodehk/volar/tree/master/extensions/vscode-typescript-vue-plugin). [JSON Server](https://github.com/typicode/json-server) is used for creating a mock database locally. Styling is accomplished using [Bootstrap 5.2](https://github.com/typicode/json-server).

## Setup

1. Clone this repo
2. Run `npm install` to install dependencies
3. Run `json-server --watch db.json` to start JSON server on port 3000
4. Run `npm run dev` to launch Vue app

## Planned Enhancements

- refactor TypeScript code to remove any explicit `any` types
- further abstract code to reduce individual file complexity
- multi-user authentication using Firebase
