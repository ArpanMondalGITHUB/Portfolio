
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gradient"
        >
          Arpan Mondal
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="text-charcoal hover:text-bright-blue transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/Arpan_Mondal_Resume.pdf"
            download="Arpan_Mondal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            custom={navLinks.length}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
          >
            <Button variant="outline" className="border-bright-blue text-bright-blue hover:bg-bright-blue hover:text-white">
              Resume
            </Button>
          </motion.a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-background shadow-lg md:hidden"
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-charcoal hover:text-bright-blue transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/Arpan_Mondal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full" variant="default">Resume</Button>
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
