/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode, ReactNode, useEffect, useState } from 'react';
import { 
  Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award, Languages, 
  Car, ChevronRight, Download, CheckCircle2, User, Heart, Target, ArrowUpRight, 
  Sparkles, Globe, Clock, Zap, TrendingUp, Users, PhoneCall, Database, PieChart, 
  Activity, Rocket, ShieldCheck, Star, Terminal, LineChart
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

// --- DATA ENRICHED FOR INFOGRAPHICS ---
const RESUME_DATA = {
  name: "Иван Родин",
  title: "Business Development Manager",
  subtitle: "Менеджер по продажам и развитию бизнеса (B2B, Enterprise)",
  personal: {
    age: "33 года",
    birthDate: "9 января 1993",
    location: "Москва",
    citizenship: "Россия",
    workPermit: "Россия",
    relocation: "готов к переезду, редким командировкам",
    employment: "Полная занятость",
    schedule: "Полный день"
  },
  contacts: {
    phone: "+7 (903) 292 95 03",
    email: "ivanrodin@live.ru",
    preferred: "Телефон"
  },
  stats: [
    { label: "Лет опыта", value: "10+", icon: Briefcase, color: "from-blue-400 to-blue-600" },
    { label: "Сумма контрактов", value: "100м+", suffix: "₽", icon: TrendingUp, color: "from-emerald-400 to-emerald-600" },
    { label: "Цикл сделки", value: "3-6+", suffix: "мес", icon: Clock, color: "from-purple-400 to-purple-600" },
    { label: "Сегмент", value: "B2B", suffix: "Ent", icon: Building2Icon, color: "from-orange-400 to-orange-600" }
  ],
  skills: [
    { name: "Enterprise sales", value: 95, icon: Target },
    { name: "Выход на ЛПР / C-level", value: 95, icon: Users },
    { name: "Тендерные процедуры", value: 90, icon: ShieldCheck },
    { name: "Pre-sale & Координация", value: 88, icon: Rocket },
    { name: "Управление воронкой", value: 92, icon: LineChart },
    { name: "CRM (Битрикс24)", value: 90, icon: Database },
    { name: "Презентации (PowerPoint)", value: 85, icon: Star },
    { name: "Аналитика (Excel)", value: 80, icon: PieChart }
  ],
  languages: [
    { name: "Русский", level: "Родной", value: 100 },
    { name: "Английский", level: "B2", value: 75 }
  ],
  experience: [
    {
      period: "Ноя 2025 — Мар 2026",
      duration: "5 месяцев",
      company: "ICL Soft (ГК ICL)",
      location: "Москва",
      industry: "Разработка ПО, внедрение систем, IT-услуги",
      role: "Business Development Manager",
      duties: [
        "Развитие отношений с корпоративными клиентами: выход на ЛПР и C-level",
        "Продвижение продуктовых и кастомных IT-решений",
        "Подготовка КП совместно с pre-sale и техническими командами",
        "Подготовка тендерной и конкурсной документации",
        "Координация взаимодействия внутренних команд для достижения целей"
      ],
      metrics: [
        { label: "Сегмент", value: "Enterprise" }
      ],
      results: [
        "Формирование новых коммерческих возможностей",
        "Сформировал воронку целевых клиентов",
        "Участвовал в тендерных/закупочных процедурах"
      ]
    },
    {
      period: "Янв 2024 — Дек 2024",
      duration: "1 год",
      company: "Optimacros",
      location: "Москва",
      industry: "PaaS-платформа для анализа больших данных и планирования",
      role: "Business Development Manager",
      duties: [
        "Полный цикл продаж, включая pre-sale",
        "Постановка задач и контроль: интеграция (3), pre-sale (4), back-office (2)",
        "Анализ рынка, формирование ICP (портрета идеального клиента)",
        "Квалификация inbound/outbound лидов"
      ],
      metrics: [
        { label: "Средний чек", value: "от 10 млн ₽" },
        { label: "Цикл сделки", value: "от 3 до 6+ мес" },
        { label: "Сегмент", value: "Big Pharma, FMCG" }
      ],
      results: [
        "Разработал стратегию продаж",
        "Победы в тендерах (FMCG-лидеры), сумма контрактов ~100 млн ₽",
        "Выстроил процессы внутри команды и кросс-функционально",
        "Глубоко проработал 70+ компаний из РБК-500"
      ]
    },
    {
      period: "Июн 2023 — Окт 2023",
      duration: "5 месяцев",
      company: "VEA (vea.dev)",
      location: "Москва",
      industry: "SaaS (CRM/ERP для полиграфии) + заказная IT-разработка",
      role: "Business Development Manager",
      duties: [
        "Самостоятельный поиск клиентов (outbound), развитие продаж SaaS",
        "Выход на ЛПР, выявление/формирование потребности, переговоры",
        "Подготовка КП/ТКП, ведение отчётности и CRM (Битрикс24)"
      ],
      metrics: [
        { label: "Цикл сделки", value: "3+ месяца" },
        { label: "Сегмент", value: "SMB" }
      ],
      results: [
        "Закрыл продажи, включая клиентов, ранее отказывавшихся от сервиса",
        "Подготовил тексты рассылок с учётом позиционирования",
        "Актуализировал и настроил CRM"
      ]
    },
    {
      period: "Май 2018 — Июн 2023",
      duration: "5 лет 2 месяца",
      company: "ЭМ ТИ СИ КОМПАНИ",
      location: "Москва",
      industry: "Корпоративное обучение, LMS, IT-разработка",
      role: "Business Development Manager",
      duties: [
        "Организация встреч, анализ профиля клиента",
        "Подготовка предложений/презентаций, проработка концепций",
        "Многоэтапные продажи, ведение клиентов, наполнение воронки"
      ],
      metrics: [
        { label: "Цикл сделки", value: "6+ месяцев" },
        { label: "Секторы", value: "Pharma, FMCG, Retail, IT" }
      ],
      results: []
    },
    {
      period: "Июл 2015 — Май 2018",
      duration: "2 года 11 месяцев",
      company: "Псайма Групп (psyma.com)",
      location: "Москва",
      industry: "Маркетинговые исследования",
      role: "Менеджер по развитию бизнеса",
      duties: [
        "Маркетинговый анализ, участие в стратегии развития",
        "Мониторинг и участие в целевых тендерах",
        "Переговоры на уровне первых лиц, презентации",
        "Поиск партнёров, участие в выставках, холодные звонки"
      ],
      metrics: [],
      results: []
    },
    {
      period: "Ноя 2012 — Мар 2013",
      duration: "5 месяцев",
      company: "БИНБАНК",
      location: "Москва",
      industry: "Банковский сектор",
      role: "Главный менеджер департамента международного бизнеса",
      duties: [
        "Привлечение крупных корпоративных клиентов",
        "Первичный финанализ, подготовка документов для кредитного комитета"
      ],
      metrics: [
        { label: "Оборот", value: "900+ млн ₽" }
      ],
      results: [
        "Реализовал 15 крупных кредитных сделок",
        "Сформировал клиентскую базу"
      ]
    },
    {
      period: "Июл 2012 — Окт 2012",
      duration: "4 месяца",
      company: "Сбербанк России",
      location: "Москва",
      industry: "Банковский сектор",
      role: "Специалист отдела по работе с предприятиями",
      duties: [
        "Продажи розничных банковских продуктов, переговоры с партнёрами"
      ],
      metrics: [],
      results: [
        "Реализовал 300+ единиц кредитных продуктов"
      ]
    }
  ],
  education: {
    year: "2014",
    institution: "МГСУ (НИУ)",
    faculty: "Экономика и управление",
    degree: "Специалист"
  },
  courses: [
    { year: "2012–2013", name: "Банковские продукты, кредитование корпоративных клиентов", org: "Сертификаты/обучение" }
  ],
  personalQualities: [
    "Enterprise Sales", "Account Planning", "Discovery", 
    "Тендерные закупки", "Кросс-функциональная координация"
  ],
  hobbies: ["Права: категория B"]
};

// Helper icon for stats
function Building2Icon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
    </svg>
  );
}

// --- COMPONENTS ---

const AnimatedCounter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  return (
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="inline-block"
    >
      {value}<span className="text-2xl ml-1 text-slate-500">{suffix}</span>
    </motion.span>
  );
};

const CircularProgress = ({ value, label, sublabel }: { value: number, label: string, sublabel: string, key?: any }) => {
  const circumference = 2 * Math.PI * 38; // r=38
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors group">
      <div className="relative w-24 h-24 mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="48" cy="48" r="38" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-700" />
          <motion.circle 
            cx="48" cy="48" r="38" 
            stroke="currentColor" 
            strokeWidth="8" 
            fill="transparent" 
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-xl font-black text-white">{value}%</span>
        </div>
      </div>
      <h4 className="text-white font-bold text-center mb-1">{label}</h4>
      <p className="text-xs text-cyan-400 font-medium text-center uppercase tracking-wider">{sublabel}</p>
    </div>
  );
};

const SkillBar = ({ skill, index }: { skill: any, index: number, key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group"
  >
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <div className="p-1.5 bg-slate-800 rounded-lg text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
          <skill.icon size={14} />
        </div>
        <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
      </div>
      <span className="text-xs font-black text-slate-500 group-hover:text-cyan-400 transition-colors">{skill.value}%</span>
    </div>
    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 relative"
      >
        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/20 blur-[2px]"></div>
      </motion.div>
    </div>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-cyan-500/30 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none print:hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen"></div>
        <motion.div style={{ y: yBackground }} className="absolute top-[30%] left-[60%] w-[30%] h-[30%] rounded-full bg-purple-900/10 blur-[100px] mix-blend-screen"></motion.div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 print:hidden">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-7xl mx-auto bg-slate-900/60 backdrop-blur-xl rounded-2xl px-6 py-3 flex justify-between items-center border border-slate-800 shadow-2xl shadow-black/50"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-cyan-500/20">Р</div>
            <div className="hidden sm:block">
              <p className="font-bold text-white leading-none">Родин Иван</p>
              <p className="text-[10px] text-cyan-400 uppercase font-bold tracking-widest mt-1">Резюме</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-950 hover:bg-cyan-50 rounded-xl transition-all text-sm font-bold shadow-lg shadow-white/10 active:scale-95 group"
            >
              <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              <span>Скачать PDF</span>
            </button>
          </div>
        </motion.div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 print:pt-0 print:text-black print:bg-white">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-cyan-500/20 backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Открыт для предложений
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                Привет, я <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                  {RESUME_DATA.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium tracking-tight mb-8 max-w-2xl">
                BDM с 10+ годами опыта в B2B-продажах и развитии бизнеса в IT/услугах: enterprise-сделки, длинные циклы продаж (3–6+ месяцев), тендеры/закупки, работа с C-level, пресейл и координация кросс‑функциональных команд.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-300">
                <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-800 backdrop-blur-sm">
                  <MapPin size={16} className="text-cyan-400" />
                  {RESUME_DATA.personal.location}
                </div>
                <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-800 backdrop-blur-sm">
                  <Globe size={16} className="text-cyan-400" />
                  Гражданство РФ
                </div>
                <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-800 backdrop-blur-sm">
                  <Car size={16} className="text-cyan-400" />
                  {RESUME_DATA.personal.relocation}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-[spin_10s_linear_infinite] print:hidden"></div>
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-blue-500/20 animate-[spin_15s_linear_infinite_reverse] print:hidden"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse print:hidden"></div>
              
              <img 
                src="/photo.jpg" 
                alt={RESUME_DATA.name}
                referrerPolicy="no-referrer"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/seed/ivan-rodin/400/400"; }}
                className="relative w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-2xl z-10"
              />
              
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}
                className="absolute bottom-4 right-4 bg-slate-900 p-3 rounded-2xl border border-slate-700 shadow-xl z-20 flex items-center gap-2"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Online</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* INFOGRAPHIC STATS ROW */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {RESUME_DATA.stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-6 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity -mr-10 -mt-10`}></div>
              <stat.icon className="text-slate-500 mb-4 group-hover:text-white transition-colors" size={24} />
              <div className="text-4xl font-black text-white mb-1 tracking-tighter">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: EXPERIENCE TIMELINE */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight">Опыт работы</h2>
              </div>

              <div className="relative border-l-2 border-slate-800 ml-6 space-y-12 pb-4">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative pl-10 group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute -left-[11px] top-2 w-5 h-5 bg-slate-950 border-4 border-slate-700 rounded-full group-hover:border-cyan-400 transition-colors z-10">
                      <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-slate-800 text-cyan-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-slate-700">
                        {exp.period}
                      </span>
                      <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                        <Clock size={12} /> {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors">{exp.company}</h3>
                    <p className="text-lg font-bold text-slate-400 mb-4">{exp.role}</p>

                    {/* Industry Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50 mb-6">
                      <Globe size={14} className="text-slate-500" />
                      <span className="text-xs font-medium text-slate-300">{exp.industry}</span>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 gap-6">
                      {/* Duties */}
                      <div>
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                          <Terminal size={12} /> Задачи
                        </h4>
                        <ul className="space-y-2">
                          {exp.duties.map((duty, dIdx) => (
                            <li key={dIdx} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                              <ChevronRight size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                              {duty}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Infographic Metrics Row */}
                      {exp.metrics && exp.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {exp.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="px-4 py-2 bg-slate-950 rounded-xl border border-slate-800 flex flex-col">
                              <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest">{metric.label}</span>
                              <span className="text-sm font-bold text-white">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Results */}
                      {exp.results && (
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 p-5 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                          <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                            <Award size={14} /> Достижения
                          </h4>
                          <ul className="space-y-2 relative z-10">
                            {exp.results.map((res, rIdx) => (
                              <li key={rIdx} className="flex gap-3 text-white text-sm font-bold leading-relaxed">
                                <CheckCircle2 size={16} className="text-green-400 shrink-0 mt-0.5" />
                                {res}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Education Bento */}
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight">Образование</h2>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 mb-8">
                <div>
                  <h3 className="text-xl font-black text-white mb-1">{RESUME_DATA.education.institution}</h3>
                  <p className="text-purple-400 font-bold mb-1">{RESUME_DATA.education.faculty}</p>
                  <p className="text-slate-400 text-sm">{RESUME_DATA.education.degree}</p>
                </div>
                <span className="px-4 py-2 bg-slate-950 text-white text-xs font-black rounded-xl border border-slate-800">{RESUME_DATA.education.year}</span>
              </div>

              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Повышение квалификации</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESUME_DATA.courses.map((course, idx) => (
                  <div key={idx} className="flex gap-3 items-center p-3 bg-slate-950/50 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors">
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                      <Award size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight mb-0.5 line-clamp-1">{course.name}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black text-purple-400">{course.year}</span>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{course.org}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SKILLS & INFO BENTO */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Bento */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-cyan-500/30 transition-colors"></div>
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3 relative z-10">
                <Zap size={20} className="text-cyan-400" />
                Связь
              </h3>
              <div className="space-y-6 relative z-10">
                <a href={`tel:${RESUME_DATA.contacts.phone}`} className="flex flex-col group/item">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em] mb-1">Телефон</span>
                  <span className="text-xl font-black text-white group-hover/item:text-cyan-400 transition-colors flex items-center gap-2">
                    {RESUME_DATA.contacts.phone}
                    <ArrowUpRight size={18} className="opacity-0 group-hover/item:opacity-100 transition-all" />
                  </span>
                </a>
                <a href={`mailto:${RESUME_DATA.contacts.email}`} className="flex flex-col group/item">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em] mb-1">Email</span>
                  <span className="text-xl font-black text-white group-hover/item:text-cyan-400 transition-colors flex items-center gap-2">
                    {RESUME_DATA.contacts.email}
                    <ArrowUpRight size={18} className="opacity-0 group-hover/item:opacity-100 transition-all" />
                  </span>
                </a>
                <div className="pt-4 flex gap-3">
                  <div className="px-4 py-2 bg-slate-950 rounded-xl text-xs font-black uppercase tracking-widest border border-slate-800 text-white hover:border-green-500/50 transition-colors cursor-pointer">WhatsApp</div>
                  <div className="px-4 py-2 bg-slate-950 rounded-xl text-xs font-black uppercase tracking-widest border border-slate-800 text-white hover:border-blue-500/50 transition-colors cursor-pointer">Telegram</div>
                </div>
              </div>
            </div>

            {/* Skills Infographic Bento */}
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20">
                  <Target size={24} />
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight">Компетенции</h2>
              </div>
              <div className="space-y-5">
                {RESUME_DATA.skills.map((skill, idx) => (
                  <SkillBar key={idx} skill={skill} index={idx} />
                ))}
              </div>
            </div>

            {/* Languages Infographic */}
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <Languages size={24} />
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight">Языки</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {RESUME_DATA.languages.map((lang, idx) => (
                  <CircularProgress key={idx} value={lang.value} label={lang.name} sublabel={lang.level} />
                ))}
              </div>
            </div>

            {/* Personal Info Bento */}
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <User size={14} /> Личные качества
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.personalQualities.map((q, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-xl border border-slate-700">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Heart size={14} /> Интересы
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.hobbies.map((h, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-slate-950 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-lg border border-slate-800">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-3 text-white font-bold text-sm">
                    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 border border-slate-700">
                      <Car size={18} />
                    </div>
                    <span>Водительское удостоверение (кат. B)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 mt-12 relative z-10 print:hidden bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="text-white font-black text-lg leading-none">Родин Иван</p>
              <p className="text-slate-500 text-xs font-medium mt-1">Обновлено в сентябре 2025</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href={`mailto:${RESUME_DATA.contacts.email}`} className="w-10 h-10 bg-slate-900 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-400 rounded-xl flex items-center justify-center transition-all border border-slate-800 hover:border-cyan-500/30">
              <Mail size={18} />
            </a>
            <a href={`tel:${RESUME_DATA.contacts.phone}`} className="w-10 h-10 bg-slate-900 hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-400 rounded-xl flex items-center justify-center transition-all border border-slate-800 hover:border-cyan-500/30">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Print Styles Overrides */}
      <style>{`
        @media print {
          body { background-color: white !important; color: black !important; }
          .bg-slate-950, .bg-slate-900\\/40, .bg-slate-900, .bg-slate-800, .bg-slate-950\\/50 { background-color: white !important; }
          .text-white, .text-slate-300, .text-slate-400 { color: black !important; }
          .text-cyan-400, .text-purple-400, .text-blue-400 { color: #0284c7 !important; }
          .border-slate-800, .border-slate-700 { border-color: #e2e8f0 !important; }
          .max-w-7xl, .max-w-6xl { max-width: 100% !important; padding: 0 !important; }
          main { padding-top: 0 !important; }
          header, footer, .print\\:hidden { display: none !important; }
          section, .grid > div { page-break-inside: avoid; }
          .shadow-sm, .shadow-lg, .shadow-2xl, .shadow-xl { box-shadow: none !important; }
          .blur-3xl, .blur-2xl, .blur-sm { display: none !important; }
        }
      `}</style>
    </div>
  );
}
