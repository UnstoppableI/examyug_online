import { MessageSquare, Users, Globe } from 'lucide-react';
import Button  from '@/components/ui/button';


export default function Community() {
  return (
    <section className="py-5 bg-white">
      <div className="container-lg d-d-flex justify-content-center px-3">
        <div className="text-center mb-5">
          <h2 className="fs-3 md:display-5 fw-bold text-foreground mb-4">Join Our Community</h2>
          <p className="fs-6 text-muted-foreground">
            Connect with thousands of learners worldwide
          </p>
        </div>

        <div className="row md:row-cols-3 gap-4">
          <div className="bg-background rounded-2 p-8 text-center">
            <div className="inline-d-block p-3 bg-primary bg-opacity-10 rounded-2 mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="fw-bold text-white mb-2 fs-6">Discussion Forums</h3>
            <p className="text-foreground mb-4">
              Ask questions, share insights, and learn from peer discussions on any topic.
            </p>
            <Button variant="outline">Join Forums</Button>
          </div>

          <div className="bg-background rounded-2 p-8 text-center">
            <div className="inline-d-block p-3 bg-accent bg-opacity-10 rounded-2 mb-4">
              <Users className="w-6 h-6 text-yellow-300" />
            </div>
            <h3 className="fw-bold text-foreground mb-2 fs-6">Study Groups</h3>
            <p className="text-muted-foreground mb-4">
              Form or join study groups to collaborate and prepare together with peers.
            </p>
            <Button variant="outline">Find Groups</Button>
          </div>

          <div className="bg-background rounded-2 p-8 text-center">
            <div className="inline-d-block p-3 bg-primary bg-opacity-10 rounded-2 mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="fw-bold text-foreground mb-2 fs-6">Global Network</h3>
            <p className="text-muted-foreground mb-4">
              Connect with students from around the world and expand your learning horizons.
            </p>
            <Button variant="outline">Explore Network</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
