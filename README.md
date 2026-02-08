# Project Demo

A multi-page website built with Next.js App Router, TypeScript, and Tailwind CSS. The project structure is organized to make it easy to add new pages and features.

## Project Structure

```
BRM_Demo/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── Container.tsx         # Layout container component
│   ├── Footer.tsx            # Footer component
│   └── Header.tsx            # Header component
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

Routes are defined by folders in the `app/` directory. Shared components are in `components/`, and global CSS is in `app/globals.css`.

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

The easiest way to deploy is using Vercel:

1. Push your repository to GitHub, GitLab, or Bitbucket.

2. Go to [vercel.com](https://vercel.com) and sign in with your Git account.

3. Import your repository as a new project.

4. Vercel will detect Next.js automatically. Click deploy.

5. Your site will be live shortly. Future pushes to the main branch will trigger automatic deployments.

For other hosting platforms, build the project with `npm run build` and deploy the `.next` folder along with the necessary Next.js files.

## Adding Pages

To add a new page, create a folder in `app/` with a `page.tsx` file. For example, to create a contact page:

1. Create `app/contact/`
2. Add `app/contact/page.tsx` with your page component
3. Use the Container component to maintain consistent layout

Example `app/contact/page.tsx`:

```tsx
import Container from '@/components/Container'

export default function Contact() {
  return (
    <Container>
      <div className="pt-24 pb-20">
        <h1 className="text-5xl font-bold mb-8">Contact</h1>
        <p>Page content goes here.</p>
      </div>
    </Container>
  )
}
```

The route `/contact` will be available automatically. Use Next.js Link to navigate: `<Link href="/contact">Contact</Link>`.
