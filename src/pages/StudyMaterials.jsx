import { useState } from 'react'
import Navbar from '../components/sections/Navbar'
import AnnouncementBar from '../components/sections/AnnouncementBar'
import Footer from '../components/sections/Footer'
import Button from '../components/ui/button'
import { FileText, Download, Star } from 'lucide-react'

export default function StudyMaterialsPage() {
  const [materials] = useState([
    {
      id: 1,
      title: 'Mathematics Problem Set 2024',
      author: 'Prof. John Smith',
      type: 'PDF',
      category: 'Mathematics',
      downloads: 3420,
      rating: 4.9,
      price: 299,
    },
    {
      id: 2,
      title: 'Physics Lab Notes',
      author: 'Dr. Sarah Johnson',
      type: 'PDF',
      category: 'Physics',
      downloads: 2150,
      rating: 4.8,
      price: 199,
    },
    {
      id: 3,
      title: 'Chemistry Study Guide',
      author: 'Prof. Michael Chen',
      type: 'eBook',
      category: 'Chemistry',
      downloads: 1890,
      rating: 4.7,
      price: 399,
    },
  ])

  return (
    <main className="bg-background">
      <AnnouncementBar />
      <Navbar active="/study-materials" />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Study Materials
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive study materials created by expert instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <div
              key={material.id}
              className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {material.type}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{material.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">By {material.author}</p>

              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  <span className="text-sm font-semibold">{material.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Download className="w-4 h-4" />
                  {material.downloads}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">₹{material.price}</span>
                <Button size="sm">Download</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
