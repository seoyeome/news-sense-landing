'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, MessageSquare, CheckCircle, Lightbulb, Users as UsersIcon, BarChart3 } from 'lucide-react';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const mainFeatures = [
    {
      icon: FileText,
      title: "AI 기반 요약 첨삭",
      description: "사용자가 직접 작성한 요약문을 AI가 분석하고 첨삭합니다",
      details: [
        "사실 정확성 검증",
        "핵심 누락 여부 확인",
        "논리성 및 표현력 평가"
      ],
      color: "from-primary to-primary-light"
    },
    {
      icon: MessageSquare,
      title: "문장 유형 분류 학습",
      description: "뉴스 문장을 사실/추론/예측으로 구분하는 훈련",
      details: [
        "사실과 의견 구분 능력 향상",
        "기자의 의도 파악 훈련",
        "비판적 읽기 능력 강화"
      ],
      color: "from-secondary-green to-secondary-yellow"
    },
    {
      icon: CheckCircle,
      title: "AI 생성 퀴즈",
      description: "기사 내용을 기반으로 자동 생성되는 이해도 테스트",
      details: [
        "기계독해 AI 기반 문제 생성",
        "즉각적인 정답 및 해설 제공",
        "학습 효과 극대화"
      ],
      color: "from-secondary-pink to-secondary-purple"
    }
  ];

  const additionalFeatures = [
    {
      icon: Lightbulb,
      title: "나만의 요약 vs AI 요약 비교",
      description: "작성한 요약과 AI 요약을 하이라이트로 비교하여 요약의 핵심을 학습"
    },
    {
      icon: UsersIcon,
      title: "커뮤니티 학습",
      description: "다른 사용자의 요약을 보며 다양한 관점과 표현 방식 학습"
    },
    {
      icon: BarChart3,
      title: "학습 리포트",
      description: "나의 문해력 성장 과정을 시각화하여 동기 부여"
    }
  ];

  return (
    <section id="features" ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Core Features</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">NewsSense</span>의<br />
            핵심 기능
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-2xl mx-auto">
            AI 기술을 활용한 체계적인 학습 시스템으로<br />
            비판적 문해력을 효과적으로 향상시킵니다
          </motion.p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">{feature.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-12">
            그 외 다양한 기능
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-neutral-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Differentiation Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-12 md:p-16 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:40px_40px]" />
            </div>

            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">차별화된 접근</h3>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-red-400 font-bold mb-3 text-lg">❌ 기존 뉴스 요약 서비스</div>
                  <ul className="space-y-2 text-neutral-300">
                    <li>• 빠른 정보 전달에 초점</li>
                    <li>• 수동적인 정보 소비</li>
                    <li>• 피드백 없음</li>
                    <li>• 기사를 읽는 시간 단축</li>
                  </ul>
                </div>

                <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 border border-primary/30">
                  <div className="text-secondary-yellow font-bold mb-3 text-lg">✅ NewsSense</div>
                  <ul className="space-y-2">
                    <li>• 올바른 이해에 가치</li>
                    <li>• 능동적인 학습 참여</li>
                    <li>• 즉각적인 AI 첨삭</li>
                    <li>• 생각하는 시간 확대</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
