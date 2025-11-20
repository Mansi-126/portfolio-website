import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Server, 
  Database, 
  Terminal,
  Globe,
  Menu,
  X,
  Rocket,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBg from "@assets/generated_images/abstract_digital_blue_waves_technology_background.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Mansi Gangani";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Typing animation
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(typingInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-script text-4xl text-foreground hover:text-primary transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Mansi
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-card border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-lg font-medium text-left py-2 border-b border-white/5"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 border-primary/30 text-primary bg-primary/10 backdrop-blur-sm">
              Available for Hire
            </Badge>
            {/* Adjusted font size to ensure single line */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-cyan-400">{text}</span>
              <span className="animate-pulse text-primary">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              A passionate <span className="text-foreground font-semibold">Full Stack Developer</span> building efficient and scalable web applications with modern technologies.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button size="lg" className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 text-background border-0 shadow-[0_0_20px_rgba(6,182,212,0.3)]" onClick={() => scrollToSection('projects')}>
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-white/10 hover:bg-white/5 hover:text-primary hover:border-primary/50" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6">
              <SocialLink href="https://github.com/Mansi-126" icon={<Github />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/mansi-gangani-394334293/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="https://x.com/Mansi_126?t=gWQb5OJa3N6f43P31EfWag&s=09" icon={<Twitter />} label="Twitter" />
              <SocialLink href="mailto:mansigangani126@gamil.com" icon={<Mail />} label="Email" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                <span className="w-12 h-1 bg-gradient-to-r from-slate-400 to-cyan-400 rounded-full"></span>
                About Me
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I am an aspiring Full Stack Web Developer with a strong passion for building efficient and user-friendly web applications. Experienced with both front-end and back-end development using modern frameworks and tools.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Quick to adapt, eager to take on challenges, and committed to continuous improvement through real-world project experience and problem-solving. Currently pursuing my Bachelor of Engineering in Information Technology.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoItem icon={<MapPin />} text="Bhavnagar, Gujarat" />
                <InfoItem icon={<Mail />} text="mansigangani126@gamil.com" />
                <InfoItem icon={<Phone />} text="+91 74035 18888" />
                <InfoItem icon={<Globe />} text="Open to Remote" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-500/10 to-cyan-500/10 blur-3xl rounded-full" />
              <div className="relative bg-card/50 border border-white/5 rounded-2xl p-8 shadow-2xl hover:border-primary/30 transition-colors duration-500">
                <h3 className="text-xl font-bold mb-4 text-primary">Education</h3>
                <div className="space-y-6">
                  <EducationItem 
                    year="Pursuing" 
                    degree="B.E. Information Technology" 
                    school="Shantilal Shah Engineering College (GTU)"
                    grade="CGPA: 8.35"
                  />
                  <EducationItem 
                    year="2022" 
                    degree="Class 12th (GSEB)" 
                    school="Shree Swaminarayan Gurukul, Sardarnagar"
                  />
                  <EducationItem 
                    year="2020" 
                    degree="Class 10th (SSC)" 
                    school="Shree Swaminarayan Gurukul, Sardarnagar"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My technical toolkit includes a wide range of languages, frameworks, and tools for full-stack development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Code className="w-8 h-8 text-cyan-400" />} 
              title="Frontend" 
              skills={["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Redux"]} 
            />
            <SkillCard 
              icon={<Server className="w-8 h-8 text-slate-400" />} 
              title="Backend" 
              skills={["Node.js", "Express.js", "RESTful APIs"]} 
            />
            <SkillCard 
              icon={<Database className="w-8 h-8 text-blue-400" />} 
              title="Database" 
              skills={["MongoDB", "Mongoose"]} 
            />
            <SkillCard 
              icon={<Terminal className="w-8 h-8 text-gray-400" />} 
              title="Tools & Others" 
              skills={["Git & GitHub", "VS Code", "Postman", "Cursor", "Problem Solving"]} 
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-500 to-cyan-500 opacity-20"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 md:w-1/2 md:ml-auto pl-8 md:pl-12 pb-12"
            >
              {/* Dot */}
              <div className="absolute left-0 md:-left-3 top-0 w-6 h-6 bg-background rounded-full border-4 border-cyan-500 shadow-[0_0_10px_theme(colors.cyan.500)]"></div>
              
              <Card className="bg-card/50 backdrop-blur-md border-white/5 hover:border-cyan-500/30 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold">Backend Developer Intern</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Ongoing</Badge>
                  </div>
                  <CardDescription className="text-foreground/90 font-medium text-base">99partners Pvt Limited</CardDescription>
                  <p className="text-sm text-muted-foreground">5 Months</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground text-sm">
                    <li>Spearheaded backend development for two live production projects using Node.js/Express.js.</li>
                    <li>Designed and implemented robust RESTful APIs with seamless MongoDB integration.</li>
                    <li>Led research and integration of ONDC (Open Network for Digital Commerce) API for decentralized e-commerce capabilities.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="InProfile"
              description="A modern portfolio builder web application allowing users to effortlessly create and manage professional portfolios."
              tags={["React.js", "Node.js", "Express", "MongoDB", "CSS"]}
              link="https://inprofile.co"
              features={[
                "Customizable sections (About, Projects, Skills)",
                "Real-time previews & mobile-responsive templates",
                "User authentication & unique portfolio URLs"
              ]}
            />
            <ProjectCard 
              title="Placement Portal"
              description="A job portal platform enabling students to store academic details and companies to manage job openings."
              tags={["React.js", "Node.js", "Express", "MongoDB"]}
              link="#"
              features={[
                "Company registration & job posting features",
                "Role-based system (Student, Company, Admin)",
                "Secure authentication & separate dashboards"
              ]}
            />
          </div>

          <div className="mt-16 p-8 bg-card/30 border border-white/5 rounded-2xl text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Achievements</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="p-4 bg-background/50 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                <span className="block text-2xl mb-2">🏆</span>
                1st Place in District Level Hackathon (Bhavnagar)
              </div>
              <div className="p-4 bg-background/50 rounded-xl border border-white/5 hover:border-slate-500/30 transition-colors">
                <span className="block text-2xl mb-2">💻</span>
                Participant in Milople Hackathon
              </div>
              <div className="p-4 bg-background/50 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                <span className="block text-2xl mb-2">🚀</span>
                Built Full Stack Projects with Real-world Tech
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated Layout */}
      <section id="contact" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/70 font-semibold">CALL ME DIRECTLY</p>
                <a href="tel:+917403518888" className="block text-3xl font-bold hover:text-primary transition-colors">
                  +91 74035 18888
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/70 font-semibold">DROP ME AN EMAIL</p>
                <a href="mailto:mansigangani126@gamil.com" className="block text-xl font-bold hover:text-primary transition-colors break-all">
                  mansigangani126@gamil.com
                </a>
              </motion.div>
            </div>

            {/* Right Column: Action Card (Like Reference) */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
              <Card className="bg-card border-white/5 shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                
                <div className="flex flex-col items-center text-center relative z-10 space-y-6 py-4">
                  <div className="p-3 rounded-full bg-background border border-white/10 mb-2">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold">Let's build something amazing</h3>
                  
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Have a project in mind? Let's collaborate to bring your ideas to life with modern web technologies.
                  </p>
                  
                  <Button className="w-full max-w-xs h-12 text-base bg-primary hover:bg-primary/90 text-background font-semibold mt-4 group">
                    Contact us 
                  </Button>
                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-background">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Mansi Gangani. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <SocialLink href="https://github.com/Mansi-126" icon={<Github className="w-4 h-4" />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/mansi-gangani-394334293/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
            <SocialLink href="https://x.com/Mansi_126?t=gWQb5OJa3N6f43P31EfWag&s=09" icon={<Twitter className="w-4 h-4" />} label="Twitter" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-white/5 hover:border-primary/50"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function InfoItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function EducationItem({ year, degree, school, grade }: { year: string, degree: string, school: string, grade?: string }) {
  return (
    <div className="relative pl-6 border-l-2 border-primary/20 pb-1 last:pb-0">
      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_theme(colors.primary.DEFAULT)]"></div>
      <span className="text-xs font-mono text-primary mb-1 block">{year}</span>
      <h4 className="font-bold text-foreground">{degree}</h4>
      <p className="text-sm text-muted-foreground">{school}</p>
      {grade && <Badge variant="outline" className="mt-2 text-xs border-white/10">{grade}</Badge>}
    </div>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <Card className="bg-card/40 border-white/5 hover:bg-card/60 transition-colors hover:border-primary/30">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 transition-colors border border-transparent hover:border-primary/20">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ title, description, tags, link, features }: { title: string, description: string, tags: string[], link: string, features: string[] }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card className="h-full flex flex-col bg-card/50 backdrop-blur-md border-white/10 hover:border-primary/50 transition-all overflow-hidden group">
        <div className="h-1 bg-gradient-to-r from-slate-400 via-blue-400 to-cyan-400 w-0 group-hover:w-full transition-all duration-500" />
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{title}</CardTitle>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <CardDescription className="text-base mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge key={tag} variant="outline" className="border-white/10 text-xs group-hover:border-primary/30">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
