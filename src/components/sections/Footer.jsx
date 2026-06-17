import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-background py-5">
      <div className="container-lg d-d-flex justify-content-center px-3">
        <div className="row row-cols-1 md:row-cols-4 gap-4 mb-5 text-light">
          <div>
            <h3 className="fs-6 fw-bold mb-4">ExamYug24</h3>
            <p className="small opacity-75">Your gateway to academic excellence</p>
          </div>
          <div>
            <h4 className="fw-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 small">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/courses" className="hover:underline">Courses</Link></li>
              <li><Link to="/about-us" className="hover:underline">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="fw-bold mb-4">Support</h4>
            <ul className="space-y-2 small">
              <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="fw-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 small">
              <li className="d-flex align-items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@examyug24.com
              </li>
              <li className="d-flex align-items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 1234-567-890
              </li>
            </ul>
          </div>
        </div>
        <div className="border-top border-background/20 pt-8 text-center small opacity-75">
          <p>&copy; 2026 ExamYug24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
