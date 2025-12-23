import { motion } from 'framer-motion';
import { GraduationCap, School, Users2, Cpu, BookOpen, MapPin } from 'lucide-react';

const countries = [
  'India', 'Mexico', 'United States (USA)', 'Canada', 'Italy', 'Ghana', 'Oman',
  'Bahrain', 'Sri Lanka', 'Malaysia', 'United Kingdom (UK)', 'Caribbean Islands',
  'South Africa', 'United Arab Emirates (Dubai)'
];

const products = [
  {
    icon: School,
    title: 'PGS AI Courses for Schools and Colleges',
    description: 'Age-appropriate, curriculum-aligned AI courses for K-12 and higher education—covering AI fundamentals, ML, CV, NLP, and real-world applications.',
  },
  {
    icon: Cpu,
    title: 'PGS AI Labs for Practical Learning Experiences',
    description: 'Ready-to-deploy AI lab infrastructure with hardware, software, and curated AI challenges—enabling students to build hands-on projects in a guided environment.',
  },
  {
    icon: Users2,
    title: 'Customised PGS AI Courses for Domain and Upskilling',
    description: 'Designed for colleges and enterprises—custom programs addressing AI applications in healthcare, law, education, agriculture, and more.',
  },
];

const programs = [
  {
    title: 'K–12 AI Programs',
    subtitle: 'Inspiring Young Innovators from Grade 1 to 12',
    items: [
      'AI basics, Generative AI, and real-life applications',
      'Interactive tools for Math, Science, and Languages',
      'Block-based and Python coding',
      'AI-integrated project-based learning',
    ],
    outcome: 'Future-ready students with creativity, critical thinking, and problem-solving skills.',
  },
  {
    title: 'Higher Education AI Skill Development',
    subtitle: '',
    items: [
      'Foundations of AI and Machine Learning',
      'AI in Business, Marketing, and Analytics',
      'Generative AI, Chatbots, and LLM tools',
      'Capstone projects',
      'Internships and placement support',
    ],
    outcome: 'AI-skilled graduates ready for high-growth careers.',
  },
  {
    title: 'AI for Teacher Training',
    subtitle: '',
    items: [
      'AI Basics for Educators',
      'AI Tools to Enhance Classroom Learning',
      'Ethics, Bias, and Responsible AI',
      'Hands-on practice',
      'Subject-integrated AI lesson planning',
    ],
    outcome: 'AI-empowered teachers.',
  },
  {
    title: 'PGS AI Lab – Next-Gen Robotics & AI Innovation Hub',
    subtitle: '',
    items: [
      'AI Dog Robot',
      'Self-Driving Car Kits',
      'Modular Robot Kits',
      'Generative AI Stations',
      'Vision & Edge AI Tools',
      'Real-World Application Projects',
    ],
    outcome: 'Hands-on innovation hub.',
  },
  {
    title: 'PGS AI Textbooks for Grades 1–12',
    subtitle: '',
    items: [
      'Interactive stories and activities',
      'AI, ML, NLP, Robotics explained simply',
      'Aligned with NCERT, CBSE, NEP',
    ],
    outcome: 'Complete AI learning journey.',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 neural-grid opacity-30" />
      
      {/* Accent Glows */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            <span className="text-foreground">Education</span>
            <span className="text-gradient-gold"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            PGS AI supports educational transformation across K-12, higher education, and skill development ecosystems.
          </p>
        </motion.div>

        {/* Countries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="font-orbitron text-xl font-bold text-foreground">
                Global Presence
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {countries.map((country, index) => (
                <motion.span
                  key={country}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full text-sm font-inter bg-secondary text-foreground border border-border hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                >
                  {country}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="font-orbitron text-2xl font-bold text-center text-foreground mb-12">
            Our <span className="text-gradient-gold">Learning Products</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="glass-card-hover p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:shadow-glow-gold transition-shadow duration-300">
                    <product.icon className="w-7 h-7 text-background" />
                  </div>
                  <h4 className="font-orbitron text-lg font-bold text-foreground mb-4">
                    {product.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-inter">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programs */}
        <div className="line-gold mb-16" />
        
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-orbitron text-2xl font-bold text-center text-foreground mb-12"
        >
          <span className="text-gradient-gold">Programs</span> & Curriculum
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card-hover p-6 ${index === programs.length - 1 && programs.length % 3 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h4 className="font-orbitron text-base font-bold text-foreground">
                  {program.title}
                </h4>
              </div>
              {program.subtitle && (
                <p className="text-sm text-primary mb-4 font-inter">{program.subtitle}</p>
              )}
              <ul className="space-y-2 mb-4">
                {program.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground font-inter">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-inter">
                  <span className="text-primary font-semibold">Outcome:</span>{' '}
                  <span className="text-muted-foreground">{program.outcome}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
