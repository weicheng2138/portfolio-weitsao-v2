# Winnie's Portfolio with Next.js

![Vercel](https://vercelbadge.vercel.app/api/weicheng2138/portfolio-weitsao-v2)

A new version of server-side rendering portfolio app.

## 🎨 Color Reference

| Color                    | Hex                                                                |
| ------------------------ | ------------------------------------------------------------------ |
| Primary Color            | ![#F9BF45](https://via.placeholder.com/10/F9BF45?text=+) `#F9BF45` |
| Primary Light            | ![#FAD689](https://via.placeholder.com/10/FAD689?text=+) `#FAD689` |
| primary Dark             | ![#C28F06](https://via.placeholder.com/10/C28F06?text=+) `#C28F06` |
| Secondary01 (Background) | ![#FAFAFA](https://via.placeholder.com/10/FAFAFA?text=+) `#FAFAFA` |
| Secondary02              | ![#E0E0E0](https://via.placeholder.com/10/E0E0E0?text=+) `#E0E0E0` |
| Secondary03              | ![#757575](https://via.placeholder.com/10/757575?text=+) `#757575` |
| Secondary04              | ![#212121](https://via.placeholder.com/10/212121?text=+) `#212121` |

## Features

- [x] 🌊 [Tailwindcss](https://tailwindcss.nuxt.dev/)
- [x] ✨ Eslint & lint-staged
- [x] 🐕 Husky & cz (with commitizen installed globally)

## Getting Started

First, run the development server:

```bash
$ install
pnpm install

$ dev
pnpm dev

$ build
pnpm build

$ serve
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tailwindcss

### Installation

```bash
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js
/** tailwind.config.js */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
       ^^^
    "./src/components/**/*.{js,ts,jsx,tsx}",
       ^^^
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css
/** globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Automatic Class Sorting with Prettier

```bash
pnpm install -D prettier prettier-plugin-tailwindcss
```

> Note that plugin autoloading is not supported when using certain package managers, such as pnpm or Yarn PnP. In this case you may need to add the plugin to your Prettier config explicitly:

.prettierrc

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80,
  "arrowParens": "always",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Developing

### Husky

It will help us to setup Git Hooks easier.

```shell
pnpm install -D husky
npx husky install

npx husky add .husky/pre-commit
```

.husky/pre-commit

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo '🏗️👷 Styling your project before committing👷‍♂️🏗️'
echo 'please be patient, this may take a while...'

# Check ESLint Standards
pnpm lint ||
(
    echo '🔨❌ Yoo, you have a problem in your code. Check linter 🔨❌
          Run yarn lint, add changes and try commit again.';
    false;
)
echo '🎉 No error found: committing this now.... ✨🚀🏄‍♂️🍻'

npx lint-staged
```

package.json

```json
"scripts": {
  "postinstall": "husky install",
}
```

### lint-staged

It will help us to run a certain task before commiting our code, and it will make sure that our code is clean and well formatted.

```shell
pnpm install -D lint-staged
```

package.json

```json
"lint-staged": {
    // ... this mean any file with the extension of js, jsx,
    // ts, and tsx will be checked by eslint and formatted by prettier
    "**/*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --config ./.prettierrc.js --write"],

    // ... this mean any file with the extension of css,
    // scss, md, html, and json will be formatted by prettier
    "**/*.{css,scss,md,html,json}": ["prettier --config ./.prettierrc.js --write"]
}
```

### Commitizen

It will help us to organize our commit message, and it will make sure that our commit message is clear and easy to understand.

```shell
pnpm install -g commitizen
commitizen init cz-conventional-changelog --pnpm --dev --exact
```

package.json will automatically generate the config below in your `package.json`

```json
{
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
