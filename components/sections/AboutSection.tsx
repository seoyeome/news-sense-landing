'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    {
      icon: Target,
      title: "뉴스 읽기",
      subtitle: "Reading",
      description: "정보를 받아들이고 이해하는 기본 능력",
      color: "bg-secondary-yellow"
    },
    {
      icon: Users,
      title: "뉴스 비판",
      subtitle: "Critiquing",
      description: "뉴스의 출처, 목적, 편향성 등을 판단",
      color: "bg-secondary-green"
    },
    {
      icon: TrendingUp,
      title: "뉴스 재구성",
      subtitle: "Rewriting",
      description: "기존 정보를 새로운 관점으로 표현하고 재표현",
      color: "bg-secondary-pink"
    }
  ];

  const problemStats = [
    { value: "25.6%", label: "한국 학생의 사실/의견 구분 능력", sublabel: "(OECD 평균 47.4%)" },
    { value: "90%+", label: "교사가 느끼는 학생 문해력 저하", sublabel: "(2024 교원 인식조사)" },
    { value: "31%", label: "한국 성인 문해력 1수준 이하", sublabel: "(OECD PIAAC 2023)" }
  ];

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary-green to-secondary-pink" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Why NewsSense?</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            왜 <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">NewsSense</span>가 필요한가요?
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            디지털 시대, 정보는 넘쳐나지만 제대로 이해하고 판단하는 능력은 떨어지고 있습니다.
            <br />
            <strong className="text-primary">NewsSense</strong>는 이 문제를 해결합니다.
          </motion.p>
        </motion.div>

        {/* Problem Stats */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">현재 문해력 위기 상황</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {problemStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-base font-semibold text-neutral-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-neutral-600">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Learning Process */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-12">
            3단계 학습 구조로 <span className="text-primary">비판적 문해력</span> 향상
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-neutral-700" />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-neutral-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-primary font-semibold">{feature.subtitle}</p>
                  </div>

                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>

                  {/* Step Number */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-neutral-400">{index + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              빠른 전달보다 올바른 이해에 가치를 두고
            </h3>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              청소년부터 일반 성인까지 누구나 활용할 수 있는<br />
              <strong>주도적 뉴스 문해력 학습 서비스</strong>를 지향합니다
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="font-semibold">📱 모바일 최적화</span>
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="font-semibold">🤖 AI 기반 첨삭</span>
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="font-semibold">⚡ 즉각 피드백</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
