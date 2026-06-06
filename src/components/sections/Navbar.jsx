import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onLoginClick, active }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          ExamYug
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary">
            Home
          </Link>
          <Link to="/courses" className="text-foreground hover:text-primary">
            Courses
          </Link>
          <Link to="/study-materials" className="text-foreground hover:text-primary">
            Materials
          </Link>
          <Link to="/about-us" className="text-foreground hover:text-primary">
            About
          </Link>
          <Link to="/contact-us" className="text-foreground hover:text-primary">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-md border border-border hover:bg-accent"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sign Up
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border p-4 space-y-4">
          <Link to="/" className="block text-foreground hover:text-primary">
            Home
          </Link>
          <Link to="/courses" className="block text-foreground hover:text-primary">
            Courses
          </Link>
          <Link to="/study-materials" className="block text-foreground hover:text-primary">
            Materials
          </Link>
          <Link to="/about-us" className="block text-foreground hover:text-primary">
            About
          </Link>
          <Link to="/contact-us" className="block text-foreground hover:text-primary">
            Contact
          </Link>
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <Link to="/login" className="text-center py-2 border border-border rounded-md">
              Login
            </Link>
            <Link to="/signup" className="text-center py-2 bg-primary text-primary-foreground rounded-md">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
