import { Zap, Users, BookOpen, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Engaging video lectures, quizzes, and assignments for active learning'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Learn alongside peers, discuss concepts, and share experiences'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Materials',
      description: 'Complete study resources, notes, and practice problems for every topic'
    },
    {
      icon: Award,
      title: 'Expert Certification',
      description: 'Earn recognized certificates upon course completion'
    }
  ];

  return (
    <section id="about-us" className="py-5 bg-white">
      <div className="container-lg d-d-flex justify-content-center px-3">
        <div className="text-center mb-5">
          <h2 className="fs-3 md:display-5 fw-bold text-foreground mb-4">Why Choose ExamYug24?</h2>
          <p className="fs-6 text-muted-foreground">
            We provide everything you need for academic success
          </p>
        </div>

        <div className="row md:row-cols-2 lg:row-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-d-block p-3 bg-accent bg-opacity-10 rounded-2 mb-4">
                  <Icon className="w-6 h-6 text-yellow-300" />
                </div>
                <h3 className="fw-bold text-foreground mb-2">{feature.title}</h3>
                <p className="small text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
