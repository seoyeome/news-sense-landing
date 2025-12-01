'use client';

import { motion } from 'framer-motion';
import { Github, Mail, ExternalLink, Heart } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="NewsSense Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed max-w-md">
              AI 기반 뉴스 문해력 교육 플랫폼으로<br />
              올바른 뉴스 리터러시 역량을 함양하세요
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/orgs/al-lok-dal-lok/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@newssense.com"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-1">
                  서비스 소개
                </a>
              </li>
              <li>
                <a href="#features" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-1">
                  주요 기능
                </a>
              </li>
              <li>
                <a href="#team" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-1">
                  팀 소개
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/al-lok-dal-lok/news-sense-proposal" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-1">
                  기획서 보기
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://github.com/orgs/al-lok-dal-lok/repositories" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-1">
                  GitHub Repository
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-1">
                  프로토타입 체험
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            NewsSense에 관심이 있으신가요?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            프로젝트에 대해 더 알고 싶으면 소중한 한표 부탁드립니다!
          </p>
          <a
            href="https://dacon.io/competitions/official/236624/codeshare/13398"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-neutral-100 transform hover:scale-105 transition-all shadow-lg"
          >
            <Heart className="w-5 h-5 mr-2 fill-primary" />
            투표하러가기
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} NewsSense by 알록달록팀. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for better literacy</span>
            </div>
          </div>

          {/* Event Info */}
          <div className="mt-6 text-center">
            <p className="text-neutral-500 text-sm">
              2025년 새싹 해커톤(SeSAC Hackathon) 출품작
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
