'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AppPreviewSection from '@/components/sections/AppPreviewSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TeamSection from '@/components/sections/TeamSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <AppPreviewSection />
        <FeaturesSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}
