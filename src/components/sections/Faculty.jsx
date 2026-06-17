export default function Faculty() {

  const facultyMembers = [
    {
      name: 'Prof. John Smith',
      subject: 'Mathematics',
      bio: '20+ years of teaching experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Sarah Johnson',
      subject: 'Physics',
      bio: 'PhD from Cambridge University',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'Prof. Michael Chen',
      subject: 'Chemistry',
      bio: 'Research scientist and educator',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Emily Davis',
      subject: 'Biology',
      bio: 'Published researcher in biochemistry',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      name: 'Prof. Robert Wilson',
      subject: 'Literature',
      bio: 'English literature expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Amanda Thompson',
      subject: 'History',
      bio: 'Historian with global perspectives',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container-lg d-d-flex justify-content-center px-3">
        <div className="text-center mb-5">
          <h2 className="fs-3 md:display-5 fw-bold text-foreground mb-4">Our Faculty</h2>
          <p className="fs-6 text-muted-foreground">
            Learn from the best minds in education
          </p>
        </div>

        <div className="row md:row-cols-2 lg:row-cols-3 gap-4">
          {facultyMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-circle d-d-flex justify-content-center mb-4 object-fit-cover"
              />
              <h3 className="fw-bold text-foreground mb-1">{member.name}</h3>
              <p className="small text-primary fw-bold mb-2">{member.subject}</p>
              <p className="small text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
