# Camping Cabin
Preview of a Cabins and info gathered from wordpress. Demo gets data from a pre-fetched json datafile.
[Preview Front-end](https://boj012026-create.github.io/camping-frontend/)

## Tech Stack
### Frontend
Vite, React, Typescript, Tailwind, Vitest, Nodemon, Apollo client
### backend( not present )
Headless Wordpress, GraphQL, ACF
## Setup instructions
- Make shure you got node installed
- clone repo and run following commands
```shel
npm install
npm run dev
```
### Available commands
```shell
npm run <Command>
```
| command | explanation |
| ------- | ----------- |
| dev     | start live editing |
| deploy  | build and upload to github pages |
| build   | builds project |
| preview | runs a latest build |
## Architecture
### wordpress as headles cms
many custommers are used to their interface.
### Vite React
my main tech stack,
# Goals
## practize
using tokens, setting up login, connecting to database.  
(dead ends took to much time to get to practice these goals)
## learn
#### Typescript and Tailwind
they are used alot in the field.
Typescript prevents alot of bugs, when for correct types
Tailwind speeds up styling

# What I learned
- Set a project on hold if it doesn't serve it's purpose.
- Learn my main stack well, then use it as context to learn similar concepts faster
- Learn concepts within my mentors stacks. Helps avoiding getting stuck in dead ends.  
- Understanding the main concepts of typescript was not enough, as I often ended up discovering exceptions and different opinions on best practice regarding types and interfaces.
- Learning Headless wordpress without anyone able to help, sent me into a couple of dead ends. For instance trying many libraries and plugins, before I found what worked best for My setup
## Headless wordpress
- works well with acf(advanced custom fields) to create custom forms
- The GraphQl plugin turns 7 api calls for one resource into 1, and formats api better
## React
- Apollo client returns useStates for data loading and error, making updating data seamless
# Notes to myself about setup
pnpm install tailwindcss @tailwindcss/vite
## vite.config.js
```js
...
import tailwindcss

export default defineConfig({
    plugins: [
    ...
    tailwindcss(),
    ],
})
```
index.css
```css
@import "tailwindcss"
```
