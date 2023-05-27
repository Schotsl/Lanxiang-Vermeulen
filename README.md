# Lanxiang Vermeulen

This is the source code for the [Lanxiang Vermeulen's Portfolio](https://lxframes.nl/), a [Next.js](https://nextjs.org/) project designed by Lanxiang Vermeulen and developed by [Sjors van Holst](https://sjorsvanholst.nl/)! The project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The portfolio showcases the work and achievements of Lanxiang Vermeulen.

## Setup and Development

This project uses PNPM for package management. To get started, first install PNPM globally (if you haven't already):

```bash
npm install -g pnpm
```

Then install the dependencies:

```bash
pnpm install
```

To run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

The project uses [Decap CMS](https://decapcms.org/) to manage content, and [next/font](https://nextjs.org/docs/app/api-reference/components/font) to automatically optimize and load Google Fonts.

## Code Quality

This project is set up with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). To run the linter, use:

```bash
pnpm run lint
```

To format your code, use:

```bash
pnpm run format
```

All pull requests will be automatically checked by GitHub Actions for linting and formatting issues.

## Deployment

The portfolio is hosted on [Vercel](https://vercel.com/). Every push to the main branch will trigger an automatic deployment.
