# Speak Node.js Boilerplate

Speak Node.js Boilerplate helps to create a microservice quickly in any environment.

Pre-configured files and templates to create your API endpoint and deploy on Docker quickly.

## Installation

`npm i`

### Run on your local server

Build the typescript first: `npm run build`
Run the codebase: `npm start`

## Folder structure

Here's the folder structure of the repository:

- src
  - @speak-folder-name
  - routes
  - template
    - allow you to create a complete folder structure
  - app.ts
    - main file to run the codebase

### Create your first Component

Step 1:

- Go to `template/index.ts` file and add your component name

Step 2: Run `ts-node template.index.ts` command

- It will automatically creates all required folders & files
  
- Go to `src/routes/index.ts` and include your route.
- Add your logic to the codebase
- Run the codebase
