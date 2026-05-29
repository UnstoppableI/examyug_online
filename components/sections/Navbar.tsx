import { BookOpen, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-light border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpeg" // Path relative to public folder
            alt="Description"
            width={50}
            height={50}
            className="block"
          />
          <span className="text-xl font-bold text-foreground">ExamYug</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#offline" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
              Courses <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Data Science & Analytics</DropdownMenuItem>
              <DropdownMenuItem>Digital Marketing With AI</DropdownMenuItem>
              <DropdownMenuItem>Software Development</DropdownMenuItem>
              <DropdownMenuItem>Placement Program</DropdownMenuItem>
              <DropdownMenuItem>Banking & Finance</DropdownMenuItem>
              <DropdownMenuItem>DSA Courses</DropdownMenuItem>
              <DropdownMenuItem>Generative AI</DropdownMenuItem>
              <DropdownMenuItem>Project Garage</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#study-materials" className="text-foreground hover:text-primary transition-colors">
            Study Materials
          </a>
          <a href="#results" className="text-foreground hover:text-primary transition-colors">
            Results
          </a>
          <a href="#about-us" className="text-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#contact-us" className="text-foreground hover:text-primary transition-colors">
            Contact Us
          </a>
          <Input
            type="text"
            placeholder="Search courses..."
            className="hidden lg:block w-auto"
          />
        </div>

        {/* Auth Buttons + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden md:inline-block">Login</Button>
          <Button variant="default" className="hidden md:inline-block">Sign Up</Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md border border-border"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-light border-t border-border px-4 py-3 space-y-3">
          <a href="#offline" className="block text-foreground hover:text-primary">Home</a>
          <a href="#study-materials" className="block text-foreground hover:text-primary">Study Materials</a>
          <a href="#results" className="block text-foreground hover:text-primary">Results</a>
          <a href="#about-us" className="block text-foreground hover:text-primary">About Us</a>
          <a href="#contact-us" className="block text-foreground hover:text-primary">Contact Us</a>
          <Button variant="outline" className="w-full">Login</Button>
          <Button variant="default" className="w-full">Sign Up</Button>
        </div>
      )}
    </nav>
  );
}
