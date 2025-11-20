# NewsSense Landing Page 🚀

NewsSense의 서비스를 소개하는 인터랙티브 랜딩페이지입니다.

## 📝 프로젝트 소개

**NewsSense**는 AI를 활용하여 뉴스를 제대로 읽고 판단하는 능력을 키워주는 문해력 교육 플랫폼입니다.

### 주요 특징

- ✨ **스크롤 인터랙션**: Framer Motion을 활용한 부드러운 스크롤 애니메이션
- 🎨 **기획서 색상 적용**: 기획서의 브랜드 컬러(파란색, 노란색, 핑크색 등)를 충실히 반영
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에 최적화
- 🎯 **섹션 구성**:
  - 히어로 섹션 (Hero Section)
  - 서비스 소개 (About Section)
  - 주요 기능 (Features Section)
  - 팀 소개 (Team Section)
  - 푸터 (Footer)

## 🛠 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.17 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버가 시작되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 📂 프로젝트 구조

```
news-sense-landing/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx            # 루트 레이아웃
│   └── page.tsx              # 메인 페이지
├── components/
│   ├── Navigation.tsx        # 네비게이션 컴포넌트
│   ├── Footer.tsx            # 푸터 컴포넌트
│   └── sections/
│       ├── HeroSection.tsx       # 히어로 섹션
│       ├── AboutSection.tsx      # 서비스 소개 섹션
│       ├── FeaturesSection.tsx   # 주요 기능 섹션
│       └── TeamSection.tsx       # 팀 소개 섹션
├── public/                   # 정적 파일
└── tailwind.config.ts        # Tailwind 설정
```

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary Blue**: `#2F7CF6` (브랜드 메인 색상)
- **Primary Light**: `#5B9EFF` (보조 파란색)
- **Secondary Yellow**: `#FFE66D` (스티커 노란색)
- **Secondary Green**: `#A8E6CF` (스티커 연두색)
- **Secondary Pink**: `#FFB3D9` (스티커 핑크색)
- **Secondary Purple**: `#C7B3FF` (스티커 보라색)

### 폰트

- **Primary Font**: Pretendard (한글 최적화 폰트)

## 👥 팀 알록달록

- **황윤정** - Team Leader / Product Manager
- **김서영** - Backend Developer
- **김영훈** - App Developer
- **유효진** - Designer
- **이은경** - AI Developer

## 📄 라이선스

이 프로젝트는 2025년 새싹 해커톤(SeSAC Hackathon) 출품작입니다.

## 🔗 링크

- [기획서 보기](기획서 링크)
- [GitHub Repository](GitHub 링크)
- [프로토타입 체험](프로토타입 링크)

---

Made with ❤️ by 알록달록팀
