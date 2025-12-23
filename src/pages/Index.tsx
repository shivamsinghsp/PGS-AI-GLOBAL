import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AIFeaturesSection from '@/components/sections/AIFeaturesSection';
import BusinessSection from '@/components/sections/BusinessSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Index() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>PGS AI | UK-Recognised World-Class International Education Provider</title>
        <meta 
          name="description" 
          content="PGS AI is a UK-recognised world-class international education provider offering Foundation, Undergraduate, Postgraduate and Doctorate Programs with AI-powered learning." 
        />
        <meta name="keywords" content="PGS AI, AI education, international education, UK education, online learning, AI courses, machine learning, artificial intelligence" />
        <meta property="og:title" content="PGS AI | Where Cutting-Edge AI Meets Real-World Impact" />
        <meta property="og:description" content="UK-recognised world-class international education provider offering quality education across the globe." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PGS AI | AI-Powered Education" />
        <meta name="twitter:description" content="Bringing international education to every learner's home." />
        <link rel="canonical" href="https://mypgsai.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "PGS AI",
            "description": "UK-recognised world-class international education provider",
            "url": "https://mypgsai.com",
            "email": "info@mypgsAI.com",
            "telephone": "+91 92490 92795",
            "sameAs": [],
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Noise Overlay */}
        <div className="noise-overlay" />
        
        <Header />
        
        <main>
          <HeroSection />
          <AboutSection />
          <AIFeaturesSection />
          <BusinessSection />
          <EducationSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
