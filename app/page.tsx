import Link from 'next/link'
import Container from '@/components/Container'

export default function Home() {
  return (
    <Container>
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold mb-5 text-slate-900">Project Demo</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          A straightforward multi-page website showcasing Next.js App Router with TypeScript and Tailwind CSS.
        </p>
        <Link
          href="/about"
          className="inline-block bg-slate-800 text-white px-8 py-3 rounded-md hover:bg-slate-700 transition-colors font-medium"
        >
          View Details
        </Link>
      </section>

      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border border-slate-200 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-slate-800">Modular Structure</h2>
            <p className="text-slate-600 leading-relaxed">
              Organized component architecture that separates concerns and promotes reusability across pages.
            </p>
          </div>
          <div className="p-8 border border-slate-200 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-slate-800">Responsive Design</h2>
            <p className="text-slate-600 leading-relaxed">
              Mobile-first approach ensuring consistent experience from phones to desktop screens.
            </p>
          </div>
          <div className="p-8 border border-slate-200 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-slate-800">Easy Expansion</h2>
            <p className="text-slate-600 leading-relaxed">
              Clear patterns for adding new routes and components without restructuring existing code.
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}

