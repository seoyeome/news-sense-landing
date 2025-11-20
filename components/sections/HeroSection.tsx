'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, BookOpen, Brain } from 'lucide-react';

const HeroSection = () => {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary-pink/10 pt-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 w-20 h-20 bg-secondary-yellow/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
          className="absolute top-40 right-20 w-32 h-32 bg-secondary-green/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-secondary-pink/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }}
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-secondary-purple/30 rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">AI 기반 뉴스 문해력 교육</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                뉴스를 제대로
              </span>
              <br />
              <span className="text-neutral-900">읽고 판단하는</span>
              <br />
              <span className="text-neutral-900">능력을 키워보세요</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-neutral-600 mb-8 leading-relaxed"
            >
              AI가 제공하는 즉각적인 피드백으로<br className="hidden sm:block" />
              사실과 의견을 구분하는 <strong className="text-primary">생각의 힘</strong>을 키워보세요
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                서비스 알아보기
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary/5 transform hover:scale-105 transition-all"
              >
                <Brain className="w-5 h-5 mr-2" />
                주요 기능 보기
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">AI</div>
                <div className="text-sm text-neutral-600">기반 분석</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">3단계</div>
                <div className="text-sm text-neutral-600">학습 구조</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">즉각</div>
                <div className="text-sm text-neutral-600">피드백</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Character */}
              <motion.div
                animate={floatingAnimation}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary rounded-3xl rotate-6 flex items-center justify-center shadow-2xl"
              >
                <div className="text-8xl">📰</div>
              </motion.div>

              {/* Floating Sticky Notes */}
              <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.3 } }}
                className="absolute top-10 right-10 bg-secondary-yellow p-4 rounded-lg shadow-lg transform rotate-6"
              >
                <div className="text-xs font-semibold text-neutral-700">사실 ✓</div>
              </motion.div>

              <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.6 } }}
                className="absolute bottom-20 left-10 bg-secondary-green p-4 rounded-lg shadow-lg transform -rotate-6"
              >
                <div className="text-xs font-semibold text-neutral-700">의견 ✓</div>
              </motion.div>

              <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.9 } }}
                className="absolute top-1/3 left-5 bg-secondary-pink p-4 rounded-lg shadow-lg transform rotate-12"
              >
                <div className="text-xs font-semibold text-neutral-700">분석 중...</div>
              </motion.div>

              <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.2 } }}
                className="absolute bottom-10 right-20 bg-secondary-purple p-4 rounded-lg shadow-lg transform -rotate-3"
              >
                <div className="text-xs font-semibold text-neutral-700">첨삭 완료!</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-neutral-600 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium mb-2">스크롤하여 더 알아보기</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
