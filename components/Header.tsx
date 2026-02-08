import Link from 'next/link'
import Container from '@/components/Container'

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
      <Container>
        <nav className="py-4">
          <Link href="/" className="text-2xl font-bold text-slate-800 hover:text-slate-600 transition-colors">
            Project Demo
          </Link>
        </nav>
      </Container>
    </header>
  )
}

