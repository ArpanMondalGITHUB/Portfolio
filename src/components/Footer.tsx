
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-soft-blue-gray/30 border-t border-soft-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-lg font-bold text-gradient mb-2 md:mb-0">
              Arpan Mondal
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted-foreground mb-4 md:mb-0 text-center md:text-left"
          >
            © {year} All rights reserved. Designed & Built with ❤️
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-full bg-background border border-soft-gray flex items-center justify-center hover:border-bright-blue hover:text-bright-blue transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
