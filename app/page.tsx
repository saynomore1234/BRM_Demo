import Link from 'next/link'
import Container from '@/components/Container'

export default function Home() {
  return (
    <>
      <Container>
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-6xl font-bold mb-6 text-neutral-900 tracking-tight">
            Project Demo
          </h1>
          <p className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Multi-page website built with Next.js App Router, TypeScript, and Tailwind CSS.
          </p>
          <Link
            href="/about"
            className="inline-block bg-neutral-900 text-white px-10 py-4 rounded-lg hover:bg-neutral-800 transition-all duration-200 font-medium text-base"
          >
            Learn More
          </Link>
        </section>
      </Container>

      <Container>
        <section className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 border border-neutral-200 rounded-lg bg-white hover:border-neutral-300 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900">Component-Based</h2>
              <p className="text-neutral-600 leading-relaxed">
                Reusable components organized in a way that makes it easy to maintain and extend functionality.
              </p>
            </div>
            <div className="p-10 border border-neutral-200 rounded-lg bg-white hover:border-neutral-300 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900">Fully Responsive</h2>
              <p className="text-neutral-600 leading-relaxed">
                Works seamlessly across different screen sizes with a mobile-first responsive design approach.
              </p>
            </div>
            <div className="p-10 border border-neutral-200 rounded-lg bg-white hover:border-neutral-300 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 text-neutral-900">Scalable Architecture</h2>
              <p className="text-neutral-600 leading-relaxed">
                Folder structure designed to grow - adding new pages and features is straightforward.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

