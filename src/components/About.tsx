
import { motion } from "framer-motion";
import { containerVariants, itemVariants, useInView } from "@/lib/animations";

const About = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-soft-blue-gray/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-center mb-2"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-primary mx-auto mb-12 rounded-full"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-5 flex flex-col justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 -z-10"></div>
                <div className="relative p-6 bg-background rounded-lg border border-soft-gray shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Who am I?</h3>
                  <p className="text-muted-foreground mb-4">
                    I'm a passionate Web and Android Developer with strong problem-solving skills and experience creating elegant, responsive applications.
                  </p>
                  <p className="text-muted-foreground">
                    I enjoy taking complex problems and turning them into simple, beautiful, and intuitive solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="md:col-span-7 space-y-6"
            >
              <div className="bg-background rounded-lg p-6 border border-soft-gray shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  I've been developing websites and applications for several years, focusing on creating efficient and user-friendly experiences. My journey includes working with diverse technologies and frameworks to deliver high-quality digital solutions.
                </p>
                <p className="text-muted-foreground">
                  I'm continuously learning and exploring new technologies to enhance my skills and build better applications.
                </p>
              </div>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="bg-background p-4 rounded-lg border border-soft-gray shadow-md hover:shadow-lg transition-shadow"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="font-bold mb-2">Education</h4>
                  <p className="text-muted-foreground text-sm">
                    Computer Science background with focus on web and mobile development.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-background p-4 rounded-lg border border-soft-gray shadow-md hover:shadow-lg transition-shadow"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <h4 className="font-bold mb-2">Interests</h4>
                  <p className="text-muted-foreground text-sm">
                    AI, UI/UX design, open-source contribution, and continuous learning.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
