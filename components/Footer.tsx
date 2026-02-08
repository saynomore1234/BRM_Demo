import Container from './Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-auto">
      <Container>
        <div className="py-8 text-center text-slate-600 text-sm">
          <p>&copy; {currentYear} Project Demo</p>
        </div>
      </Container>
    </footer>
  )
}

