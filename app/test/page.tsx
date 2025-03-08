'use client';

import { useState, useEffect } from 'react';
import { questions, coinPersonalities, CoinPersonality } from '../data/questions';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Yardımcı fonksiyonlar
const getCoinEmoji = (coinId: string): string => {
  const emojiMap: Record<string, string> = {
    bitcoin: "₿",
    ethereum: "⟠",
    pepe: "🐸",
    eigen: "🤖",
    zksync: "⚡",
    bnb: "⭐",
    binance: "⭐",
    solana: "☀️",
    cardano: "🔬",
    arbitrum: "🌈",
    pengu: "🐧",
    penguin: "🐧",
    aptos: "🚀",
    rndr: "🎮",
    render: "🎮",
    sui: "🌟",
    optimism: "✨",
    chainlink: "🔗",
    polygon: "💫",
    // Yeni eklenen coinler
    dogecoin: "🐕",
    doge: "🐕",
    shiba: "🐕‍🦺",
    shibainu: "🐕‍🦺",
    polkadot: "🔴",
    dot: "🔴",
    cosmos: "🌌",
    atom: "🌌",
    monero: "🔒",
    xmr: "🔒",
    ripple: "💧",
    xrp: "💧",
    litecoin: "🥈",
    ltc: "🥈",
    avalanche: "❄️",
    avax: "❄️",
    near: "🌐",
    vechain: "🔗",
    vet: "🔗",
    uniswap: "🦄",
    uni: "🦄",
    aave: "👻",
    filecoin: "📁",
    fil: "📁",
    sandbox: "🏝️",
    sand: "🏝️",
    axie: "🎮",
    axieinfinity: "🎮",
    axs: "🎮",
    floki: "🐕",
    hedera: "♦️",
    hbar: "♦️",
    algorand: "🔷",
    algo: "🔷",
    default: "🪙"
  };
  
  // Coin ID'sini normalize et
  const normalizedId = coinId.toLowerCase();
  
  // Özel durumlar için kontrol
  if (normalizedId.includes('pengu')) return emojiMap['pengu'];
  if (normalizedId.includes('rndr') || normalizedId.includes('render')) return emojiMap['rndr'];
  if (normalizedId.includes('bnb') || normalizedId.includes('binance')) return emojiMap['bnb'];
  if (normalizedId.includes('doge')) return emojiMap['dogecoin'];
  if (normalizedId.includes('shiba')) return emojiMap['shiba'];
  if (normalizedId.includes('dot') || normalizedId.includes('polka')) return emojiMap['polkadot'];
  if (normalizedId.includes('cosmos') || normalizedId.includes('atom')) return emojiMap['cosmos'];
  if (normalizedId.includes('monero') || normalizedId.includes('xmr')) return emojiMap['monero'];
  if (normalizedId.includes('ripple') || normalizedId.includes('xrp')) return emojiMap['ripple'];
  if (normalizedId.includes('lite') || normalizedId.includes('ltc')) return emojiMap['litecoin'];
  if (normalizedId.includes('avalanche') || normalizedId.includes('avax')) return emojiMap['avalanche'];
  if (normalizedId.includes('axie') || normalizedId.includes('axs')) return emojiMap['axie'];
  if (normalizedId.includes('algo')) return emojiMap['algorand'];
  
  return emojiMap[normalizedId] || emojiMap.default;
};

const getTraitEmoji = (trait: string): string => {
  const emojiMap: Record<string, string> = {
    "Güvenlik Odaklı": "🔒",
    "Sabırlı": "⏳",
    "Risk Sevmeyen": "🛡️",
    "Kararlı": "🎯",
    "Yenilikçi": "💡",
    "Teknoloji Odaklı": "💻",
    "Ekosistem Sever": "🌐",
    "Vizyoner": "🔭",
    "Teknoloji Meraklısı": "⚡",
    "Analitik": "📊",
    "İleri Görüşlü": "🔮",
    "Eğlenceli": "🎉",
    "Risk Sever": "🎲",
    "Topluluk Odaklı": "👥",
    "Dinamik": "🌪️",
    "Gizlilik Odaklı": "🕵️",
    "Teknik": "⚙️",
    "Güvenlik Sever": "🛡️",
    "Dengeli": "⚖️",
    "Pratik": "🛠️",
    "Ekosistem Odaklı": "🌍",
    "Stratejik": "♟️",
    "Hızlı": "⚡",
    "Performans Odaklı": "🏃",
    "Akademik": "📚",
    "Sürdürülebilir": "♻️",
    "Araştırmacı": "🔍",
    "Metodolojik": "📐",
    "Ethereum Dostu": "Ξ",
    "Verimli": "⚡",
    "Bağlantılı": "🔗",
    "Güvenilir": "✅",
    "Altyapı Odaklı": "🏗️",
    "Temel": "🎯",
    "Çok Yönlü": "🎭",
    "Ölçeklenebilir": "📈",
    "Adaptif": "🔄",
    "Modern": "🎨",
    "DAO Sever": "🏛️",
    "Yaratıcı": "🎨",
    "İlerici": "➡️",
    "Gelişimci": "📱",
    "Deneyimli": "🎓",
    default: "✨"
  };
  return emojiMap[trait] || emojiMap.default;
};

const getInvestmentStyle = (coinId: string): string => {
  const styleMap: Record<string, string> = {
    bitcoin: "Uzun vadeli, güvenli liman arayan bir yatırımcısınız. Volatiliteye karşı dayanıklısınız.",
    ethereum: "Teknoloji odaklı, yenilikçi projelere ilgi duyuyorsunuz. Akıllı kontratlar ve DeFi sizin alanınız.",
    pepe: "Trend ve topluluk odaklı hareket ediyorsunuz. Hızlı kazanç fırsatlarını değerlendirmeyi seviyorsunuz.",
    eigen: "Yapay zeka ve yeni teknolojilere ilgi duyuyorsunuz. İnovatif projeleri yakından takip ediyorsunuz.",
    zksync: "Ölçeklenebilirlik ve gizlilik odaklı projelere ilgi duyuyorsunuz. Layer 2 çözümlerini takip ediyorsunuz.",
    bnb: "Pratik ve dengeli bir portföy yöneticisisin 📊",
    solana: "Hızlı ve dinamik bir teknoloji tutkunusun ⚡",
    cardano: "Araştırmacı ve metodolojik bir akademisyensin 📚",
    arbitrum: "Ethereum ekosisteminin geliştiricisisin 🌈",
    pengu: "Eğlenceli ama akıllı yatırımlar yapan bir dengecisin 🐧",
    aptos: "Yeni nesil teknolojilerin öncü yatırımcısısın 🚀",
    rndr: "Görsel teknolojilerin geleceğine inanan bir vizyonersin 🎨",
    sui: "Yüksek performans arayan bir teknoloji uzmanısın ⚡",
    optimism: "Ethereum'un geleceğine inanan bir topluluk lidersin 🌟",
    chainlink: "Blockchain'ler arası köprülerin mimarısın 🌉",
    polygon: "Çok yönlü ve adapte olabilen bir stratejistsin 🎯",
    default: "Dengeli ve çeşitlendirilmiş bir portföy stratejisi izliyorsunuz."
  };
  return styleMap[coinId] || styleMap.default;
};

const getPersonalityQuote = (coinId: string): string => {
  const quoteMap: Record<string, string> = {
    bitcoin: "Dijital altın çağında öncü olmayı tercih ediyorsunuz.",
    ethereum: "Merkeziyetsiz geleceğin mimarları arasında yerinizi alıyorsunuz.",
    pepe: "Topluluk gücüne ve viral trendlere inanıyorsunuz.",
    eigen: "Yapay zeka ve blockchain'in kesişiminde fırsatları görüyorsunuz.",
    zksync: "Gizlilik ve ölçeklenebilirlik sizin için öncelikli.",
    bnb: "Ekosistem senin oyun alanın 🌍",
    solana: "Hız senin orta adın ⚡",
    cardano: "Akademik yaklaşım senin tarzın 🎓",
    arbitrum: "Layer 2 senin uzmanlık alanın 🔝",
    pengu: "Hem eğlence hem teknoloji senin tarzın 🎪",
    aptos: "Geleceğin blockchain'i senin vizyonun 🔮",
    rndr: "Grafik işleme gücü senin tutkun 🖼️",
    sui: "Paralel işlem senin uzmanlığın 🔄",
    optimism: "Merkeziyetsiz yönetim senin ideelin 🏛️",
    chainlink: "Gerçek dünya verisi senin gücün 📡",
    polygon: "Ölçeklenebilir çözümler senin imzan ✍️",
    default: "Kripto dünyasında kendi yolunuzu çiziyorsunuz."
  };
  return quoteMap[coinId] || quoteMap.default;
};

const shareResult = (platform: 'twitter' | 'whatsapp'): void => {
  const text = "Kripto kişilik testini çözdüm! Sen de hangi coin olduğunu öğrenmek ister misin? 🚀";
  const url = window.location.href;

  if (platform === 'twitter') {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'whatsapp') {
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
  }
};

// Tip tanımlamaları
interface ResultSectionProps {
  result: CoinPersonality;
  onRetry: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Animasyon varyantları
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Tip tanımlamaları güncelleniyor
interface FamousInvestor {
  name: string;
  quote: string;
  emoji: string;
}

const getFamousInvestor = (coinId: string): FamousInvestor => {
  // Örnek yatırımcı verileri
  const investors: Record<string, FamousInvestor> = {
    bitcoin: {
      name: "Michael Saylor",
      quote: "Bitcoin, dijital altındır ve geleceğin rezerv para birimidir.",
      emoji: "👨‍💼"
    },
    ethereum: {
      name: "Vitalik Buterin",
      quote: "Ethereum, dünyayı değiştirebilir ve merkeziyetsiz uygulamaların geleceğidir.",
      emoji: "👨‍💻"
    },
    pepe: {
      name: "Elon Musk",
      quote: "Meme coinler, finansın eğlenceli yüzünü temsil eder.",
      emoji: "🚀"
    },
    eigen: {
      name: "Sam Altman",
      quote: "Yapay zeka ve blockchain'in kesişimi, geleceğin en büyük fırsatlarını barındırıyor.",
      emoji: "🧠"
    },
    zksync: {
      name: "Edward Snowden",
      quote: "Gizlilik, bir lütuf değil, temel bir haktır.",
      emoji: "🔐"
    },
    bnb: {
      name: "Changpeng Zhao (CZ)",
      quote: "Ekosistem geliştirmek, uzun vadeli başarının anahtarıdır.",
      emoji: "👨‍💼"
    },
    solana: {
      name: "Anatoly Yakovenko",
      quote: "Hız ve ölçeklenebilirlik, blockchain adaptasyonu için kritik öneme sahiptir.",
      emoji: "⚡"
    },
    cardano: {
      name: "Charles Hoskinson",
      quote: "Bilimsel yaklaşım ve akademik araştırma, sürdürülebilir blockchain gelişimi için temeldir.",
      emoji: "🎓"
    },
    arbitrum: {
      name: "Steven Goldfeder",
      quote: "Layer 2 çözümleri, Ethereum'un potansiyelini açığa çıkarmanın anahtarıdır.",
      emoji: "🔄"
    },
    polkadot: {
      name: "Gavin Wood",
      quote: "Blockchain'ler arası iletişim, Web3'ün geleceğini şekillendirecek.",
      emoji: "🌐"
    },
    cosmos: {
      name: "Jae Kwon",
      quote: "Blockchain'ler arası iletişim, ekosistem büyümesi için hayati önem taşır.",
      emoji: "🌌"
    },
    monero: {
      name: "Ricardo Spagni",
      quote: "Finansal gizlilik, temel bir insan hakkıdır.",
      emoji: "🕵️‍♂️"
    },
    ripple: {
      name: "Brad Garlinghouse",
      quote: "Geleneksel finans sistemi ile blockchain entegrasyonu, global ödeme sistemlerini dönüştürecek.",
      emoji: "💼"
    },
    dogecoin: {
      name: "Billy Markus",
      quote: "Eğlence ve topluluk, kripto dünyasında başarının anahtarıdır.",
      emoji: "🐕"
    },
    shiba: {
      name: "Ryoshi",
      quote: "Topluluk gücü, her şeyi mümkün kılar.",
      emoji: "🐕‍🦺"
    },
    axie: {
      name: "Jihoz",
      quote: "Oyun ve blockchain'in kesişimi, dijital ekonominin geleceğidir.",
      emoji: "🎮"
    },
    sandbox: {
      name: "Sebastien Borget",
      quote: "Metaverse, dijital varlıkların ve deneyimlerin geleceğidir.",
      emoji: "🏝️"
    },
    avalanche: {
      name: "Emin Gün Sirer",
      quote: "Hız ve ölçeklenebilirlik, blockchain adaptasyonu için kritik öneme sahiptir.",
      emoji: "❄️"
    },
    near: {
      name: "Illia Polosukhin",
      quote: "Kullanıcı dostu blockchain çözümleri, kitlesel adaptasyon için anahtardır.",
      emoji: "🌐"
    },
    // Diğer coinler için yatırımcılar eklenebilir
    default: {
      name: "Warren Buffett",
      quote: "Uzun vadeli düşünün ve anlamadığınız şeylere yatırım yapmayın.",
      emoji: "🎓"
    }
  };
  
  return investors[coinId] || investors.default;
};

const getCryptoTips = (coinId: string): string[] => {
  const tipsMap: Record<string, string[]> = {
    bitcoin: [
      "💡 Uzun vadeli düşün, HODL stratejisi uygula",
      "🔒 Güvenli cüzdan kullanmayı ihmal etme",
      "📊 Dollar-cost averaging stratejisini değerlendir"
    ],
    ethereum: [
      "🌐 DeFi projelerini yakından takip et",
      "💻 Smart contract'ları iyi araştır",
      "🔄 Gas ücretlerini optimize et"
    ],
    pepe: [
      "🎢 Risk yönetimini asla ihmal etme",
      "👥 Topluluk trendlerini takip et",
      "⚡ Hızlı al-sat stratejilerinde dikkatli ol"
    ],
    eigen: [
      "🤖 AI trendlerini yakından izle",
      "📈 Teknoloji gelişimlerini takip et",
      "🔍 Proje ekibinin geçmişini araştır"
    ],
    zksync: [
      "🔐 Gizlilik özelliklerini iyi öğren",
      "⚡ Layer 2 avantajlarından yararlan",
      "💰 Gas ücretlerinden tasarruf et"
    ]
  };
  
  // Varsayılan tavsiyeler
  const defaultTips = [
    "🎯 DYOR (Do Your Own Research)",
    "⚖️ Portföy çeşitlendirmesi yap",
    "📱 Güncel haberleri takip et"
  ];
  
  return tipsMap[coinId] || defaultTips;
};

const ResultSection: React.FC<ResultSectionProps> = ({ result, onRetry, darkMode, toggleDarkMode }) => {
  const famousInvestor = getFamousInvestor(result.id);
  const cryptoTips = getCryptoTips(result.id);
  
  return (
    <div className="min-h-screen w-full px-4 py-12 relative overflow-hidden bg-[#0A0F29]">
      
      {/* Animasyonlu Gradient Arka Plan */}
      <div className="absolute inset-0 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/80 via-[#0A0F29] to-[#0A0F29]"></div>
      
      {/* Animasyonlu Parçacıklar */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Izgara Arka Plan */}
      <div className="absolute inset-0 w-full bg-[url('/grid.svg')] bg-center opacity-10"></div>

      {/* Ana İçerik */}
      <div className="relative min-h-screen flex flex-col items-center justify-center container mx-auto px-4 pt-20">
        {/* Üst Gezinme Çubuğu */}
        <motion.div 
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/10 border-white/10 border-b"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                CryptoPersona
              </span>
            </Link>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Sonuç Kartı */}
          <motion.div 
            className={`w-full max-w-4xl mx-auto ${darkMode 
              ? 'bg-black/10 border-white/10' 
              : 'bg-white/10 border-white/10'} backdrop-blur-xl rounded-2xl p-8 border shadow-2xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Başlık ve Coin Bilgisi */}
            <motion.div 
              className="text-center mb-10"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-4xl">
                  {getCoinEmoji(result.id)}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                {result.name}
              </h1>
              <p className="text-xl text-gray-300 mb-4">{result.description}</p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {result.traits.map((trait, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-white">
                    {getTraitEmoji(trait)} {trait}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Ana Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Sol Kolon - Coin Özellikleri */}
              <motion.div 
                className={`p-6 rounded-xl ${darkMode 
                  ? 'bg-black/10 border-white/10' 
                  : 'bg-white/5 border-white/10'} border`}
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Coin Özellikleri
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Risk Toleransı:</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`w-4 h-4 rounded-full mx-0.5 ${i < result.riskLevel 
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                              : 'bg-gray-600'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      {result.riskLevel <= 2 ? 'Düşük riskli, güvenli yatırımları tercih ediyorsunuz.' :
                       result.riskLevel <= 3 ? 'Orta seviye risk alabilen dengeli bir yatırımcısınız.' :
                       'Yüksek riskli, yüksek potansiyelli yatırımları tercih ediyorsunuz.'}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Teknoloji Seviyesi:</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`w-4 h-4 rounded-full mx-0.5 ${i < result.techLevel 
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                              : 'bg-gray-600'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      {result.techLevel <= 2 ? 'Kullanıcı dostu, basit teknolojileri tercih ediyorsunuz.' :
                       result.techLevel <= 3 ? 'Orta seviye teknik bilgiye sahipsiniz.' :
                       'İleri düzey teknoloji ve protokollere hakimsiniz.'}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-200">Yatırım Tarzınız</h3>
                    <p className="text-gray-300 mb-2">{getInvestmentStyle(result.id)}</p>
                    <p className="text-gray-300">{getPersonalityQuote(result.id)}</p>
                  </div>
                </div>
              </motion.div>

              {/* Sağ Kolon - Yatırım Stratejisi */}
              <motion.div 
                className={`p-6 rounded-xl ${darkMode 
                  ? 'bg-black/10 border-white/10' 
                  : 'bg-white/5 border-white/10'} border`}
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  Yatırım Stratejisi
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-200">Önerilen Stratejiler</h3>
                    <ul className="space-y-3">
                      {cryptoTips.map((tip, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="text-xl mt-1">💡</span>
                          <span className="text-gray-300">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-200">Önerilen Coinler</h3>
                    <div className="space-y-2">
                      {result.recommendations.map((coin, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-300">
                          <span className="text-lg">🔹</span>
                          <span>{coin}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Ünlü Yatırımcı Kartı */}
            <motion.div 
              className={`p-6 rounded-xl ${darkMode 
                ? 'bg-black/10 border-white/10' 
                : 'bg-white/5 border-white/10'} border mb-10`}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Benzer Yatırımcı Profili
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                  {famousInvestor.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{famousInvestor.name}</h3>
                  <p className="text-gray-300">{famousInvestor.quote}</p>
                </div>
              </div>
            </motion.div>

            {/* Öğrenme Yol Haritası */}
            <motion.div 
              className={`p-6 rounded-xl ${darkMode 
                ? 'bg-black/10 border-white/10' 
                : 'bg-white/5 border-white/10'} border mb-10`}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                <span className="text-purple-400 mr-2">📚</span> Öğrenme Yol Haritası
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Başlangıç Seviyesi</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Temel kripto para kavramları</li>
                    <li>Güvenli cüzdan yönetimi</li>
                    <li>Temel teknik analiz</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-pink-400">Orta Seviye</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>DeFi protokolleri ve kullanımı</li>
                    <li>İleri teknik analiz</li>
                    <li>Risk yönetimi stratejileri</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-400">İleri Seviye</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Smart contract geliştirme</li>
                    <li>DAO yönetimi ve katılımı</li>
                    <li>Kripto arbitraj stratejileri</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Önemli Hatırlatmalar */}
            <motion.div 
              className={`p-6 rounded-xl ${darkMode 
                ? 'bg-black/10 border-white/10' 
                : 'bg-white/5 border-white/10'} border mb-10`}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                <span className="text-red-400 mr-2">⚠️</span> Önemli Hatırlatmalar
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>• Yatırım yapmadan önce mutlaka kendi araştırmanızı yapın (DYOR)</p>
                <p>• Kaybetmeyi göze alabileceğiniz miktarda yatırım yapın</p>
                <p>• Özel anahtarlarınızı güvende tutun ve kimseyle paylaşmayın</p>
                <p>• Portföy çeşitlendirmesi yaparak riskinizi azaltın</p>
                <p>• Duygusal kararlar vermekten kaçının</p>
              </div>
            </motion.div>

            {/* Faydalı Kaynaklar */}
            <motion.div 
              className={`p-6 rounded-xl ${darkMode 
                ? 'bg-black/10 border-white/10' 
                : 'bg-white/5 border-white/10'} border mb-10`}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                <span className="text-blue-400 mr-2">🌐</span> Faydalı Kaynaklar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-200">Fiyat Takibi</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• CoinGecko</li>
                    <li>• TradingView</li>
                    <li>• CoinMarketCap</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-200">Haber Kaynakları</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• CoinDesk</li>
                    <li>• Cointelegraph</li>
                    <li>• CryptoSlate</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Alt Butonlar */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.button
                onClick={onRetry}
                className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 ${darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600'} rounded-full shadow-xl hover:shadow-purple-500/25`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative flex items-center">
                  Testi Tekrarla
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => window.location.href = '/'}
                className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 ${darkMode 
                  ? 'text-white bg-gray-800 hover:bg-gray-700' 
                  : 'text-white bg-white/10 hover:bg-white/20'} backdrop-blur-sm rounded-full`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative flex items-center">
                  Ana Sayfaya Dön
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Dipnot */}
          <motion.div 
            className="text-center mt-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>Bu test sonuçları sadece eğlence amaçlıdır. Yatırım kararlarınızı vermeden önce profesyonel danışmanlık alınız.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Soru kategorilerine göre emoji getiren fonksiyon
const getQuestionEmoji = (text: string): string => {
  const emojiMap: Record<string, string> = {
    "risk": "🎲",
    "teknoloji": "💻",
    "eğlence": "🎮",
    "sürdürülebilirlik": "🌱",
    "nft": "🎨",
    "slogan": "📢",
    "merkeziyetsizlik": "🏛️",
    "yatırım": "💰",
    "gizlilik": "🔒",
    "topluluk": "👥",
    "büyüme": "📈",
    "anonimlik": "🕵️",
    "çeşitlendirme": "🔄",
    "özellik": "✨",
    "sosyal": "📱",
    "proje": "🎯",
    "kazanç": "💎",
    "kullanım": "🛠️",
    "etki": "💫",
    "faktör": "⚖️"
  };

  const lowercaseText = text.toLowerCase();
  const matchingKeyword = Object.keys(emojiMap).find(keyword => lowercaseText.includes(keyword));
  return matchingKeyword ? emojiMap[matchingKeyword] : "🚀";
};

// LoadingScreen bileşenini güncelle
const LoadingScreen = ({ darkMode }: { darkMode: boolean }) => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  
  const funFacts = [
    {
      emoji: "⚡",
      text: "Bitcoin'in yaratıcısı Satoshi Nakamoto'nun gerçek kimliği hala bilinmiyor."
    },
    {
      emoji: "🔍",
      text: "Ethereum, akıllı kontratları popüler hale getiren ilk blockchain platformudur."
    },
    {
      emoji: "💰",
      text: "Kripto para piyasasının toplam değeri bazı ülkelerin GSYİH'sinden daha büyüktür."
    },
    {
      emoji: "🌐",
      text: "Blockchain teknolojisi, finans dışında sağlık, tedarik zinciri ve oy verme sistemlerinde de kullanılıyor."
    },
    {
      emoji: "🔐",
      text: "Özel anahtarınızı kaybederseniz, kripto varlıklarınıza erişiminizi sonsuza dek kaybedebilirsiniz."
    },
    {
      emoji: "📊",
      text: "Bitcoin'in maksimum arzı 21 milyon ile sınırlıdır, bu da onu dijital altın yapıyor."
    },
    {
      emoji: "🚀",
      text: "DeFi (Merkeziyetsiz Finans) geleneksel bankacılık sistemine alternatif olarak hızla büyüyor."
    },
    {
      emoji: "🎮",
      text: "NFT'ler, dijital sanat, müzik ve oyun öğelerinin sahipliğini blockchain üzerinde kanıtlıyor."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [funFacts.length]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0A0F29]">
      
      {/* Animasyonlu Gradient Arka Plan */}
      <div className="absolute inset-0 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/80 via-[#0A0F29] to-[#0A0F29]"></div>
      
      {/* Animasyonlu Parçacıklar */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Izgara Arka Plan */}
      <div className="absolute inset-0 w-full bg-[url('/grid.svg')] bg-center opacity-10"></div>

      {/* Loading İçeriği */}
      <div className="relative">
        <div className="max-w-md p-8 rounded-2xl bg-white/10 border-white/10 backdrop-blur-xl shadow-2xl border text-center">
          <motion.div 
            className="text-6xl mb-6"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {funFacts[currentFactIndex].emoji}
          </motion.div>
          <h2 className="text-2xl font-bold mb-4 text-white">Sonuçlar Hesaplanıyor...</h2>
          <div className="mb-8 h-2 bg-gray-700/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="text-lg">
            <p className="mb-2 font-medium text-white">Kripto Dünyası Gerçeği:</p>
            <p className="text-gray-100">
              {funFacts[currentFactIndex].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(1); // 1 for forward, -1 for backward
  const [answers, setAnswers] = useState<number[]>([]); // Cevapları saklamak için yeni state
  const [questionLoaded, setQuestionLoaded] = useState<boolean>(false); // Soru yükleme durumu
  const [darkMode, setDarkMode] = useState<boolean>(false); // Karanlık tema durumu

  // Sayfa yüklendiğinde localStorage'dan tema tercihini al
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    } else {
      // Sistem temasını kontrol et
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Tema değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    // HTML elementine dark class ekle/çıkar
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Soru değiştiğinde yükleme durumunu sıfırla
  useEffect(() => {
    setQuestionLoaded(false);
    const timer = setTimeout(() => {
      setQuestionLoaded(true);
    }, 300); // Animasyon süresi kadar bekle
    
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion(curr => curr - 1);
      // Son cevabı kaldır
      const newAnswers = [...answers];
      newAnswers.pop();
      setAnswers(newAnswers);
    }
  };

  const handleAnswer = async (selectedOption: typeof questions[0]['options'][0]) => {
    // Soru yüklenmeden cevap verilmesini engelle
    if (!questionLoaded) return;
    
    const newScores = { ...scores };
    
    Object.entries(selectedOption.score).forEach(([coin, score]) => {
      if (coinPersonalities.some(personality => personality.id === coin)) {
        newScores[coin] = (newScores[coin] || 0) + score;
      }
    });
    
    setScores(newScores);
    setDirection(1);
    setAnswers([...answers, currentQuestion]); // Cevabı kaydet

    if (currentQuestion < questions.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 300));
      setCurrentQuestion(curr => curr + 1);
    } else {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
      setShowResults(true);
    }
  };

  const getResult = () => {
    if (!scores || Object.keys(scores).length === 0) {
      console.log('Puanlar boş!');
      return null;
    }

    // Sadece coinPersonalities'de tanımlı olan coinleri filtrele
    const validScores = Object.entries(scores)
      .filter(([coinId]) => coinPersonalities.some(p => p.id === coinId))
      .reduce((acc, [coinId, score]) => ({ ...acc, [coinId]: score }), {});

    if (Object.keys(validScores).length === 0) {
      console.log('Geçerli coin puanı bulunamadı!');
      return null;
    }

    // Toplam soru sayısına göre normalize et
    const normalizedScores = Object.entries(validScores).map(([coinId, score]) => {
      const maxPossibleScore = questions.reduce((total, question) => {
        const coinScore = question.options.reduce((max, option) => {
          const score = option.score[coinId] || 0;
          return score > max ? score : max;
        }, 0);
        return total + coinScore;
      }, 0);
      
      return {
        coinId,
        normalizedScore: maxPossibleScore > 0 ? (score as number) / maxPossibleScore : 0
      };
    });

    // En yüksek normalize edilmiş puana sahip coinleri bul
    const maxNormalizedScore = Math.max(...normalizedScores.map(s => s.normalizedScore));
    const topCoins = normalizedScores
      .filter(s => Math.abs(s.normalizedScore - maxNormalizedScore) < 0.1) // 10% tolerans
      .map(s => s.coinId);

    // Eğer birden fazla coin benzer puandaysa rastgele seç
    const selectedCoinId = topCoins[Math.floor(Math.random() * topCoins.length)];
    const matchingPersonality = coinPersonalities.find(coin => coin.id === selectedCoinId);

    console.log('Normalize edilmiş puanlar:', normalizedScores);
    console.log('Seçilen coin:', selectedCoinId);
    console.log('Eşleşen kişilik:', matchingPersonality);

    return matchingPersonality;
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScores({});
    setShowResults(false);
    console.log('Test sıfırlandı');
  };

  if (isLoading) {
    return <LoadingScreen darkMode={darkMode} />;
  }

  if (showResults) {
    const result = getResult();
    
    if (!result) {
      return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">Bir hata oluştu!</h1>
            <p className="mb-8">Sonuçlar hesaplanamadı. Lütfen testi tekrar deneyin.</p>
            <button
              onClick={resetTest}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Testi Tekrarla
            </button>
          </div>
        </main>
      );
    }

    return (
      <ResultSection result={result} onRetry={resetTest} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    );
  }

  return (
    <main className={`min-h-screen relative overflow-hidden ${darkMode 
      ? 'bg-[#0A0F29] text-gray-100' 
      : 'bg-[#0A0F29] text-white'}`}
      style={{ WebkitTextSizeAdjust: '100%', WebkitFontSmoothing: 'antialiased' }}>
      
      {/* iOS 18 için özel stil etiketi */}
      <style jsx global>{`
        @supports (-webkit-touch-callout: none) {
          div, span, h1, h2, h3, h4, h5, h6, p {
            color: white !important;
            -webkit-text-fill-color: white !important;
          }
          
          @media (max-width: 844px) {
            .option-button > div, 
            .option-text,
            .question-text {
              color: white !important;
              -webkit-text-fill-color: white !important;
              font-weight: 400 !important; 
            }
          }
        }
      `}</style>
      
      {/* Animasyonlu Gradient Arka Plan */}
      <div className={`absolute inset-0 w-full ${darkMode 
        ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/80 via-[#0A0F29] to-[#0A0F29]' 
        : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/80 via-[#0A0F29] to-[#0A0F29]'}`}></div>
      
      {/* Animasyonlu Parçacıklar */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-600/20 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Izgara Arka Plan */}
      <div className="absolute inset-0 w-full bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      {!showResults && !isLoading && (
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          {/* Progress Bar */}
          <div className="text-center mb-12">
            <div className="mb-4 text-xl font-medium text-gray-200 flex items-center justify-center">
              <span className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
                Soru {currentQuestion + 1} / {questions.length}
              </span>
            </div>
            <div className="h-3 bg-white/5 backdrop-blur-sm rounded-full overflow-hidden p-0.5">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            {/* Geri Dönüş Butonu */}
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevQuestion}
                className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                ← Önceki Soru
              </button>
            )}
          </div>

          {/* Question */}
          <motion.div
            key={currentQuestion}
            initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => setQuestionLoaded(true)}
            className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl mb-8 border border-white/10"
          >
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4 text-white" style={{ WebkitTextFillColor: 'white', color: 'white' }}>
                {getQuestionEmoji(questions[currentQuestion].text)}
              </div>
              <h2 className="text-2xl font-bold text-white" style={{ WebkitTextFillColor: 'white', color: 'white' }}>
                {questions[currentQuestion].text}
              </h2>
            </div>
            
            <div className="space-y-5">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => questionLoaded && handleAnswer(option)}
                  className={`w-full text-left p-5 bg-white/5 hover:bg-white/10 border-white/10
                    rounded-xl transition-all duration-300 backdrop-blur-sm border option-button
                    ${!questionLoaded ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer hover:scale-102 hover:shadow-lg'}`}
                  style={{ WebkitAppearance: 'none' }}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 mr-4 text-lg font-medium text-white" 
                         style={{ WebkitTextFillColor: 'white', color: 'white' }}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <div className="text-lg text-white option-text" 
                         style={{ WebkitTextFillColor: 'white', color: 'white' }}>
                      {option.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
} 