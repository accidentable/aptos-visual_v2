
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  Layers, 
  Zap, 
  CheckSquare, 
  Book, 
  Code, 
  Terminal, 
  Shield, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  Square, 
  Activity, 
  Lock, 
  Network, 
  Bot, 
  Sun, 
  Moon, 
  Globe, 
  PenTool, 
  CheckCircle2, 
  Inbox,
  Key,
  Wifi,
  MousePointer2,
  Package,
  Coins,
  MessageSquare
} from 'lucide-react';
import { StepData } from '../types';

type Language = 'ko' | 'en';
type Theme = 'light' | 'dark';

const STEPS: StepData[] = [
  {
    id: 1,
    title: { ko: "입구 심사: 가짜인가 진짜인가?", en: "Security Check: Real or Fake?" },
    category: "ADMISSION_CONTROL",
    shortDesc: "IDENTITY_CHECK",
    blogContent: {
      overview: {
        ko: "트랜잭션 여정의 첫 관문입니다. 마치 은행 창구에서 신분증을 확인하는 것과 같아요. 네트워크는 당신이 보낸 요청이 진짜인지, 잔액은 충분한지 꼼꼼히 검사합니다.",
        en: "The first gateway of the journey. Think of it as showing your ID at a bank. The network checks if your request is genuine and if you have enough balance."
      },
      technicalDetails: {
        ko: [
          "디지털 서명 확인: 당신이 직접 보낸 트랜잭션인지 확인합니다.",
          "잔액 체크: 수수료를 지불할 수 있는지 미리 확인합니다.",
          "중복 방지: 같은 요청이 두 번 처리되지 않도록 차단합니다."
        ],
        en: [
          "Signature Check: Confirms the transaction actually came from you.",
          "Balance Audit: Pre-verifies if you can afford the gas fees.",
          "Replay Prevention: Blocks duplicate requests from being processed twice."
        ]
      }
    }
  },
  {
    id: 2,
    title: { ko: "데이터 포장: 택배 상자 만들기", en: "Data Packing: Making Delivery Boxes" },
    category: "QUORUM_STORE",
    shortDesc: "EFFICIENT_BATCHING",
    blogContent: {
      overview: {
        ko: "개별 트랜잭션을 하나씩 보내는 건 비효율적이죠. 앱토스는 트랜잭션들을 커다란 '택배 상자(배치)'에 모아 포장합니다. 이렇게 하면 네트워크를 훨씬 더 넓게 쓸 수 있어요.",
        en: "Sending transactions one by one is slow. Aptos packs multiple transactions into a 'Delivery Box' (batch). This allows the network to handle way more data at once."
      },
      technicalDetails: {
        ko: [
          "쿼럼 스토어: 데이터를 미리 모아두어 정체를 방지합니다.",
          "가용성 증명: '상자가 안전하게 도착했다'는 증명서를 미리 발행합니다.",
          "병목 현상 해결: 데이터 전송과 결정을 분리하여 속도를 높입니다."
        ],
        en: [
          "Quorum Store: Pre-collects data to prevent network congestion.",
          "Proof of Availability: Issues a certificate saying 'the box has arrived safely'.",
          "Decoupling: Separates data transfer from decision-making for speed."
        ]
      }
    }
  },
  {
    id: 3,
    title: { ko: "순서 합의: 팀원들의 빠른 찬성", en: "Consensus: The Fast Vote" },
    category: "APTOS_BFT_CONSENSUS",
    shortDesc: "TEAM_AGREEMENT",
    blogContent: {
      overview: {
        ko: "이제 상자들의 순서를 정할 시간입니다. 앱토스는 내용물 전체가 아니라 '상자 라벨(메타데이터)'만 보고 투표하기 때문에 빛의 속도로 결정을 내립니다.",
        en: "Time to decide the order of the boxes. Aptos votes on the 'Box Labels' (metadata) instead of the full content, allowing for light-speed decisions."
      },
      technicalDetails: {
        ko: [
          "AptosBFT: 지연 시간을 최소화한 앱토스만의 초고속 합의 엔진입니다.",
          "메타데이터 합의: 가벼운 정보만 주고받아 네트워크 부담을 줄입니다.",
          "2/3 정족수: 밸리데이터의 2/3 이상이 찬성하면 즉시 확정됩니다."
        ],
        en: [
          "AptosBFT: A specialized high-speed engine designed for minimal latency.",
          "Metadata Ordering: Only exchanges light info to reduce network load.",
          "2/3 Quorum: Finalizes instantly once 2/3 of validators agree."
        ]
      }
    }
  },
  {
    id: 4,
    title: { ko: "병렬 실행: 여러 명의 셰프", en: "Parallel Execution: Multiple Chefs" },
    category: "BLOCK_STM_ENGINE",
    shortDesc: "MULTI_TASKING",
    blogContent: {
      overview: {
        ko: "앱토스 마법의 핵심입니다! 한 명의 셰프가 요리를 하나씩 만드는 게 아니라, 여러 명의 셰프가 서로 방해되지 않는 요리를 동시에 완성하여 엄청난 속도를 냅니다.",
        en: "The secret sauce of Aptos! Instead of one chef making one dish at a time, multiple chefs finish non-conflicting dishes simultaneously for explosive speed."
      },
      technicalDetails: {
        ko: [
          "Block-STM: 관련 없는 작업들을 똑똑하게 골라내어 동시에 실행합니다.",
          "낙관적 처리: 일단 다 같이 처리한 뒤, 충돌이 나면 그 부분만 다시 합니다.",
          "무한 확장성: 컴퓨터 사양이 좋을수록 처리 속도가 비약적으로 상승합니다."
        ],
        en: [
          "Block-STM: Smarter engine that processes independent tasks at once.",
          "Optimistic Execution: Runs everything first, then re-dos only conflicts.",
          "Scalability: Speed increases linearly as hardware gets stronger."
        ]
      }
    }
  },
  {
    id: 5,
    title: { ko: "최종 기록: 장부에 박제하기", en: "Final Record: Locking the Ledger" },
    category: "LEDGER_COMMIT",
    shortDesc: "PERMANENT_SETTLEMENT",
    blogContent: {
      overview: {
        ko: "모든 과정이 끝났습니다! 실행된 결과가 앱토스라는 거대한 디지털 장부에 영구적으로 기록됩니다. 이제 당신의 지갑 잔액이 실제로 업데이트되었습니다.",
        en: "The journey is complete! The results are permanently etched into the massive Aptos digital ledger. Your wallet balance is now officially updated."
      },
      technicalDetails: {
        ko: [
          "상태 업데이트: 전 세계가 공유하는 데이터베이스에 결과를 반영합니다.",
          "영구 저장소: 절대 지워지지 않는 안전한 저장소(RocksDB)에 보관합니다.",
          "알림 발송: 트랜잭션이 성공했음을 세상에 알립니다."
        ],
        en: [
          "State Update: Reflects results in the globally shared database.",
          "Permanent Storage: Stores data in an unerasable, secure vault (RocksDB).",
          "Event Emission: Notifies the world that the transaction was successful."
        ]
      }
    }
  }
];

const GUIDE_MESSAGES: Record<number | string, { ko: string; en: string }> = {
  1: {
    ko: "TX_INIT: 영수증 카드를 확인하고 서명하여 트랜잭션을 네트워크에 전송하십시오. 시스템이 즉시 보안 검사를 수행합니다.",
    en: "TX_INIT: Verify the receipt card and sign it to submit. The system will immediately perform security checks."
  },
  "2-PACKING": {
    ko: "QUORUM_STORE: 가장 밝고 큰 트랜잭션(높은 수수료)을 골라 하단 슬롯 영역으로 드래그하세요. 배치가 완성되면 밸리데이터 전파가 시작됩니다.",
    en: "QUORUM_STORE: Pick the brightest and largest transactions (highest fees) and drag them into the slots below. Propagation starts once the batch is full."
  },
  "2-PROPAGATION": {
    ko: "배치 전파: 중앙의 배치를 밸리데이터에 드래그하여 가용성 증명(PoA)을 수집하세요. 정족수(2/3 이상)를 달성해야 데이터 가용성이 확보됩니다.",
    en: "BATCH_PROPAGATION: Drag the batch to validators to collect Proof of Availability (PoA). Achieve 2/3+ quorum to secure data availability."
  },
  2: {
    ko: "QUORUM_STORE: 가장 밝고 큰 트랜잭션(높은 수수료)을 골라 하단 슬롯 영역으로 드래그하세요. 배치가 완성되면 밸리데이터 전파가 시작됩니다.",
    en: "QUORUM_STORE: Pick the brightest and largest transactions (highest fees) and drag them into the slots below. Propagation starts once the batch is full."
  },
  3: {
    ko: "ORDER_LOCK: 순서 합의 단계입니다. 앱토스는 메타데이터만으로 합의를 진행하여 매우 빠릅니다. 정족수(Quorum) 투표를 수집하십시오.",
    en: "ORDER_LOCK: Consensus phase. Aptos is ultra-fast by reaching agreement on metadata only. Collect Quorum votes now."
  },
  4: {
    ko: "BLOCK_STM_ACTIVE: 병렬 실행 엔진 가동. 멀티 코어 리소스를 할당하여 처리 효율을 극대화하십시오. 충돌 제어는 시스템이 담당합니다.",
    en: "BLOCK_STM_ACTIVE: Parallel engine engaged. Allocate multi-core resources for maximum efficiency. System handles conflict control."
  },
  5: {
    ko: "STATE_FINALIZATION: 모든 계산이 완료되었습니다. 결과값을 스토리지에 영구 커밋하여 원장 상태를 업데이트하십시오.",
    en: "STATE_FINALIZATION: Computation complete. Commit result values to storage to update the final ledger state."
  }
};

const TransactionJourney: React.FC<{ onBack?: () => void; theme?: Theme; setTheme?: (theme: Theme) => void; lang?: Language; setLang?: (lang: Language) => void }> = ({ onBack, theme: initialTheme = 'dark', setTheme: setParentTheme, lang: initialLang = 'ko', setLang: setParentLang }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [localLang, setLocalLang] = useState<Language>('ko');
  const [localTheme, setLocalTheme] = useState<Theme>('dark');
  const [isStepComplete, setIsStepComplete] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [quorumPhase, setQuorumPhase] = useState<'PACKING' | 'PROPAGATION'>('PACKING');

  // Use parent props if available, otherwise use local state
  const lang = setParentLang ? initialLang : localLang;
  const setLang = setParentLang || setLocalLang;
  const theme = setParentTheme ? initialTheme : localTheme;
  const setTheme = setParentTheme || setLocalTheme;

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
    setIsStepComplete(false);
  };
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setIsStepComplete(false);
  };

  useEffect(() => {
    // Show guide briefly on step change if it was hidden
    if (!showGuide) {
      // Logic could go here to auto-show, but user asked for toggle
    }
  }, [currentStep]);

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col h-screen overflow-hidden transition-colors duration-300 
      ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      
      {/* Top Header with Back Button */}
      <div className={`border-b-2 px-6 py-3 shrink-0 transition-colors duration-300 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-gray-50'}`}>
        <div className=" w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className={`flex items-center gap-2 px-1 py-1 border transition-colors text-[11px] font-bold uppercase tracking-wide
                  ${isDark ? 'border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-slate-200' : 'border-gray-300 hover:bg-gray-100 text-gray-600 hover:text-gray-900'}`}
              >
                <ArrowLeft size={14} />
                BACK
              </button>
            )}
            <h2 className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Aptos Transaction Journey
            </h2>
          </div>
          <p className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>
            Interactive Architecture Visualization
          </p>
        </div>
      </div>
      
      <div className={`flex flex-col h-screen overflow-hidden transition-colors duration-300 border-4 m-2 
      ${isDark ? 'bg-slate-950 text-slate-100 border-slate-700' : 'bg-white text-slate-900 border-slate-900'}`}>
      
      {/* Header */}
      <header className={`h-14 flex items-center px-6 shrink-0 z-30 transition-colors duration-300
        ${isDark ? 'bg-slate-900' : 'bg-slate-900'}`}>
        <div className="flex items-center gap-2">
          <div className="bg-teal-500 p-1">
            <Zap className="text-slate-900 h-4 w-4 fill-slate-900" />
          </div>
          <h1 className="text-sm font-black text-white tracking-[0.2em]">APTOS_ARCH_SYSTEM_V3</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
           <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="flex items-center gap-2 border border-slate-700 px-3 py-1 hover:bg-slate-800 transition-colors">
             {isDark ? <Sun size={14} className="text-teal-500" /> : <Moon size={14} className="text-slate-300" />}
             <span className="text-[10px] font-mono text-slate-300 uppercase">{theme}</span>
           </button>
           <div className="flex items-center gap-1 border border-slate-700 px-1 py-1">
             <button onClick={() => setLang('ko')} className={`px-2 py-0.5 text-[10px] font-mono font-bold transition-colors ${lang === 'ko' ? 'bg-teal-500 text-slate-900' : 'text-slate-400 hover:text-slate-200'}`}>
               KO
             </button>
             <div className="w-px h-4 bg-slate-700"></div>
             <button onClick={() => setLang('en')} className={`px-2 py-0.5 text-[10px] font-mono font-bold transition-colors ${lang === 'en' ? 'bg-teal-500 text-slate-900' : 'text-slate-400 hover:text-slate-200'}`}>
               EN
             </button>
           </div>
           <div className="hidden md:flex items-center gap-2 border border-slate-700 px-3 py-1">
              <div className="h-1.5 w-1.5 bg-teal-500"></div>
              <span className="text-[10px] font-mono text-slate-300 uppercase">SYS: ACTIVE</span>
           </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`h-16 border-b-2 shrink-0 z-20 flex transition-colors duration-300 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-900 bg-slate-50'}`}>
        {STEPS.map((step) => (
          <button
            key={step.id}
            onClick={() => {
              setCurrentStep(step.id);
              setIsStepComplete(false);
            }}
            className={`flex-1 flex flex-col items-start justify-center px-6 border-r-2 transition-all relative overflow-hidden group
              ${isDark ? 'border-slate-700' : 'border-slate-900'}
              ${currentStep === step.id ? (isDark ? 'bg-slate-800' : 'bg-white') : (isDark ? 'bg-slate-900 hover:bg-slate-800' : 'bg-slate-100 hover:bg-slate-200')}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[10px] font-black font-mono ${currentStep === step.id ? 'text-teal-500' : 'text-slate-400'}`}>[0{step.id}]</span>
              <span className={`text-[10px] font-black tracking-tight uppercase ${currentStep === step.id ? (isDark ? 'text-slate-100' : 'text-slate-900') : 'text-slate-500'}`}>{step.title[lang]}</span>
            </div>
            <div className={`h-1 w-full bg-slate-200 mt-1 relative dark:bg-slate-800`}>
               {currentStep >= step.id && <div className={`absolute top-0 left-0 h-full ${currentStep === step.id ? 'bg-teal-500 w-full' : 'bg-slate-700 w-full'}`} />}
            </div>
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <main className="flex-1 flex overflow-hidden">
        <section className={`flex-1 flex flex-col border-r-2 relative transition-colors duration-300 ${isDark ? 'border-slate-700 bg-slate-950' : 'border-slate-900 bg-white'}`}>
          <div className={`h-8 border-b-2 flex items-center justify-between px-4 shrink-0 transition-colors ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-900 bg-slate-100'}`}>
            <span className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
              <Terminal size={12} /> INTERACTIVE_ENV
            </span>
            <div className="text-[10px] font-mono text-teal-500 font-bold uppercase">MODE: MANUAL_INTERVENTION</div>
          </div>
          
          <div className={`flex-1 flex items-center justify-center p-4 overflow-hidden relative ${isDark ? 'bg-[radial-gradient(#1e293b_1px,transparent_1px)]' : 'bg-[radial-gradient(#e2e8f0_1px,transparent_1px)]'} [background-size:24px_24px]`}>
            <AnimatePresence mode="wait">
              <motion.div key={currentStep + lang} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="w-full h-full flex items-center justify-center">
                {currentStep === 1 && <AdmissionControlActivity isDark={isDark} lang={lang} onComplete={() => setIsStepComplete(true)} />}
                {currentStep === 2 && <QuorumStoreActivity isDark={isDark} lang={lang} onComplete={() => setIsStepComplete(true)} onPhaseChange={setQuorumPhase} />}
                {currentStep === 3 && <ConsensusActivity isDark={isDark} lang={lang} onComplete={() => setIsStepComplete(true)} />}
                {currentStep === 4 && <BlockSTMActivity isDark={isDark} lang={lang} onComplete={() => setIsStepComplete(true)} />}
                {currentStep === 5 && <CommitActivity isDark={isDark} lang={lang} onComplete={() => setIsStepComplete(true)} />}
              </motion.div>
            </AnimatePresence>

            {/* Guide Assistant Toggle */}
            <div className="absolute bottom-6 left-6 flex items-end gap-3 z-30">
              <button 
                onClick={() => setShowGuide(!showGuide)}
                className={`p-2 border-2 transition-all relative group
                  ${showGuide ? 'bg-teal-500 border-slate-900' : 'bg-slate-900 border-teal-500'}`}
                title={lang === 'ko' ? '도움말 토글' : 'Toggle Guide'}
              >
                <Bot size={24} className={showGuide ? 'text-slate-900' : 'text-teal-500'} />
                {!showGuide && (
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"
                  />
                )}
              </button>

              <AnimatePresence>
                {showGuide && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20, scale: 0.95 }} 
                    animate={{ opacity: 1, x: 0, scale: 1 }} 
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    className={`border-2 p-4 max-w-xs relative transition-colors duration-300 pointer-events-auto
                      ${isDark ? 'bg-slate-900 border-slate-700 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]' : 'bg-white border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]'}`}
                  >
                    <div className="absolute -top-3 left-2 bg-slate-900 px-1.5 py-0.5">
                      <span className="text-[8px] font-black text-white uppercase tracking-widest">SYSTEM_GUIDE</span>
                    </div>
                    <p className={`text-[10px] font-mono font-bold leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {currentStep === 2 ? GUIDE_MESSAGES[`2-${quorumPhase}`][lang] : GUIDE_MESSAGES[currentStep][lang]}
                    </p>
                    <button 
                      onClick={() => setShowGuide(false)}
                      className="absolute top-1 right-1 p-0.5 opacity-30 hover:opacity-100 transition-opacity"
                    >
                      <Square size={8} fill="currentColor" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className={`absolute bottom-6 right-6 flex border-2 ${isDark ? 'border-slate-700 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)]' : 'border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]'}`}>
              <button disabled={currentStep === 1} onClick={prevStep} className={`p-3 border-r-2 transition-colors ${isDark ? 'bg-slate-900 border-slate-700 hover:bg-slate-800' : 'bg-white border-slate-900 hover:bg-slate-50'} disabled:opacity-30`}><ArrowLeft size={20} strokeWidth={3} /></button>
              <motion.button 
                disabled={currentStep === 5} 
                onClick={nextStep} 
                animate={isStepComplete && currentStep < 5 ? { 
                  scale: [1, 1.1, 1],
                  boxShadow: ["0px 0px 0px rgba(45,212,191,0)", "0px 0px 15px rgba(45,212,191,0.8)", "0px 0px 0px rgba(45,212,191,0)"]
                } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className={`p-3 transition-colors ${isStepComplete ? 'bg-teal-500 text-slate-900' : 'bg-slate-200 text-slate-500'} disabled:opacity-30`}
              >
                <ArrowRight size={20} strokeWidth={3} />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Documentation Sidebar */}
        <article className={`w-[440px] shrink-0 flex flex-col overflow-hidden transition-colors duration-300 ${isDark ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}`}>
          <div className={`h-8 border-b-2 flex items-center px-6 shrink-0 transition-colors ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-900 bg-slate-100'}`}>
             <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Book size={12} /> ARCH_SPECS</span>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
            <motion.div key={currentStep + lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="mb-8">
                <div className="text-[11px] font-mono text-teal-500 font-bold mb-1 tracking-tighter">// {STEPS[currentStep-1].category}</div>
                <h2 className="text-2xl font-black leading-none mb-4 uppercase tracking-tighter border-l-4 border-teal-500 pl-4">{STEPS[currentStep-1].title[lang]}</h2>
                <div className="bg-slate-900 text-white text-[9px] font-black px-2 py-1 inline-block tracking-widest border border-slate-700">{STEPS[currentStep-1].shortDesc}</div>
              </div>
              <div className="space-y-6">
                <p className={`text-sm font-bold leading-relaxed font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{STEPS[currentStep-1].blogContent.overview[lang]}</p>
                <div className={`border-2 p-6 transition-colors ${isDark ? 'border-slate-700 bg-slate-800/50' : 'border-slate-900 bg-slate-50'}`}>
                  <h3 className="font-black mb-4 flex items-center gap-2 text-[10px] uppercase tracking-widest">SYSTEM_ATTRIBUTES</h3>
                  <ul className="space-y-4">
                    {STEPS[currentStep-1].blogContent.technicalDetails[lang].map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-xs leading-tight">
                        <div className={`h-2 w-2 mt-1 shrink-0 ${isDark ? 'bg-teal-500' : 'bg-slate-900'}`}></div>
                        <span className="font-bold">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <div className={`p-6 border-t-2 transition-colors ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-900 bg-white'}`}>
             <motion.button 
               onClick={() => currentStep < 5 ? nextStep() : setCurrentStep(1)} 
               animate={isStepComplete ? { scale: [1, 1.02, 1] } : {}}
               transition={{ repeat: Infinity, duration: 1.5 }}
               className={`w-full py-4 font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-colors shadow-[4px_4px_0px_0px_rgba(20,184,166,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none border border-slate-700
                 ${isStepComplete ? 'bg-teal-500 text-slate-900 hover:bg-teal-400' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
             >
               {currentStep < 5 ? (lang === 'ko' ? '다음 단계 실행' : 'EXECUTE_NEXT_PHASE') : (lang === 'ko' ? '시스템 재시작' : 'RESTART_WORKFLOW')}
               <ChevronRight size={14} className={isStepComplete ? 'animate-bounce-x' : ''} />
             </motion.button>
          </div>
        </article>
      </main>
      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
      </div>

      {/* Bottom Footer */}
      <div className={`border-t-2 px-6 py-3 shrink-0 transition-colors duration-300 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center gap-4">
          <p className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-gray-600'}`}>
            Built by <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-gray-900'}`}>
              <a href="https://x.com/taeho35858" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">@Ray</a>
            </span> <span className={isDark ? 'text-slate-700' : 'text-gray-400'}>Aptos</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Physical Mempool Accumulator Component (Step 1) ---
interface MempoolTX {
  id: string | number;
  x: number;
  y: number;
  rotate: number;
  isUserTx: boolean;
}

const MempoolAccumulator = ({ isDark, lang, newUserTx }: { isDark: boolean; lang: Language; newUserTx: boolean }) => {
  const [items, setItems] = useState<MempoolTX[]>([]);
  const [isColliding, setIsColliding] = useState(false);
  const containerWidth = 320;
  const containerHeight = 160;
  const txSize = 40;

  useEffect(() => {
    const initialItems: MempoolTX[] = Array.from({ length: 7 }).map((_, i) => ({
      id: `dummy-${i}`,
      x: 30 + (i * 35) + (Math.random() * 20),
      y: containerHeight - 45 - (Math.floor(i / 5) * 5),
      rotate: Math.random() * 30 - 15,
      isUserTx: false
    }));
    setItems(initialItems);
  }, []);

  useEffect(() => {
    if (newUserTx) {
      const dropX = (containerWidth / 2) - (txSize / 2);
      const dropY = containerHeight - 45 - (Math.floor(items.length / 5) * 5); 
      const userTx: MempoolTX = {
        id: 'user-tx',
        x: dropX + (Math.random() * 20 - 10),
        y: dropY,
        rotate: Math.random() * 20 - 10,
        isUserTx: true
      };
      const timer = setTimeout(() => {
        setItems(prev => [...prev, userTx]);
        setTimeout(() => setIsColliding(true), 500);
        setTimeout(() => setIsColliding(false), 800);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [newUserTx]);

  const t = { ko: '로컬 멤풀 (MEMPOOL)', en: 'LOCAL MEMPOOL' }[lang];

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-20 relative">
      <div className={`w-80 h-40 border-4 border-dashed relative flex items-end justify-center transition-colors ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-300 bg-slate-50'} ${isColliding ? 'animate-[shake_0.2s_ease-in-out]' : ''}`} style={{ width: containerWidth, height: containerHeight }}>
        <div className="absolute top-2 left-2 flex items-center gap-2 opacity-30"><Inbox size={14} /><span className="text-[8px] font-black uppercase font-mono">{t}</span></div>
        <AnimatePresence>
          {items.map((item) => (
            <motion.div key={item.id} initial={item.isUserTx ? { y: -250, opacity: 0, scale: 2 } : { opacity: 1 }} animate={item.isUserTx ? { y: item.y - containerHeight + 40, opacity: 1, scale: 1, x: item.x - (containerWidth/2 - 20) } : { x: item.x - (containerWidth/2 - 20), y: 0 }} transition={item.isUserTx ? { type: 'spring', stiffness: 150, damping: 10, delay: 0.2 } : { duration: 0 }} className={`absolute bottom-4 flex flex-col items-center justify-center w-10 h-10 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] ${item.isUserTx ? 'bg-teal-500 z-20' : 'bg-slate-400 opacity-40 z-10'}`} style={{ rotate: item.rotate }}>
              <span className="text-[8px] font-black text-white leading-none">TX</span>
              <Zap size={10} className="text-white fill-white" />
              {item.isUserTx && <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.3, scale: 1 }} transition={{ delay: 0.6 }} className="absolute -bottom-2 w-6 h-1 bg-black/40 blur-[2px] rounded-full" />}
            </motion.div>
          ))}
        </AnimatePresence>
        <AnimatePresence>{isColliding && <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 1.4] }} exit={{ opacity: 0 }} className="absolute bottom-4 w-32 h-6 bg-teal-400/20 blur-xl rounded-full z-0" />}</AnimatePresence>
      </div>
    </div>
  );
};

// --- Step 1 Activity ---
const AdmissionControlActivity = ({ isDark, lang, onComplete }: { isDark: boolean; lang: Language; onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [subStep, setSubStep] = useState<'A' | 'B'>('A');
  const [isSigned, setIsSigned] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [signatureImage, setSignatureImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [checklist, setChecklist] = useState({ sig: false, seq: false, bal: false });
  const [isCompressed, setIsCompressed] = useState(false);

  // Canvas 초기화
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 280;
      canvas.height = 80;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [isDark]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsDrawing(true);
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      ctx.beginPath();
      ctx.moveTo((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = isDark ? '#d1d5db' : '#1f2937';
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      ctx.lineTo((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
      ctx.stroke();
    }
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.closePath();
        // 캔버스에 그림이 있는지 확인
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let hasDrawing = false;
        for (let i = 3; i < data.length; i += 4) {
          if (data[i] > 128) {
            hasDrawing = true;
            break;
          }
        }
        if (hasDrawing) {
          setIsSigned(true);
          setSignatureImage(canvas.toDataURL());
        }
      }
    }
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setIsSigned(false);
        setSignatureImage(null);
      }
    }
  };

  useEffect(() => {
    if (subStep === 'B' && !isCompressed) {
      setIsScanning(true);
      const timers = [
        setTimeout(() => setChecklist(p => ({ ...p, sig: true })), 800),
        setTimeout(() => setChecklist(p => ({ ...p, seq: true })), 1600),
        setTimeout(() => setChecklist(p => ({ ...p, bal: true })), 2400),
        setTimeout(() => { setIsScanning(false); setIsCompressed(true); onComplete(); }, 3200)
      ];
      return () => timers.forEach(t => clearTimeout(t));
    }
  }, [subStep, isCompressed, onComplete]);

  const t = { ko: { sign: '서명 및 제출', receipt: '트랜잭션 영수증', sender: '발신자', receiver: '수신자', amount: '금액', gas: '가스 한도', certified: '인증됨', checklist: '검증 체크리스트', ver_sig: '서명 유효성 검사 (ED25519)', ver_seq: '시퀀스 번호 확인', ver_bal: '가스비 잔액 확인', mempool: '검증 진행 중...', mempool_done: '멤풀 적재 완료' }, en: { sign: 'SIGN & SUBMIT', receipt: 'TX RECEIPT', sender: 'SENDER', receiver: 'RECEIVER', amount: 'AMOUNT', gas: 'GAS LIMIT', certified: 'CERTIFIED', checklist: 'TXN_VERIFIER', ver_sig: 'VERIFY SIGNATURE (ED25519)', ver_seq: 'CHECK SEQUENCE NUMBER', ver_bal: 'VALIDATE GAS BALANCE', mempool: 'VERIFYING...', mempool_done: 'ADMITTED TO MEMPOOL' } }[lang];
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 relative">
      <AnimatePresence mode="wait">
        {!isCompressed && (
          <motion.div key="receipt-container" exit={{ scale: 0.8, opacity: 0, y: 50 }} className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className={`w-64 border-4 p-6 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-900'} shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]`}>
              {/* Receipt Header */}
              <div className="border-b-2 border-dashed border-slate-400 pb-4 mb-6">
                <h3 className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4"><Zap size={14} className="text-teal-500" /> {t.receipt}</h3>
                <div className="space-y-3 font-mono text-[9px]">
                  <div className="flex justify-between"><span className="text-slate-500">{t.sender}</span><span className="font-bold">0x4a...1d3e</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">{t.receiver}</span><span className="font-bold">0x1b...9c2a</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">{t.amount}</span><span className="font-bold">1,000 APT</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">{t.gas}</span><span className="font-bold">2,000 UNIT</span></div>
                </div>
              </div>

              {/* Signature Pad */}
              <div className="border-b-2 border-dashed border-slate-400 pb-6 mb-6">
                <label className={`block text-[9px] font-black uppercase tracking-widest mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {lang === 'ko' ? '서명 (마우스로 그리세요)' : 'SIGNATURE (DRAW WITH MOUSE)'}
                </label>
                <div className={`border-2 relative mb-3 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}>
                  <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    className={`block w-full cursor-crosshair ${isDark ? 'bg-slate-900' : 'bg-white'}`}
                    style={{ height: '80px', display: 'block' }}
                  />
                </div>
                {isSigned && (
                  <button
                    onClick={clearSignature}
                    className={`text-[8px] font-black uppercase tracking-widest transition-colors ${isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    {lang === 'ko' ? '지우기' : 'CLEAR'}
                  </button>
                )}
              </div>

              {/* Submit Button */}
              <button
                disabled={!isSigned || subStep === 'B'}
                onClick={() => setSubStep('B')}
                className={`w-full py-3 border-2 font-black text-[10px] uppercase tracking-widest transition-all ${isDark ? 'border-slate-700' : 'border-slate-900'} ${isSigned && subStep === 'A' ? 'bg-slate-900 text-white shadow-[4px_4px_0px_0px_rgba(20,184,166,1)] active:translate-x-1 active:translate-y-1 active:shadow-none' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}
              >
                {subStep === 'B' ? (lang === 'ko' ? '검증 진행 중...' : 'VERIFYING...') : (lang === 'ko' ? '제출하기' : 'SUBMIT')}
              </button>
              {isScanning && <motion.div animate={{ top: ['0%', '100%', '0%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute left-0 w-full h-1 bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.8)] z-20" />}
            </motion.div>

            {/* Verification Checklist - Shows after submission on the right */}
            {subStep === 'B' && (
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className={`w-72 border-2 p-6 transition-colors ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]'}`}>
                <div className="flex items-center gap-2 mb-6 border-b-2 pb-2 border-slate-400"><Shield size={16} /><span className="text-[10px] font-black uppercase tracking-widest">{t.checklist}</span></div>
                <div className="space-y-4">{(['sig', 'seq', 'bal'] as const).map(key => (<div key={key} className="flex items-center justify-between font-mono text-[9px] font-bold"><span className={checklist[key] ? 'text-teal-500' : 'text-slate-400'}>{key === 'sig' ? t.ver_sig : key === 'seq' ? t.ver_seq : t.ver_bal}</span>{checklist[key] ? <CheckCircle2 size={14} className="text-teal-500" /> : <div className={`w-3.5 h-3.5 border ${isDark ? 'border-slate-700' : 'border-slate-400'}`} />}</div>))}</div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {isCompressed && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <MempoolAccumulator isDark={isDark} lang={lang} newUserTx={isCompressed} />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-8 text-center space-y-4"><p className="text-[11px] font-black font-mono text-teal-500 uppercase tracking-widest animate-pulse">{t.mempool_done}</p><button onClick={() => { setSubStep('A'); setIsSigned(false); setChecklist({ sig: false, seq: false, bal: false }); setIsCompressed(false); }} className="text-[9px] font-black underline uppercase text-slate-500 hover:text-teal-500 transition-colors block mx-auto">RE-SIMULATE_PROCESS</button></motion.div>
        </div>
      )}
    </div>
  );
};

// --- Step 2 Activity: Two-Phase Quorum Store (Packing & Propagation) ---
interface PackableTX {
  id: number;
  fee: number;
  size: number;
  x: number;
  y: number;
}

const QuorumStoreActivity = ({ isDark, lang, onComplete, onPhaseChange }: { isDark: boolean; lang: Language; onComplete: () => void; onPhaseChange?: (phase: 'PACKING' | 'PROPAGATION') => void }) => {
  const [phase, setPhase] = useState<'PACKING' | 'PROPAGATION'>('PACKING');
  const [mempoolTx, setMempoolTx] = useState<PackableTX[]>([]);
  const [slots, setSlots] = useState<(PackableTX | null)[]>([null, null, null]);
  const [totalReward, setTotalReward] = useState(0);
  const [isMerging, setIsMerging] = useState(false);
  const [isHoveringGrid, setIsHoveringGrid] = useState(false);

  // Propagation state
  const [collectedKeys, setCollectedKeys] = useState<number[]>([]);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [isQuorumAchieved, setIsQuorumAchieved] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [activeKeyAnims, setActiveKeyAnims] = useState<{id: number, x: number, y: number}[]>([]);

  const totalNodes = 12;
  const quorumCount = 8;

  // Initialize Packing Phase
  useEffect(() => {
    if (phase === 'PACKING') {
      const initialTx: PackableTX[] = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        fee: Math.floor(Math.random() * 800) + 200, 
        size: 0,
        x: Math.random() * 380 - 190,
        y: Math.random() < 0.5 ? (Math.random() * 100 - 175) : (Math.random() * 100 + 75),
      })).map(tx => ({ ...tx, size: 28 + (tx.fee / 1000) * 32 }));
      setMempoolTx(initialTx);
    }
  }, [phase]);

  // Merge effect when all slots full
  useEffect(() => {
    if (slots.every(s => s !== null) && phase === 'PACKING' && !isMerging) {
      setIsMerging(true);
      setTimeout(() => {
        setPhase('PROPAGATION');
        setIsMerging(false);
      }, 1500);
    }
  }, [slots, phase, isMerging]);

  // Notify parent about phase change
  useEffect(() => {
    onPhaseChange?.(phase);
  }, [phase, onPhaseChange]);

  // Quorum Achievement check
  useEffect(() => {
    if (collectedKeys.length >= quorumCount && !isQuorumAchieved) {
      setIsQuorumAchieved(true);
      setShowFlash(true);
      onComplete();
      setTimeout(() => setShowFlash(false), 500);
    }
  }, [collectedKeys, isQuorumAchieved, onComplete]);

  const handleDragToGrid = (e: any, info: any) => {
    const isOverGrid = info.offset.y > 50 && info.offset.y < 180 && Math.abs(info.offset.x) < 160;
    setIsHoveringGrid(isOverGrid);
  };

  const handleDragEndToSlot = (e: any, info: any, tx: PackableTX) => {
    setIsHoveringGrid(false);
    const isOverGrid = info.offset.y > 50 && info.offset.y < 180 && Math.abs(info.offset.x) < 160;
    if (isOverGrid) {
      const emptySlotIdx = slots.findIndex(s => s === null);
      if (emptySlotIdx !== -1) {
        const newSlots = [...slots];
        newSlots[emptySlotIdx] = tx;
        setSlots(newSlots);
        setMempoolTx(prev => prev.filter(t => t.id !== tx.id));
        setTotalReward(prev => prev + tx.fee);
      }
    }
  };

  const onDragProp = (e: any, info: any) => {
    const radius = 150;
    const threshold = 50;
    let nearest = null;
    let minDist = threshold;

    for (let i = 0; i < totalNodes; i++) {
      const angle = (i / totalNodes) * Math.PI * 2;
      const targetX = Math.cos(angle) * radius;
      const targetY = Math.sin(angle) * radius;
      const dx = info.offset.x - targetX;
      const dy = info.offset.y - targetY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minDist) {
        minDist = dist;
        nearest = i;
      }
    }
    setHoveredNode(nearest);
  };

  const onDragPropEnd = (e: any, info: any) => {
    if (hoveredNode !== null && !collectedKeys.includes(hoveredNode)) {
      const angle = (hoveredNode / totalNodes) * Math.PI * 2;
      const nodeX = Math.cos(angle) * 150;
      const nodeY = Math.sin(angle) * 150;
      const animId = Date.now();
      setActiveKeyAnims(prev => [...prev, { id: animId, x: nodeX, y: nodeY }]);
      setCollectedKeys(prev => [...prev, hoveredNode]);
      setTimeout(() => {
        setActiveKeyAnims(prev => prev.filter(a => a.id !== animId));
      }, 700);
    }
    setHoveredNode(null);
  };

  const t = {
    ko: {
      packing_title: '배치 구성: 고가치 TX 수집',
      packing_reward: '현재 배치 보상 (TOTAL_REWARD)',
      packing_guide: 'TX를 드래그하여 아래 슬롯 영역에 넣으세요',
      prop_title: '가용성 증명: PoA 수집',
      quorum_achieved: '인증 완료: 데이터 가용성 확보!',
      reset: '시뮬레이션 초기화',
      label: 'BATCH_HUB_V3'
    },
    en: {
      packing_title: 'BATCH PACKING: PICK HIGH-VALUE TX',
      packing_reward: 'TOTAL BATCH REWARD',
      packing_guide: 'Drag TXs into the slot area below',
      prop_title: 'QUORUM STORE: COLLECT PoA',
      quorum_achieved: 'QUORUM ACHIEVED: DATA SAFE!',
      reset: 'RESET SIMULATION',
      label: 'BATCH_HUB_V3'
    }
  }[lang];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6 relative select-none">
      <AnimatePresence>
        {showFlash && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-teal-500 z-50 pointer-events-none" />
        )}
      </AnimatePresence>

      <div className="absolute top-4 left-4 space-y-1">
        <h3 className={`text-sm font-black uppercase tracking-[0.2em] ${isDark ? 'text-teal-500' : 'text-slate-900'}`}>
          {phase === 'PACKING' ? t.packing_title : t.prop_title}
        </h3>
        {phase === 'PACKING' && (
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">{t.packing_reward}</span>
            <div className="text-2xl font-black text-amber-500 flex items-center gap-2">
              <Coins size={20} />
              <motion.span key={totalReward} initial={{ scale: 1.2 }} animate={{ scale: 1 }}>{totalReward.toLocaleString()}</motion.span>
            </div>
          </div>
        )}
      </div>

      <div className="relative flex items-center justify-center w-[460px] h-[400px]">
        {phase === 'PACKING' && (
          <>
            <AnimatePresence>
              {mempoolTx.map((tx) => (
                <motion.div
                  key={tx.id}
                  layout
                  drag
                  dragConstraints={{ left: -220, right: 220, top: -190, bottom: 190 }}
                  onDrag={handleDragToGrid}
                  onDragEnd={(e, info) => handleDragEndToSlot(e, info, tx)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: tx.x, 
                    y: tx.y,
                    boxShadow: `0 0 ${tx.size/2}px rgba(20,184,166,${0.3 + tx.fee/1500})`
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileDrag={{ scale: 1.3, zIndex: 60, cursor: 'grabbing', boxShadow: `0 0 ${tx.size}px rgba(45,212,191,0.8)` }}
                  className="absolute cursor-grab flex flex-col items-center justify-center bg-slate-900 border-2 border-teal-500 text-white rounded-full z-10 transition-shadow"
                  style={{ width: tx.size, height: tx.size }}
                >
                  <Zap size={tx.size/2.5} className="text-teal-400 fill-teal-400" />
                  <span className="text-[7px] font-black mt-0.5">{tx.fee}</span>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className={`mt-35 w-[340px] h-36 border-4 border-dashed relative flex items-center justify-center gap-4 transition-all duration-300
              ${isHoveringGrid ? 'border-teal-500 bg-teal-500/10 scale-105' : (isDark ? 'border-slate-800 bg-slate-900/40' : 'border-slate-300 bg-slate-50')}
              ${isMerging ? 'scale-0 opacity-0' : 'opacity-1'}`}
            >
              {[0, 1, 2].map(i => (
                <div key={i} className={`w-[90px] h-[90px] border-2 border-dashed flex flex-col items-center justify-center relative transition-colors
                  ${isDark ? 'border-slate-700' : 'border-slate-200'}
                  ${slots[i] ? 'border-solid border-teal-500' : ''}`}>
                  {slots[i] ? (
                    <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-[74px] h-[74px] bg-teal-500 border-2 border-slate-900 flex flex-col items-center justify-center shadow-xl">
                      <Package size={28} className="text-white" />
                      <span className="text-[9px] font-black text-white mt-1">{slots[i]!.fee}</span>
                    </motion.div>
                  ) : (
                    <div className="text-[8px] font-black opacity-10 uppercase font-mono">SLOT_{i+1}</div>
                  )}
                </div>
              ))}
            </div>

            {isMerging && (
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                <motion.div animate={{ scale: [1, 1.5, 0], rotate: [0, 180, 360] }} transition={{ duration: 1.5, ease: "anticipate" }} className="w-40 h-40 bg-amber-400 border-8 border-slate-900 flex items-center justify-center">
                  <Package size={80} className="text-white" />
                </motion.div>
              </motion.div>
            )}
          </>
        )}

        {phase === 'PROPAGATION' && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full relative flex items-center justify-center">
            {Array.from({ length: totalNodes }).map((_, i) => {
              const angle = (i / totalNodes) * Math.PI * 2;
              const x = Math.cos(angle) * 160;
              const y = Math.sin(angle) * 160;
              const hasVoted = collectedKeys.includes(i);
              const isTarget = hoveredNode === i;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, x, y }} className={`absolute w-12 h-12 border-2 flex items-center justify-center z-10 transition-all duration-200 ${isDark ? 'border-slate-700' : 'border-slate-900'} ${hasVoted ? 'bg-slate-400 opacity-20 grayscale' : (isTarget ? 'bg-amber-400 scale-125 shadow-[0_0_20px_rgba(245,158,11,0.8)]' : (isDark ? 'bg-slate-800' : 'bg-white'))}`}><Database size={16} className={hasVoted ? 'text-slate-600' : (isTarget ? 'text-slate-900' : 'text-slate-500')} /></motion.div>
              );
            })}
            <div className={`w-36 h-36 border-4 z-20 flex flex-col items-center justify-center relative transition-all duration-500 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-900'} ${isQuorumAchieved ? 'bg-amber-500/10 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.5)] scale-105' : 'shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]'}`}>
              <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.4} onDrag={onDragProp} onDragEnd={onDragPropEnd} whileDrag={{ scale: 1.2, cursor: 'grabbing', zIndex: 40, rotate: 10 }} className={`w-20 h-20 border-2 flex flex-col items-center justify-center relative cursor-grab bg-teal-500 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] ${isQuorumAchieved ? 'bg-amber-400' : ''}`}><Package size={28} className="text-white" /><span className="text-[8px] font-black text-white mt-1">BATCH_LOADED</span></motion.div>
              {isQuorumAchieved && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-4 -right-4 bg-amber-500 p-1.5 border-2 border-slate-900 z-30"><CheckCircle2 size={20} className="text-white" /></motion.div>}
            </div>
            {activeKeyAnims.map(anim => (
              <motion.div key={anim.id} initial={{ x: anim.x, y: anim.y, opacity: 1, scale: 1.5, rotate: 0 }} animate={{ x: 0, y: 0, opacity: 0, scale: 0.5, rotate: 720 }} transition={{ duration: 0.7, ease: "backIn" }} className="absolute z-30"><Key size={26} className="text-amber-400 fill-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.8)]" /></motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="w-full max-w-md space-y-3 mt-4">
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-black font-mono uppercase tracking-widest text-slate-500">{phase === 'PACKING' ? t.packing_guide : (isQuorumAchieved ? t.quorum_achieved : 'DELIVER BATCH TO COLLECT PoA')}</span>
          <span className="text-[10px] font-mono font-bold">{phase === 'PACKING' ? `${slots.filter(s => s !== null).length}/3` : `${collectedKeys.length}/${totalNodes}`}</span>
        </div>
        <div className={`h-6 w-full border-4 p-1 relative transition-colors ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-900 bg-white'}`}>
          <motion.div animate={{ width: phase === 'PACKING' ? `${(slots.filter(s => s !== null).length / 3) * 100}%` : `${(collectedKeys.length / totalNodes) * 100}%` }} className={`h-full transition-colors ${phase === 'PACKING' ? 'bg-teal-500' : (collectedKeys.length >= quorumCount ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-teal-500')}`} />
          {phase === 'PROPAGATION' && <div className="absolute top-0 left-[66.6%] h-full w-1 bg-red-500 z-10"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-red-500 whitespace-nowrap uppercase">2/3 QUORUM</div></div>}
        </div>
      </div>
    </div>
  );
};

// --- Activity 3: Consensus ---
const ConsensusActivity = ({ isDark, lang, onComplete }: { isDark: boolean; lang: Language; onComplete: () => void }) => {
  const [voted, setVoted] = useState(0);
  const [showFlash, setShowFlash] = useState(false);
  const total = 12;
  const quorum = 8;

  useEffect(() => {
    if (voted >= quorum && !showFlash) {
      setShowFlash(true);
      setTimeout(() => setShowFlash(false), 500);
      setTimeout(() => onComplete(), 800);
    }
  }, [voted, showFlash, onComplete]);

  const isQuorumAchieved = voted >= quorum;

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-md relative">
      <AnimatePresence>
        {showFlash && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.2 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-teal-500 -m-20 z-0 pointer-events-none" 
          />
        )}
      </AnimatePresence>

      <div className="relative h-48 w-48 flex items-center justify-center">
        {/* Quorum Flash Ring */}
        <AnimatePresence>
          {showFlash && (
            <motion.div 
              initial={{ scale: 0.5, opacity: 1 }} 
              animate={{ scale: 2, opacity: 0 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.6 }} 
              className="absolute inset-0 border-2 border-teal-500 rounded-full z-0" 
            />
          )}
        </AnimatePresence>

        {Array.from({ length: total }).map((_, i) => {
          const angle = (i / total) * Math.PI * 2;
          const x = Math.cos(angle) * 80;
          const y = Math.sin(angle) * 80;
          return (
            <motion.div 
              key={i} 
              initial={{ scale: 0 }} 
              animate={{ scale: 1, x, y }} 
              className={`absolute h-6 w-6 border-2 transition-all ${isDark ? 'border-slate-700' : 'border-slate-900'} ${i < voted ? 'bg-teal-500 shadow-[0_0_12px_rgba(20,184,166,0.8)]' : (isDark ? 'bg-slate-800' : 'bg-white')}`} 
            />
          );
        })}
        <motion.div 
          animate={isQuorumAchieved ? { 
            boxShadow: ['0 0 0px rgba(20,184,166,0)', '0 0 30px rgba(20,184,166,0.8)', '0 0 0px rgba(20,184,166,0)']
          } : {}}
          transition={{ duration: 0.6, repeat: isQuorumAchieved ? Infinity : 0 }}
          className={`h-12 w-12 border-2 flex items-center justify-center transition-colors ${isQuorumAchieved ? 'bg-teal-500 border-teal-500' : 'bg-slate-900 border-slate-700'}`}
        >
           <Network size={20} className={isQuorumAchieved ? 'text-white' : 'text-teal-500'} />
        </motion.div>
      </div>
      <div className="w-full space-y-4 relative z-10">
        <div className={`h-4 w-full border-2 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-900'} ${isQuorumAchieved ? 'border-teal-500' : ''}`}>
          <motion.div 
            animate={{ width: `${(voted / total) * 100}%` }} 
            transition={{ duration: 0.3 }}
            className={`h-full transition-colors ${voted >= quorum ? 'bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.8)]' : 'bg-slate-700'}`} 
          />
          <motion.div 
            animate={isQuorumAchieved ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.7 }}
            transition={{ duration: 0.8, repeat: isQuorumAchieved ? Infinity : 0 }}
            className="absolute top-0 left-[66%] h-full w-0.5 bg-red-500"
          ></motion.div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-black font-mono">VOTES: {voted}/{total} (REQ: {quorum})</span>
          <motion.button 
            onClick={() => setVoted(prev => Math.min(prev + 1, total))} 
            disabled={isQuorumAchieved}
            whileHover={!isQuorumAchieved ? { scale: 1.05 } : {}}
            whileTap={!isQuorumAchieved ? { scale: 0.95 } : {}}
            className={`px-6 py-2 font-black text-[10px] border border-slate-700 uppercase transition-all ${isQuorumAchieved ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-slate-900 text-white hover:shadow-[4px_4px_0px_0px_rgba(20,184,166,1)] shadow-[4px_4px_0px_0px_rgba(20,184,166,0.5)]'}`}
          >
            {isQuorumAchieved ? (lang === 'ko' ? '합의 완료' : 'QUORUM_ACHIEVED') : (lang === 'ko' ? '투표 수집' : 'COLLECT_VOTE')}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

// --- Activity 4: Block-STM ---
const BlockSTMActivity = ({ isDark, lang, onComplete }: { isDark: boolean; lang: Language; onComplete: () => void }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cores, setCores] = useState(1);
  const [txCount, setTxCount] = useState(0);

  const toggleProcessing = () => {
    setIsProcessing(!isProcessing);
    if (isProcessing) {
      setTxCount(0);
    }
    if (!isProcessing) {
      onComplete();
    }
  };

  // TPS 카운터
  useEffect(() => {
    if (!isProcessing) return;
    
    const baseRate = 50; // core 1일 때 기본 처리량
    const rate = baseRate * cores;
    
    const interval = setInterval(() => {
      setTxCount(prev => prev + rate);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isProcessing, cores]);

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex gap-8 w-full max-w-4xl">
        {/* Transaction Processing Lanes */}
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-2 w-full">
            {Array.from({ length: cores }).map((_, lane) => (
              <div key={lane} className={`h-10 border-2 relative overflow-hidden flex items-center px-4 transition-colors ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-900'}`}>
                <div className="flex gap-4">
                  {isProcessing && Array.from({length: 12}).map((_, tx) => (
                    <motion.div key={tx} animate={{ x: [-100, 500] }} transition={{ duration: 3 / cores, repeat: Infinity, delay: tx * 0.1, ease: "linear" }} className="h-4 w-12 bg-teal-500 border border-slate-900" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Control Panel */}
        <div className="flex-1">
          <div className={`border-2 p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex flex-col gap-4 transition-colors h-full ${isDark ? 'bg-slate-900 border-slate-700 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'bg-white border-slate-900'}`}>
            {/* Core Selection */}
            <div className="space-y-2">
              <p className="text-[10px] font-black font-mono uppercase">CORES: {cores}</p>
              <div className="flex gap-1">
                {[1, 2, 4, 8].map(n => (
                  <button key={n} onClick={() => setCores(n)} disabled={isProcessing} className={`h-6 w-8 text-[9px] font-bold border transition-colors ${cores === n ? 'bg-teal-500 text-slate-900 border-slate-900' : (isDark ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-white border-slate-900 text-slate-900')} ${isProcessing ? 'cursor-not-allowed opacity-50' : ''}`}>x{n}</button>
                ))}
              </div>
            </div>

            {/* TX Counter */}
            <div className={`border-2 p-3 transition-colors ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-300'}`}>
              <p className="text-[9px] font-black font-mono uppercase text-slate-500 mb-1">{lang === 'ko' ? '처리되는 트랜잭션 수' : 'PROCESSED_TRANSACTIONS'}</p>
              <motion.p 
                key={txCount}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-2xl font-black text-teal-500"
              >
                {txCount.toLocaleString()}
              </motion.p>
              <p className="text-[8px] font-mono text-slate-500 mt-1">
                {lang === 'ko' ? `TPS: ${50 * cores}` : `TPS: ${50 * cores}`}
              </p>
            </div>

            {/* Start Button */}
            <div className="flex justify-end">
              <button onClick={toggleProcessing} className={`px-8 py-3 font-black text-[10px] border-2 transition-colors uppercase ${isProcessing ? 'bg-red-500 text-white' : 'bg-teal-500 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]'} ${isDark ? 'border-slate-700' : 'border-slate-900'}`}>{isProcessing ? (lang === 'ko' ? '정지' : 'STOP') : (lang === 'ko' ? 'Block-STM 가동' : 'START_BLOCK_STM')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Activity 5: Commit ---
const CommitActivity = ({ isDark, lang, onComplete }: { isDark: boolean; lang: Language; onComplete: () => void }) => {
  const [isCommitted, setIsCommitted] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  const handleCommit = () => {
    if (!isCommitted) {
      // 폭죽 생성 - 화면 전체에 분산
      const newConfetti = Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        startX: Math.random() * 100,
        startY: Math.random() * 100,
        delay: Math.random() * 0.3
      }));
      setConfetti(newConfetti);
      setIsCommitted(true);
      setTimeout(() => onComplete(), 1200);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 relative overflow-hidden">
      {/* Confetti */}
      <AnimatePresence>
        {confetti.map(c => (
          <motion.div
            key={c.id}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: c.x * 12,
              y: c.y * 12,
              opacity: 0,
              scale: 0,
              rotate: Math.random() * 720
            }}
            transition={{ duration: 1.2, delay: c.delay, ease: "easeOut" }}
            className="fixed pointer-events-none"
            style={{
              left: `${c.startX}%`,
              top: `${c.startY}%`,
              marginLeft: "-10px",
              marginTop: "-10px",
              zIndex: 999
            }}
          >
            <div className={`w-4 h-4 ${['bg-teal-500', 'bg-amber-500', 'bg-red-500', 'bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-pink-500'][c.id % 7]}`} />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className={`border-4 p-12 transition-all duration-500 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-900'} ${isCommitted ? 'shadow-[12px_12px_0px_0px_rgba(20,184,166,1)] scale-105' : 'shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]'}`}>
        <div className="flex flex-col items-center gap-6">
          <motion.div
            animate={isCommitted ? { rotate: 360, scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.8 }}
            className={`p-6 border-2 transition-colors ${isCommitted ? 'bg-teal-500 border-teal-500' : (isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-900')}`}
          >
            {isCommitted ? <Lock size={48} /> : <Database size={48} />}
          </motion.div>
          <div className="text-center space-y-1">
            <h4 className="text-[12px] font-black font-mono uppercase">LEDGER_STATE_ROOT</h4>
            <p className="text-[10px] font-mono text-slate-500">0x8a2...3f1e9</p>
          </div>
        </div>
      </div>
      <motion.button
        onClick={handleCommit}
        disabled={isCommitted}
        whileHover={!isCommitted ? { scale: 1.05 } : {}}
        whileTap={!isCommitted ? { scale: 0.95 } : {}}
        className={`px-12 py-4 font-black text-[12px] border-2 transition-all uppercase tracking-[0.2em] ${isDark ? 'border-slate-700' : 'border-slate-900'} ${isCommitted ? 'bg-slate-800 text-slate-600 cursor-not-allowed' : 'bg-slate-100 text-slate-900 shadow-[6px_6px_0px_0px_rgba(20,184,166,1)] hover:shadow-[8px_8px_0px_0px_rgba(20,184,166,1)]'}`}
      >
        {isCommitted ? (lang === 'ko' ? '기록 완료' : 'FINALIZED') : (lang === 'ko' ? '원장 기록' : 'COMMIT_TO_LEDGER')}
      </motion.button>
    </div>
  );
};

export default TransactionJourney;
