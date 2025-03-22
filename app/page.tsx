'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const funFacts = [
  {
    emoji: "₿",
    fact: "İlk Bitcoin pizza siparişi 10,000 BTC karşılığında verildi. Bugün bu miktar milyarlarca dolar değerinde!"
  },
  {
    emoji: "🚀",
    fact: "Ethereum'un kurucusu Vitalik Buterin, platformu 19 yaşındayken geliştirmeye başladı!"
  },
  {
    emoji: "💎",
    fact: "Kaybolan kripto cüzdanlarında yaklaşık 140 milyar dolar değerinde Bitcoin var!"
  },
  {
    emoji: "⚡",
    fact: "Solana saniyede 65,000 işlem gerçekleştirebiliyor!"
  },
  {
    emoji: "📚",
    fact: "Cardano, akademik araştırma makaleleriyle desteklenen ilk blockchain projesidir!"
  },
  {
    emoji: "🌍",
    fact: "Dünyada sadece 21 milyon Bitcoin olabilir, şu ana kadar 19 milyondan fazlası çıkarıldı!"
  },
  {
    emoji: "🎮",
    fact: "NFT oyun pazarının 2025'e kadar 13 milyar dolara ulaşması bekleniyor!"
  },
  {
    emoji: "🔐",
    fact: "Bitcoin ağı o kadar güçlü ki, dünyadaki tüm süper bilgisayarlar birleşse bile kıramaz!"
  }
];

// Animasyon varyantları
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const coinAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8
    } 
  }
};

export default function Home() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFactIndex((prevIndex) => 
        prevIndex === funFacts.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000); // 15 saniye

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden w-full bg-[#0A0F29]">
      {/* Animasyonlu Gradient Arka Plan */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/80 via-[#0A0F29] to-[#0A0F29]"></div>
      
      {/* Animasyonlu Parçacıklar */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Izgara Arka Plan */}
      <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      {/* Ana İçerik */}
      <div className="relative min-h-screen flex flex-col items-center justify-center w-full px-0 pt-20">
        {/* Üst Gezinme Çubuğu */}
        <motion.div 
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/10 border-b border-white/10"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                CryptoPersona
              </span>
            </Link>

            {/* Sağ Menü */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Özellikler
              </a>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Kaynaklar
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2">
                  <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">
                    CoinGecko
                  </a>
                  <a href="https://www.tradingview.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">
                    TradingView
                  </a>
                  <a href="https://coinmarketcap.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg">
                    CoinMarketCap
                  </a>
                </div>
              </div>
              
              {/* Teste Başla Butonu */}
              <Link 
                href="/test"
                className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-xl hover:shadow-purple-500/25"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur opacity-50 group-hover:opacity-75 transition-opacity"></span>
                <span className="relative flex items-center">
                  Teste Başla
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Hero Bölümü */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto mt-16 mb-24 px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Sol Taraf - Metin İçeriği */}
          <motion.div className="flex-1 text-left z-10" variants={fadeInUp}>
            <motion.div 
              className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
              variants={fadeInUp}
            >
              Kripto Dünyasını Keşfet
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Kripto Kişilik
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Testine Hoş Geldin!
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
              variants={fadeInUp}
            >
              Hangi kripto para karakterine sahip olduğunu öğrenmek için hemen teste başla! 
              <span className="block mt-2 text-purple-300 font-medium">20 soru. Sınırsız olasılık. Senin coinin hangisi?</span>
            </motion.p>
            
            {/* CTA Butonları */}
            <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
              <Link 
                href="/test"
                className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-xl hover:shadow-purple-500/25"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur opacity-50 group-hover:opacity-75 transition-opacity"></span>
                <span className="relative flex items-center">
                  Teste Başla
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <a 
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full"
              >
                Daha Fazla Bilgi
              </a>
            </motion.div>
          </motion.div>
          
          {/* Sağ Taraf - 3D Coin Animasyonları */}
          <motion.div 
            className="flex-1 flex justify-center items-center relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px]"
            variants={coinAnimation}
          >
            {/* Bitcoin */}
            <div className="relative w-64 h-64 md:w-64 md:h-64 sm:w-48 sm:h-48">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-[0_0_50px_rgba(234,179,8,0.5)] flex items-center justify-center"
                animate={{ 
                  rotateY: [0, 360],
                  scale: isHovering ? 1.05 : 1
                }}
                transition={{ 
                  rotateY: { 
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear"
                  },
                  scale: {
                    duration: 0.3
                  }
                }}
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 flex items-center justify-center">
                  <span className="text-8xl md:text-8xl sm:text-6xl font-bold text-yellow-900">₿</span>
                </div>
              </motion.div>
              
              {/* Coin Gölgesi */}
              <motion.div 
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black/30 rounded-full filter blur-md"
                animate={{ 
                  width: isHovering ? "50%" : "40%",
                  opacity: isHovering ? 0.4 : 0.3
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>

            {/* Ethereum - Mobil cihazlarda gizlenecek veya konumu değişecek */}
            <div className="absolute top-10 -left-10 w-32 h-32 md:block sm:w-24 sm:h-24 sm:top-0 sm:left-0 hidden md:block">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center justify-center"
                animate={{ 
                  rotateY: [0, 360],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  rotateY: { 
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear"
                  },
                  y: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-300 to-indigo-500 flex items-center justify-center">
                  <span className="text-4xl md:text-4xl sm:text-3xl font-bold text-indigo-900">⟠</span>
                </div>
              </motion.div>
            </div>

            {/* Solana - Mobil cihazlarda gizlenecek veya konumu değişecek */}
            <div className="absolute bottom-0 -right-5 w-40 h-40 md:block sm:w-28 sm:h-28 sm:bottom-0 sm:right-0 hidden md:block">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center justify-center"
                animate={{ 
                  rotateZ: [0, 360],
                  y: [0, 8, 0]
                }}
                transition={{ 
                  rotateZ: { 
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear"
                  },
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-300 to-purple-500 flex items-center justify-center">
                  <span className="text-5xl md:text-5xl sm:text-3xl font-bold text-purple-900">◎</span>
                </div>
              </motion.div>
            </div>

            {/* Cardano - Mobil cihazlarda gizlenecek */}
            <div className="absolute -top-5 right-10 w-24 h-24 hidden md:block">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center"
                animate={{ 
                  rotateX: [0, 360],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  rotateX: { 
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear"
                  },
                  x: {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-900">₳</span>
                </div>
              </motion.div>
            </div>

            {/* Binance Coin - Mobil cihazlarda gizlenecek */}
            <div className="absolute -bottom-10 left-10 w-28 h-28 hidden md:block">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_30px_rgba(251,191,36,0.5)] flex items-center justify-center"
                animate={{ 
                  rotateZ: [0, -360],
                  x: [0, -7, 0]
                }}
                transition={{ 
                  rotateZ: { 
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear"
                  },
                  x: {
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center">
                  <span className="text-3xl font-bold text-amber-900">Ƀ</span>
                </div>
              </motion.div>
            </div>

            {/* Mobil için Ethereum (Alternatif Konum) */}
            <div className="absolute -top-16 right-0 w-24 h-24 block sm:block md:hidden">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center justify-center"
                animate={{ 
                  rotateY: [0, 360],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  rotateY: { 
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear"
                  },
                  y: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-indigo-300 to-indigo-500 flex items-center justify-center">
                  <span className="text-3xl font-bold text-indigo-900">⟠</span>
                </div>
              </motion.div>
            </div>

            {/* Mobil için Solana (Alternatif Konum) */}
            <div className="absolute -bottom-16 left-0 w-28 h-28 block sm:block md:hidden">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.5)] flex items-center justify-center"
                animate={{ 
                  rotateZ: [0, 360],
                  y: [0, 8, 0]
                }}
                transition={{ 
                  rotateZ: { 
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear"
                  },
                  y: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-300 to-purple-500 flex items-center justify-center">
                  <span className="text-3xl font-bold text-purple-900">◎</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Özellikler Bölümü */}
        <div 
          id="features" 
          className="w-full py-20 bg-[#0A0F29]"
          style={{
            background: "linear-gradient(180deg, rgba(76, 29, 149, 0.1) 0%, rgba(147, 51, 234, 0.15) 50%, #0A0F29 100%)"
          }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Neden Kripto Kişilik Testi?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            <motion.div 
              className="group relative bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:shadow-purple-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute -top-6 left-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                  <span className="text-3xl">🎯</span>
                </div>
              </div>
              <div className="pt-10">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                  Kişiselleştirilmiş
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Size özel kripto coin önerileri ve yatırım stratejileri sunuyoruz. Kişiliğinize ve risk toleransınıza göre özelleştirilmiş sonuçlar alın.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shadow-xl hover:shadow-blue-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -top-6 left-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                  <span className="text-3xl">🎮</span>
                </div>
              </div>
              <div className="pt-10">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Eğlenceli
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Eğlenceli sorularla kripto dünyasını keşfedin ve öğrenin. Sıkıcı finansal testlerin aksine, keyifli bir deneyimle bilgi edinebilirsiniz.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-xl p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 shadow-xl hover:shadow-amber-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute -top-6 left-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                  <span className="text-3xl">🌟</span>
                </div>
              </div>
              <div className="pt-10">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                  Paylaşılabilir
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Test sonuçlarınızı arkadaşlarınızla paylaşın ve karşılaştırın. Sosyal medyada paylaşabileceğiniz özel tasarlanmış sonuç kartları.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Fun Fact Bölümü */}
        <motion.div 
          className="w-full py-20 bg-[#0A0F29]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto px-4">
            <motion.div 
              className="relative bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl p-10 rounded-2xl border border-indigo-500/20 shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* Arka Plan Efekti */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
              
              <div className="relative flex flex-col items-center text-center">
                <motion.div 
                  className="text-6xl mb-6"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {funFacts[currentFactIndex].emoji}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Bunu Biliyor Muydunuz?
                </h3>
                <motion.p 
                  className="text-gray-200 text-xl leading-relaxed max-w-2xl"
                  key={currentFactIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {funFacts[currentFactIndex].fact}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Bölümü */}
        <motion.div 
          className="w-full py-20 bg-[#0A0F29]"
          style={{
            background: "linear-gradient(180deg, #0A0F29 0%, rgba(147, 51, 234, 0.1) 50%, #0A0F29 100%)"
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Kripto Kişiliğini Keşfetmeye Hazır Mısın?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Sadece birkaç dakika sürecek bu test ile hangi kripto para karakterine sahip olduğunu öğren ve kişiselleştirilmiş yatırım önerilerini al.
            </p>
            <Link 
              href="/test"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-xl hover:shadow-purple-500/25"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur opacity-50 group-hover:opacity-75 transition-opacity"></span>
              <span className="relative flex items-center">
                Hemen Teste Başla
                <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="w-full py-10 border-t border-white/10 bg-[#0A0F29]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">CryptoPersona</span>
                <p className="text-gray-400 mt-2">Kripto kişilik testiniz</p>
              </div>
              <div className="text-gray-400 text-sm">
                <p>Kripto yatırımları risk içerir. Test sonuçları sadece eğlence amaçlıdır.</p>
                <p className="mt-2">© {new Date().getFullYear()} CryptoPersona. Tüm hakları saklıdır.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}