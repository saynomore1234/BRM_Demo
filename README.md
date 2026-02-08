# Project Demo

Multi-page website built with Next.js App Router, TypeScript, and Tailwind CSS. The structure is set up to scale as new pages and features are added.

## Folder Structure

```
project-demo/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page route
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with Header and Footer
│   └── page.tsx              # Homepage route
├── components/
│   ├── Container.tsx         # Reusable container component for consistent spacing
│   ├── Footer.tsx            # Site footer component
│   └── Header.tsx            # Site header component
├── .gitignore
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration for Tailwind
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

The `app/` directory follows Next.js App Router conventions - each folder becomes a route. Reusable components live in `components/`, and global styles are in `app/globals.css`.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then start the dev server:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Production Build

To create a production build:

```bash
npm run build
```

Run the production server locally:

```bash
npm start
```

## Deployment

I've set this up to deploy easily on Vercel since it works well with Next.js:

1. Push your code to GitHub, GitLab, or Bitbucket.

2. Sign in to [vercel.com](https://vercel.com) with your Git provider.

3. Click "New Project" and import the repository.

4. Vercel should auto-detect Next.js and set up the build. Just click "Deploy".

5. The site will be live in a couple minutes, and it'll auto-deploy on future pushes to your main branch.

You can also deploy to other platforms - just make sure to run `npm run build` and serve the `.next` output directory.

## Adding New Pages

Adding pages follows a consistent pattern. For example, to create a `/contact` page:

1. Create a new folder: `app/contact/`
2. Add a `page.tsx` file inside it
3. Wrap your content with the Container component to match the existing layout

Here's what `app/contact/page.tsx` would look like:

```tsx
import Container from '@/components/Container'

export default function Contact() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <p>Your page content here.</p>
      </div>
    </Container>
  )
}
```

That's it - the route is automatically available at `/contact`. Link to it with Next.js Link: `<Link href="/contact">Contact</Link>`.
