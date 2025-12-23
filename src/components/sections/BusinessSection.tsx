import { motion } from 'framer-motion';
import { Cloud, Code2, Bot, Users, LineChart, Server, Building2, Briefcase, Building } from 'lucide-react';

const solutions = [
  {
    icon: Cloud,
    title: 'Digital Transformation',
    description: 'Modernize your workflows, migrate to cloud platforms, and streamline operations using AI-driven automation and smart tools tailored to your business needs.',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Custom enterprise-grade applications designed for performance, security, and scalability—built to simplify complex business processes.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description: 'Integrate AI models, chatbots, predictive analytics, and intelligent automation systems to reduce manual work, improve accuracy, and enhance decision-making.',
  },
  {
    icon: Users,
    title: 'CRM Solutions',
    description: 'Implement and customize platforms like Vtiger, Salesforce, Odoo, and custom ERP systems to optimize customer engagement and business operations.',
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with dashboards, reporting tools, and predictive models to support smarter, faster decisions.',
  },
  {
    icon: Server,
    title: 'Cloud Infrastructure',
    description: 'Deploy secure, scalable cloud environments with continuous monitoring and optimization for maximum performance and reliability.',
  },
];

const businessTypes = [
  {
    icon: Building2,
    title: 'Government & Governance',
    items: ['Grievance chatbots', 'Document summarization', 'AI helpdesks', 'Dashboards'],
  },
  {
    icon: Briefcase,
    title: 'SMB Solutions',
    items: ['Customer chatbots', 'Invoice automation', 'CRM workflows'],
  },
  {
    icon: Building,
    title: 'Enterprise Solutions',
    items: ['Knowledge bots', 'RFP parsing', 'Video & image analysis', 'Predictive analytics'],
  },
];

export default function BusinessSection() {
  return (
    <section id="business" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 neural-grid opacity-20" />
      
      {/* Accent Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

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
            <span className="text-foreground">Business</span>
            <span className="text-gradient-gold"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Empowering organizations with intelligent, scalable, and future-ready digital solutions designed to accelerate growth and improve operational efficiency.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card-hover p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold/10 flex items-center justify-center mb-4 group-hover:bg-gradient-gold transition-all duration-300">
                  <solution.icon className="w-6 h-6 text-primary group-hover:text-background transition-colors" />
                </div>
                <h3 className="font-orbitron text-lg font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-inter">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="line-gold mb-12" />
          <h3 className="font-orbitron text-2xl font-bold text-center text-foreground mb-12">
            Solutions by <span className="text-gradient-gold">Industry</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {businessTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-hover p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                  <type.icon className="w-6 h-6 text-background" />
                </div>
                <h4 className="font-orbitron font-bold text-foreground">
                  {type.title}
                </h4>
              </div>
              <ul className="space-y-3">
                {type.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground font-inter">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground font-inter">
            <span className="text-foreground font-semibold">Products:</span> NeuraEdge (SLM), NeuraDesk (DLLM)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
