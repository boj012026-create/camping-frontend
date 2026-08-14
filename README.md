# Camping Cabin preview
Headless wordpress as cms, and react as frontend

## start
npm install
npm run dev

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
