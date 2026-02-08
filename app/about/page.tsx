import Link from 'next/link'
import Container from '@/components/Container'

export default function About() {
  return (
    <Container>
      <div className="pt-24 pb-20">
        <h1 className="text-5xl font-bold mb-12 text-neutral-900">About</h1>
        <div className="space-y-6 text-neutral-700 max-w-4xl leading-relaxed text-lg">
          <p>
            This project uses Next.js 14 with the App Router. The file-based routing makes it
            really straightforward to add new pages - just create a folder and drop in a page.tsx file.
          </p>
          <p>
            I'm using TypeScript for type checking and Tailwind CSS for styling. Tailwind works
            well here since you can style components directly without jumping between files.
          </p>
          <p>
            Components are split into layout pieces (Header, Footer) and page content. This keeps
            things organized and makes it easy to maintain consistency across different pages.
          </p>
        </div>
        <div className="mt-12">
          <Link
            href="/"
            className="inline-block bg-neutral-700 text-white px-8 py-3 rounded-lg hover:bg-neutral-800 transition-colors duration-200 font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </Container>
  )
}

