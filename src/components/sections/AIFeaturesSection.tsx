import { motion } from 'framer-motion';
import { Brain, BarChart3, ClipboardCheck, BookOpen, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Personalized learning paths that adapt to each student\'s pace and style using advanced machine learning algorithms.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Comprehensive dashboards providing actionable insights into student progress, learning gaps, and performance metrics.',
  },
  {
    icon: ClipboardCheck,
    title: 'Smart Assessment',
    description: 'Intelligent testing system with adaptive difficulty, instant feedback, and detailed performance analysis.',
  },
  {
    icon: BookOpen,
    title: 'Curriculum Alignment',
    description: 'Content aligned with global standards and customizable to match local educational requirements and goals.',
  },
];

export default function AIFeaturesSection() {
  return (
    <section id="ai-features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 neural-grid opacity-30" />
      
      {/* Accent Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Applied Artificial Intelligence
            </span>
          </motion.div>

          <h2 className="section-title">
            <span className="text-foreground">Applied Artificial</span>
            <span className="text-gradient-gold"> Intelligence (AI)</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter mb-4">
            Where Cutting-Edge AI Meets Real-World Impact
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl glass-card">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-lg font-orbitron font-semibold text-foreground">
              Powerful Features Built for Success
            </span>
          </div>
          <p className="text-muted-foreground mt-4 font-inter">
            Everything you need to revolutionize your learning experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card-hover p-8 h-full relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:shadow-glow-gold transition-shadow duration-500">
                      <feature.icon className="w-7 h-7 text-background" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-inter">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
