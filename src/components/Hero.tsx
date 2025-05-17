
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-bright-blue font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi there, I'm
            </motion.p>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Arpan Mondal
            </motion.h1>
            <motion.h2 
              className="text-2xl lg:text-3xl text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Web Developer & Android Developer
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Creating elegant, responsive, and user-friendly applications with modern technologies.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button asChild className="bg-gradient-primary text-white hover:opacity-90 px-6 py-6">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-bright-blue text-bright-blue hover:bg-bright-blue hover:text-white px-6 py-6">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <img 
                src="/lovable-uploads/52eaaa89-5ae2-483b-8304-4bba45254f16.png"
                alt="Arpan Mondal" 
                className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-white z-10 relative"
              />
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 filter blur-xl -z-10 scale-90"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-3/4 bg-bright-blue opacity-20 rounded-full filter blur-2xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
