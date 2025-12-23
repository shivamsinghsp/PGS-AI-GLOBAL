import { motion } from 'framer-motion';
import { Target, Lightbulb, Globe, Award } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Quality education across the globe',
  },
  {
    icon: Award,
    title: 'UK Recognised',
    description: 'Accredited by UK universities',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge AI technology',
  },
  {
    icon: Target,
    title: 'Career Focus',
    description: 'Industry-ready programs',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 neural-grid opacity-20" />
      
      {/* Accent Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

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
            <span className="text-foreground">About</span>
            <span className="text-gradient-gold"> Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            PGS AI is a UK-recognised world-class international education provider.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - What We Do */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card-hover p-8 lg:p-10">
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-6">
                What We Do
              </h3>
              <p className="text-muted-foreground leading-relaxed font-inter">
                PGS AI is a UK-recognised world-class international education provider. PGS offers quality education across the globe – Foundation, Undergraduate, Postgraduate and Doctorate Programs as well as various professional skill programs, carrying significant value and recognition from awarding bodies and accredited universities in the UK.
              </p>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-orbitron font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card-hover p-8 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                Vision
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-inter">
              To be the foremost innovative, technologically advanced institute delivering globally recognised, affordable, flexible international education and training to career-minded students, professionals, individuals and progressive enterprises.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card-hover p-8 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                <Target className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-foreground">
                Mission
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-inter">
              Bring international education to every learner's home irrespective of the country, socioeconomic situation, career and education gaps.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
