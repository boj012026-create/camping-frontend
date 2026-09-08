# Camping Cabin preview
Headless wordpress as cms, and react as frontend  
[Preview Front-end](https://boj012026-create.github.io/camping-frontend/)

## start
```shel
npm install
npm run dev
```
## tailwind
```shell
pnpm install tailwindcss @tailwindcss/vite
```
### vite.config.js
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
