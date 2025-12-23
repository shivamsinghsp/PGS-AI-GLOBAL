import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-grid opacity-30" />
      
      <div className="relative section-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="font-orbitron font-bold text-background text-lg">P</span>
              </div>
              <span className="font-orbitron font-bold text-xl">
                <span className="text-foreground">PGS</span>
                <span className="text-gradient-gold ml-1">AI</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              From enterprises to government departments, we deliver content automation systems that ensure accuracy, efficiency, and consistency at scale.
            </p>
          </motion.div>

          {/* Short Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-orbitron font-semibold text-foreground mb-6 text-sm tracking-wider">
              SHORT LINKS
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About', href: '#about' },
                { name: 'Team', href: '#about' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-orbitron font-semibold text-foreground mb-6 text-sm tracking-wider">
              HELP LINKS
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '#' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-orbitron font-semibold text-foreground mb-6 text-sm tracking-wider">
              CONTACT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:info@mypgsAI.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@mypgsAI.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+919249092795"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 92490 92795
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="line-gold mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 | All rights reserved | PGS AI
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
