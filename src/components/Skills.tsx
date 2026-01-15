
import { motion } from "framer-motion";
import { useInView, containerVariants, itemVariants } from "@/lib/animations";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "FasApi", level: 80 },
      { name: "MongoDB", level: 65 },
      { name: "RESTful APIs", level: 80 },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "Android Development", level: 75 },
      { name: "React Native", level: 70 },
      { name: "Kotlin", level: 65 },
      { name: "Mobile UI Design", level: 70 },
      { name: "App Deployment", level: 75 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Docker & VM", level: 65 },
      { name: "Responsive Design", level: 85 },
      { name: "UI/UX Principles", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const { ref, isInView } = useInView();

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-soft-gray rounded-full overflow-hidden" ref={ref}>
        <motion.div
          className="h-full bg-gradient-primary"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-soft-blue-gray/30">
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
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-primary mx-auto mb-12 rounded-full"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="bg-background rounded-lg p-6 border border-soft-gray shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-6 text-gradient">
                  {category.name}
                </h3>
                <div>
                  {category.skills.map((skill) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
