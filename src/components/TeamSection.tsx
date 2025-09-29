import { Card, CardContent } from "@/components/ui/card";
import Squares from './Squares';
interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Élodie Laurent",
      title: "Managing Partner",
      description: "Specializes in corporate restructuring and insolvency law with over 20 years of experience in complex business situations.",
      image: "/placeholder.jpeg"
    },
    {
      name: "Mathieu Dupont",
      title: "Partner",
      description: "Expert in business litigation and judicial proceedings, focusing on commercial disputes and corporate recovery processes.",
      image: "/placeholder2.jpeg"
    },
    {
      name: "Camille Moreau",
      title: "Senior Associate",
      description: "Concentrates on mergers and acquisitions, corporate finance, and preventive restructuring for distressed companies.",
      image: "/placeholder3.jpeg"
    }
  ];

  return (
    <section id="team" className="section-padding bg-primary relative">
      <div className=" absolute w-full h-full -z-0 opacity-15  top-0 left-0 bg-transparent">
<Squares 
speed={0.5} 
squareSize={20}
direction='diagonal' 
borderColor='#fff'
hoverFillColor='#000'
/>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8  z-[9999]">
        <div className="text-center mb-16">
          <h2 className="heading-section text-white mb-6 ">
            The Team
          </h2>
          <p className="text-body text-primary-foreground/70  max-w-3xl mx-auto">
            Our experienced legal professionals bring decades of expertise in corporate law, 
            restructuring, and business recovery to every client engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-background border-border hover-lift transition-elegant cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-accent overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.title}
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;