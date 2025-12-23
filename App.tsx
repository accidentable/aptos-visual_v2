"use client"

import { ArrowRight, BookOpen, Zap, Flashlight, Sun, Moon } from "lucide-react"
import React, { useState } from 'react';
import TransactionJourney from './components/TransactionJourney';

type Language = 'ko' | 'en';
type Theme = 'light' | 'dark';

interface DashboardItem {
  title: { ko: string; en: string }
  description: { ko: string; en: string }
  id: string
  icon: React.ReactNode
  duration: string
}

const dashboardItems: DashboardItem[] = [
  {
    title: { ko: "Aptos 트랜잭션 여정", en: "Aptos Transaction Journey" },
    description: { ko: "앱토스 네트워크를 통해 트랜잭션이 처리되는 전 과정을 시각화로 체험해보세요", en: "Experience the entire transaction processing journey through the Aptos network with interactive visualization" },
    id: "transaction",
    icon: <Flashlight className="h-5 w-5" />,
    duration: "5 min",
  },
]

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Language>('ko');

  const isDark = theme === 'dark';

  if (selectedItem === "transaction") {
    return <TransactionJourney onBack={() => setSelectedItem(null)} theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />;
  }

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      {/* Header */}
      <header className={`border-b sticky top-0 z-50 transition-colors duration-300 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-gray-200 bg-white'}`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-auto items-center justify-center">
                <img
                  src="/aptos-logo2.png"
                  alt="Aptos"
                  className="object-contain h-8 w-auto"
                />
              </div>
              <div>
                <h1 className={`text-2xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {lang === 'ko' ? 'Aptos 개요' : 'Aptos Overview'}
                </h1>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>Dashboard</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <div className={`flex items-center border rounded ${isDark ? 'border-slate-700' : 'border-gray-300'}`}>
                <button 
                  onClick={() => setLang('ko')}
                  className={`px-3 py-1.5 text-[10px] font-mono font-bold transition-colors ${lang === 'ko' ? 'bg-teal-500 text-slate-900' : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  KO
                </button>
                <div className={`w-px h-4 ${isDark ? 'bg-slate-700' : 'bg-gray-300'}`}></div>
                <button 
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 text-[10px] font-mono font-bold transition-colors ${lang === 'en' ? 'bg-teal-500 text-slate-900' : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  EN
                </button>
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={`p-1.5 border rounded transition-colors ${isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-gray-300 hover:bg-gray-100'}`}
              >
                {isDark ? <Sun size={18} className="text-teal-500" /> : <Moon size={18} className="text-slate-700" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>Welcome</p>
          <h2 className={`text-5xl font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'ko' ? '앱토스 네트워크 이해하기' : 'Understanding Aptos Network'}
          </h2>
          <p className={`text-base max-w-2xl ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            {lang === 'ko' ? 'Aptos의 혁신적인 합의 메커니즘을 시각적으로 학습해보세요' : 'Learn about Aptos\' innovative consensus mechanism through interactive visualization'}
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dashboardItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className={`group h-full border transition-all duration-300 hover:shadow-sm cursor-pointer flex flex-col text-left ${isDark ? 'border-slate-700 bg-slate-900 hover:border-slate-600' : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              {/* Content */}
              <div className="p-6 flex flex-col h-full gap-4">
                {/* Icon */}
                <div className="flex items-start justify-between">
                  <div className={isDark ? 'text-teal-400' : 'text-gray-700'}>
                    {item.icon}
                  </div>
                  <span className={`text-xs font-medium border px-2 py-1 ${isDark ? 'border-slate-700 text-slate-400' : 'border-gray-200 text-gray-600'}`}>
                    {item.duration}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-teal-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title[lang]}
                  </h3>
                  <p className={`text-sm line-clamp-2 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                    {item.description[lang]}
                  </p>
                </div>

                {/* Footer with Arrow */}
                <div className={`flex items-center justify-between pt-4 border-t ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
                  <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                    {lang === 'ko' ? '자세히 보기' : 'Learn More'}
                  </span>
                  <ArrowRight className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${isDark ? 'text-teal-400' : 'text-gray-700'}`} />
                </div>
              </div>
            </button>
          ))}

          {/* Coming Soon Card */}
          <div className={`h-full border-dashed ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-gray-200 bg-gray-50'}`}>
            {/* Content */}
            <div className="p-6 flex flex-col h-full gap-4">
              {/* Icon */}
              <div className="flex items-start justify-between">
                <div className={isDark ? 'text-slate-700' : 'text-gray-400'}>
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className={`text-xs font-medium border px-2 py-1 ${isDark ? 'border-slate-700 text-slate-600' : 'border-gray-200 text-gray-500'}`}>
                  Soon
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-slate-600' : 'text-gray-500'}`}>
                  {lang === 'ko' ? '더 많은 콘텐츠' : 'More Content'}
                </h3>
                <p className={`text-sm line-clamp-2 ${isDark ? 'text-slate-700' : 'text-gray-500'}`}>
                  {lang === 'ko' ? '더 많은 학습 자료가 준비 중입니다' : 'More learning materials coming soon'}
                </p>
              </div>

              {/* Footer */}
              <div className={`flex items-center justify-between pt-4 border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
                <span className={`text-xs font-medium ${isDark ? 'text-slate-600' : 'text-gray-500'}`}>
                  {lang === 'ko' ? '곧 추가됩니다' : 'Coming Soon'}
                </span>
                <BookOpen className={`h-4 w-4 ${isDark ? 'text-slate-700' : 'text-gray-400'}`} />
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className={`border-t transition-colors duration-300 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-gray-200 bg-white'}`}>
        <div className="container max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
              Built by <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}><a href="https://x.com/taeho35858" target="_blank" rel="noopener noreferrer">@Ray</a></span> <span className={isDark ? 'text-slate-500' : 'text-gray-400'}>Aptos</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
