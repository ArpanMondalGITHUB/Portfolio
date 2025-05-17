
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView, containerVariants, itemVariants } from "@/lib/animations";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Help Now India",
    description: "A platform to connect people in need with volunteer helpers across India, facilitating community support and assistance during emergencies.",
    image: "https://raw.githubusercontent.com/ArpanMondalGITHUB/Help_now_India/main/src/backgrounds/image1.jpg",
    tags: ["React", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/ArpanMondalGITHUB/Help_now_India",
    liveLink: "https://help-now-india.vercel.app/"
  },
  {
    id: 2,
    title: "Influencer Insight Gatherer AI",
    description: "An AI-powered tool for gathering insights from social media influencers to analyze engagement patterns and audience behaviors.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2874&auto=format&fit=crop",
    tags: ["Next.js", "AI", "Data Analysis"],
    githubLink: "https://github.com/ArpanMondalGITHUB/influencer-insight-gatherer-ai-af22ccb1"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, animated portfolio website showcasing my work as a developer with smooth transitions and responsive design.",
    image: "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?q=80&w=2874&auto=format&fit=crop",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    githubLink: "https://github.com/ArpanMondalGITHUB",
    liveLink: "https://lovable.dev/projects/9ba5d051-4a3c-4d0d-bb39-a1842e2160f5"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div 
      className="rounded-xl overflow-hidden bg-background border border-soft-gray shadow-lg hover:shadow-xl transition-all duration-300"
      variants={itemVariants}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-background/80 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm h-16 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          <Button asChild size="sm" variant="outline" className="border-bright-blue text-bright-blue hover:bg-bright-blue hover:text-white">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
          
          {project.liveLink && (
            <Button asChild size="sm" className="bg-gradient-primary text-white hover:opacity-90">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-center mb-2"
          >
            My <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="h-1 w-24 bg-gradient-primary mx-auto mb-12 rounded-full"
          ></motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <Button asChild className="bg-gradient-primary text-white hover:opacity-90">
              <a href="https://github.com/ArpanMondalGITHUB" target="_blank" rel="noopener noreferrer">
                View More Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
