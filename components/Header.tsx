import Link from 'next/link'
import Container from '@/components/Container'

export default function Header() {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <Container>
        <nav className="flex items-center h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-neutral-900 hover:text-neutral-600 transition-colors duration-200"
          >
            Project Demo
          </Link>
        </nav>
      </Container>
    </header>
  )
}

