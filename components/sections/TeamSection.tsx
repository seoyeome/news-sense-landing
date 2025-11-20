'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Users } from 'lucide-react';

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const teamMembers = [
    {
      name: "황윤정",
      role: "Team Leader / Product Manager",
      description: "서비스 기획 및 프로젝트 관리",
      color: "from-secondary-yellow to-secondary-green",
      avatar: "👩‍💼"
    },
    {
      name: "김서영",
      role: "Backend Developer",
      description: "서버 아키텍처 설계 및 API 개발",
      color: "from-secondary-green to-secondary-pink",
      avatar: "👩‍💻"
    },
    {
      name: "김영훈",
      role: "Frontend Developer",
      description: "사용자 인터페이스 개발",
      color: "from-secondary-pink to-secondary-purple",
      avatar: "👨‍💻"
    },
    {
      name: "유효진",
      role: "Designer",
      description: "사용자 인터페이스 및 경험 디자인",
      color: "from-secondary-purple to-primary",
      avatar: "👩‍💼"
    },
    {
      name: "이은경",
      role: "AI Developer",
      description: "AI 모델 설계 및 데이터 파이프라인 구축",
      color: "from-primary to-secondary-yellow",
      avatar: "👩‍💻"
    }
  ];

  return (
    <section id="team" ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-primary/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Meet Our Team</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">알록달록</span> 팀을<br />
            소개합니다
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-neutral-600 max-w-2xl mx-auto">
            다양한 전문성을 가진 팀원들이 모여<br />
            문해력 교육의 새로운 패러다임을 만들어갑니다
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative h-full p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.color} opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`} />

                {/* Avatar */}
                <div className="relative">
                  <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center mb-6 mx-auto text-4xl group-hover:scale-110 transition-transform shadow-lg`}>
                    {member.avatar}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{member.description}</p>
                </div>

                {/* Social Links (Optional) */}
                {/* <div className="flex justify-center gap-3 mt-6">
                  <a href="#" className="w-8 h-8 bg-neutral-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-neutral-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Values */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              "사용자가 뉴스를 단순히 읽는 것을 넘어, AI를 활용하여 스스로 비판하고 재구성함으로써<br />
              올바른 <strong>뉴스 리터러시 역량</strong>을 함양할 수 있도록 돕습니다"
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-lg mb-2">Target</h4>
                <p className="text-sm opacity-90">청소년부터 성인까지 누구나</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="font-bold text-lg mb-2">Innovation</h4>
                <p className="text-sm opacity-90">AI 기반 맞춤형 학습</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold text-lg mb-2">Impact</h4>
                <p className="text-sm opacity-90">사회 전체의 문해력 향상</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
