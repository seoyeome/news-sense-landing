'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Zap, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const AppPreviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const screens = [
    {
      image: '/app-home.png',
      title: '홈 화면',
      description: '직관적인 인터페이스로 뉴스 학습 시작',
      badge: '시작하기'
    },
    {
      image: '/app-summary1.png',
      title: 'AI 첨삭',
      description: '작성한 요약문에 대한 즉각적인 AI 피드백',
      badge: '피드백'
    },
    {
      image: '/app-summary2.png',
      title: '문장 분석',
      description: '사실/의견 구분 및 상세 분석 제공',
      badge: '분석'
    }
  ];

  return (
    <section id="app-preview" ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(47,124,246,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(255,230,109,0.05)_0%,_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">App Preview</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            실제 앱 화면을<br />
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">미리 만나보세요</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-2xl mx-auto">
            모바일에 최적화된 직관적인 인터페이스로<br />
            누구나 쉽게 뉴스 문해력을 향상시킬 수 있습니다
          </motion.p>
        </motion.div>

        {/* App Screenshots */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16"
        >
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Phone Frame Effect */}
              <div className="relative bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl p-3 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Screen */}
                <div className="relative bg-white rounded-2xl overflow-hidden aspect-[9/19.5] shadow-inner">
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    fill
                    className="object-cover object-top"
                  />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Badge */}
                <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-primary to-primary-light rounded-full shadow-lg">
                  <span className="text-sm font-bold text-white">{screen.badge}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{screen.title}</h3>
                <p className="text-neutral-600">{screen.description}</p>
              </div>

              {/* Step Number */}
              <div className="absolute top-0 left-0 w-10 h-10 bg-secondary-yellow rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold text-neutral-900">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-8">
            모바일 앱의 주요 특징
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-1">모바일 최적화</h4>
                <p className="text-sm text-neutral-600">언제 어디서나 편리하게 학습</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-green/30 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-neutral-700" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-1">즉각적인 피드백</h4>
                <p className="text-sm text-neutral-600">AI 기반 실시간 첨삭 제공</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary-pink/30 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-neutral-700" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-1">체계적인 학습</h4>
                <p className="text-sm text-neutral-600">3단계 구조로 단계별 성장</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
