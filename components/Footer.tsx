import Container from '@/components/Container'

export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="py-10 text-center">
          <p className="text-neutral-500 text-sm">
            &copy; {year} Project Demo
          </p>
        </div>
      </Container>
    </footer>
  )
}

