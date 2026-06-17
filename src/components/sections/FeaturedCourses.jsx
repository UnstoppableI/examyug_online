'use client';

import { useEffect, useState } from 'react';
import { CourseCard } from '../components/CourseCard';
import Button from '../ui/button';

export default function FeaturedCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          'https://examyug-dashboard-backend.onrender.com/api/v1/course/view-all-courses?page=1&limit=50'
        );
        const data = await response.json();
        console.log('Courses API Response:', data);

        if (data?.success) {
          // Show only featured/display courses
          const featuredCourses = (data.allCourses || []).filter(
            (course) =>
              course.featured?.toLowerCase() === 'yes' ||
              course.courseDisplay?.toLowerCase() === 'yes'
          );
          setCourses(featuredCourses);
        }
      } catch (error) {
        console.error('Error fetching featured courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const categories = [
    'All',
    ...Array.from(
      new Set(
        courses
          .map((course) => course.category?.categoryTitle)
          .filter(Boolean)
      )
    ),
  ];

  const displayedCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((course) => course.category?.categoryTitle === selectedCategory);

  if (loading) {
    return (
      <section id="courses" className="py-5 bg-background">
        <div className="container-lg d-d-flex justify-content-center px-3 text-center">
          <p className="fs-6 text-muted-foreground">
            Loading featured courses...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-5 bg-background">
      <div className="container-lg d-d-flex justify-content-center px-3">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fs-3 md:display-5 fw-bold text-foreground mb-4">
            Featured Courses
          </h2>
          <p className="fs-6 text-muted-foreground">
            Choose from our wide range of expertly curated courses
          </p>
        </div>

        {/* Category Filter */}
        <div className="d-flex d-flex-wrap gap-3 justify-content-center mb-5">
          {categories.map((category) => (
            <Button
              key={String(category)}
              onClick={() => setSelectedCategory(String(category))}
              variant={selectedCategory === category ? 'destructive' : 'outline'}
              className={selectedCategory === category ? 'hover:bg-primary/90' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        {displayedCourses.length > 0 ? (
          <div className="row md:row-cols-2 lg:row-cols-3 gap-4 mb-5">
            {displayedCourses.slice(0, 6).map((course) => (
              <CourseCard
                key={course._id}
                title={course.courseTitle}
                instructor={course.category?.categoryTitle || 'Examyug'}
                students={0}
                rating={5}
                price={`₹${course.sellingPrice}`}
                image={course.thumbnail}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No featured courses found.</p>
          </div>
        )}

        {/* View More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => {
              window.location.href = '/courses';
            }}
          >
            View More Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
