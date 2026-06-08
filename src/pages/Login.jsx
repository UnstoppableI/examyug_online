import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/sections/Navbar'
import AnnouncementBar from '../components/sections/AnnouncementBar'
import Footer from '../components/sections/Footer'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log('Login attempt:', formData)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/login" />

      <section className="min-h-[calc(100vh-300px)] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="bg-white border border-border rounded-lg p-8 md:p-10 shadow-sm">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to your ExamYug account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="pl-10 focus-visible:ring-primary"
                    required
                  />
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="pl-10 pr-10 focus-visible:ring-primary"
                    required
                  />
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-6 hover:scale-105 transition-transform duration-300 disabled:opacity-50"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button type="button" variant="outline" className="hover:bg-primary/10 transition-colors duration-300">
                Google
              </Button>
              <Button type="button" variant="outline" className="hover:bg-primary/10 transition-colors duration-300">
                GitHub
              </Button>
            </div>

            <p className="text-center text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link
                to="/signup"
                className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { icon: '📚', label: 'Learn' },
              { icon: '🏆', label: 'Achieve' },
              { icon: '💼', label: 'Succeed' },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="text-sm text-muted-foreground">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
