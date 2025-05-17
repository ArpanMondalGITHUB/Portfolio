
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useInView, containerVariants, itemVariants } from "@/lib/animations";

const ContactItem = ({ 
  icon: Icon, 
  title, 
  value, 
  link 
}: { 
  icon: any; 
  title: string; 
  value: string; 
  link?: string;
}) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex items-center space-x-3 mb-6 group"
    >
      <div className="w-10 h-10 rounded-full bg-bright-blue/10 flex items-center justify-center group-hover:bg-bright-blue/20 transition-colors">
        <Icon className="h-5 w-5 text-bright-blue" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-medium hover:text-bright-blue transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="font-medium">{value}</p>
        )}
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const { ref, isInView } = useInView();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real scenario, this would send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20">
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
            Get in <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="h-1 w-24 bg-gradient-primary mx-auto mb-12 rounded-full"
          ></motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out to me anytime. I'm always open to discussing new projects, opportunities, or partnerships.
              </p>

              <div className="space-y-4">
                <ContactItem 
                  icon={Mail} 
                  title="Email" 
                  value="arpanmondal9851@gmail.com" 
                  link="mailto:arpanmondal9851@gmail.com" 
                />
                <ContactItem 
                  icon={Linkedin} 
                  title="LinkedIn" 
                  value="Arpan Mondal" 
                  link="https://www.linkedin.com/in/arpan-mondal-6933ab253/" 
                />
                <ContactItem 
                  icon={Github} 
                  title="GitHub" 
                  value="ArpanMondalGITHUB" 
                  link="https://github.com/ArpanMondalGITHUB" 
                />
                <ContactItem 
                  icon={MessageSquare} 
                  title="X (Twitter)" 
                  value="@ApMondal3" 
                  link="https://x.com/ApMondal3" 
                />
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Social Profiles</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/ArpanMondalGITHUB"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 rounded-full bg-background border border-soft-gray flex items-center justify-center hover:border-bright-blue transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/arpan-mondal-6933ab253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 rounded-full bg-background border border-soft-gray flex items-center justify-center hover:border-bright-blue transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://x.com/ApMondal3"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 rounded-full bg-background border border-soft-gray flex items-center justify-center hover:border-bright-blue transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 9-9z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="mailto:arpanmondal9851@gmail.com"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 rounded-full bg-background border border-soft-gray flex items-center justify-center hover:border-bright-blue transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-background rounded-lg p-6 border border-soft-gray shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        required 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        required 
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Subject" 
                      required 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      rows={5} 
                      required 
                      className="w-full"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="bg-gradient-primary text-white hover:opacity-90"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
