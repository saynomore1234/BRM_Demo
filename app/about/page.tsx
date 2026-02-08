import Link from 'next/link'
import Container from '@/components/Container'

export default function About() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">About This Project</h1>
        <div className="space-y-5 text-slate-700 max-w-3xl leading-relaxed">
          <p>
            Built with Next.js 14 using the App Router. I went with this approach because it gives
            a clean file-based routing system that scales well as the project grows.
          </p>
          <p>
            TypeScript throughout for type safety and better DX. For styling, Tailwind CSS keeps
            things simple without needing separate stylesheet files for every component.
          </p>
          <p>
            The component structure separates layout elements (Header, Footer) from page content,
            so adding new pages is straightforward while keeping things consistent.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block bg-slate-600 text-white px-6 py-3 rounded-md hover:bg-slate-700 transition-colors font-medium"
          >
            Return Home
          </Link>
        </div>
      </div>
    </Container>
  )
}

