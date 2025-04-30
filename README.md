# Project Overview

Mamablog is a blogging platform developed for the Mother’s Day Tribute Blog Challenge. Visit the website at [https://mamablog.vercel.app/](https://mamablog.vercel.app/)

## Tech Stack : 
1. [Nextjs](https://nextjs.org/) - framework
2. [velite](https://velite.js.org/) - content management
3. [MDX](https://mdxjs.com/) - rich content rendering and customization
4. [shadcn/ui](https://ui.shadcn.com/) - component library
5. [Tailwindcss](https://tailwindcss.com/) - css library
6. [Vercel](https://vercel.com) - deployment and CI/CD

## Features

1. **Rich articles** : Articles are written in MDX, which provides all the features of markdown and also allows to add custom React components to render content.

2. **Content Managemen** : All articles are written in [/contents/articles](/content/articles) directory, which are build and transformed into JSON at build time and rendered on screen using MDX.

3. **Effective Searching** : Blazing fast search feature to find articles easily.

# Setting up locally
To setup and run the project locally, following the given steps:

> NOTE : Please use [pnpm](https://pnpm.io/) as your package manager.

1. Clone the repository into your machine.
```bash
git clone https://github.com/MahendraDani/mamablog.git 
```

2. Change directory
```bash
cd mamablog
```

3. Install dependencies
```
pnpm install
```

4. Run the web server:
```
pnpm run dev
```

The website will run on `http://localhost:3000`
