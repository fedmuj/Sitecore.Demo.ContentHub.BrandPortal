# Content Hub Brand Portal

This demo is a hub of all your branded content assets. It's the one place to distribute and control branded digital content.
The assets are stored and managed in Content Hub (make sure to use the latest 'PLAY! Summit' Content Hub template) and front-end is a custom Next.js application.

![Brand Portal Home Page](/docs/images/home-page.JPG)

## Getting Started

First, copy `.env.template` file to `.env` and update the environment variables.

If you want to query your Content Hub instance directly - set the following variables:

- CH_PREVIEW_API_KEY
- CH_PREVIEW_API_URL

If you want to use Edge - just set the CH_DELIVERY_API_KEY and also set PREVIEW_MODE_ENABLED to **false**.

## To run the development server:

Install the Node modules and run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

The easiest way to deploy this demo is to use [Sitecore Demo Portal](https://portal.sitecoredemo.com/). All you need is a Content Hub instance.
