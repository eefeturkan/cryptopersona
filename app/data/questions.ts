export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: {
      [key: string]: number;
    };
  }[];
}

export interface CoinPersonality {
  id: string;
  name: string;
  description: string;
  riskLevel: number;
  techLevel: number;
  traits: string[];
  recommendations: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Risk almayı sever misiniz?",
    options: [
      {
        text: "Hayır, güvenli olanı tercih ederim.",
        score: { bitcoin: 3, ethereum: 2, cardano: 2, chainlink: 2, xrp: 3, stacks: 2 }
      },
      {
        text: "Orta düzeyde, mantıklı risklere açığım.",
        score: { solana: 3, bnb: 3, ethereum: 2, polygon: 2, avalanche: 3, near: 2 }
      },
      {
        text: "Evet, yüksek risk yüksek ödül demektir.",
        score: { pepe: 3, sui: 3, pengu: 2, aptos: 2, shiba: 3, dogecoin: 3 }
      },
      {
        text: "Risk alırım ama hesaplanmış ve kontrollü olmalı.",
        score: { polkadot: 3, cosmos: 3, tezos: 2, litecoin: 2, chiliz: 2, filecoin: 2 }
      }
    ]
  },
  {
    id: 2,
    text: "Hangi teknolojik yenilik sizi daha çok heyecanlandırır?",
    options: [
      {
        text: "Yapay zeka",
        score: { eigen: 3, rndr: 3, chainlink: 2, fetch: 3, ocean: 2, singularity: 3 }
      },
      {
        text: "Blockchain üzerindeki gizlilik çözümleri",
        score: { zksync: 3, polygon: 2, arbitrum: 2, monero: 3, zcash: 3, secret: 2 }
      },
      {
        text: "Merkezi olmayan finans (DeFi)",
        score: { ethereum: 3, optimism: 2, bnb: 2, uniswap: 3, aave: 3, curve: 2 }
      },
      {
        text: "Metaverse ve blockchain oyunları",
        score: { sandbox: 3, axie: 3, gala: 3, enjin: 2, decentraland: 2, stepn: 2 }
      }
    ]
  },
  {
    id: 3,
    text: "Eğlenceye ve topluluk kültürüne ne kadar önem verirsiniz?",
    options: [
      {
        text: "Çok önem veririm.",
        score: { pepe: 3, pengu: 3, optimism: 2, shiba: 3, dogecoin: 3, floki: 2 }
      },
      {
        text: "Orta düzeyde, topluluk önemli ama tek kriterim değil.",
        score: { solana: 3, bnb: 2, ethereum: 2, polygon: 2, near: 2, avalanche: 2 }
      },
      {
        text: "Çok az, projelerin teknik yönüne bakarım.",
        score: { chainlink: 3, zksync: 2, cardano: 2, cosmos: 3, polkadot: 3, tezos: 2 }
      },
      {
        text: "Topluluk ve teknik yönler eşit derecede önemli.",
        score: { ethereum: 2, polygon: 2, optimism: 2, harmony: 2, algorand: 3, hedera: 2 }
      }
    ]
  },
  {
    id: 4,
    text: "Sürdürülebilirlik projelerine ilginiz nedir?",
    options: [
      {
        text: "Çok ilgiliyim.",
        score: { cardano: 3, polygon: 2, ethereum: 2, algorand: 3, hbar: 3, iota: 2 }
      },
      {
        text: "Orta düzeyde.",
        score: { solana: 3, bnb: 2, optimism: 2, near: 2, avalanche: 2, cosmos: 2 }
      },
      {
        text: "Hiç ilgim yok.",
        score: { pepe: 2, pengu: 2, sui: 2, bitcoin: 2, litecoin: 2, dogecoin: 2 }
      },
      {
        text: "Sürdürülebilirlik önemli ama önceliğim değil.",
        score: { ethereum: 2, polkadot: 2, tezos: 3, stellar: 3, flow: 2, cosmos: 2 }
      }
    ]
  },
  {
    id: 5,
    text: "Kripto para projesinde en çok neye dikkat edersiniz?",
    options: [
      {
        text: "Teknolojik altyapı",
        score: { ethereum: 3, solana: 3, cardano: 2, polkadot: 3, cosmos: 3, near: 2 }
      },
      {
        text: "Topluluk desteği",
        score: { pepe: 3, pengu: 3, dogecoin: 3, shiba: 2, floki: 2, safemoon: 2 }
      },
      {
        text: "Gerçek dünya kullanım alanları",
        score: { chainlink: 3, bnb: 3, ripple: 3, vechain: 3, helium: 2, filecoin: 2 }
      },
      {
        text: "Ekibin geçmiş başarıları ve uzmanlığı",
        score: { solana: 2, sui: 2, arbitrum: 2, aptos: 3, optimism: 2, sei: 3 }
      }
    ]
  },
  {
    id: 6,
    text: "Hangi tür içerikler ilginizi çeker?",
    options: [
      {
        text: "Teknik analizler ve derinlemesine araştırmalar",
        score: { ethereum: 3, zksync: 3, cardano: 3, polkadot: 3, cosmos: 2, tezos: 2 }
      },
      {
        text: "Finans ve yatırım stratejileri",
        score: { bitcoin: 3, bnb: 3, ethereum: 2, xrp: 2, litecoin: 2, stellar: 2 }
      },
      {
        text: "Meme'ler ve eğlenceli topluluk içerikleri",
        score: { pepe: 3, dogecoin: 3, pengu: 2, shiba: 3, floki: 2, bonk: 2 }
      },
      {
        text: "Metaverse, NFT ve dijital sanat projeleri",
        score: { sandbox: 3, decentraland: 3, enjin: 3, axie: 2, gala: 2, theta: 2 }
      }
    ]
  },
  {
    id: 7,
    text: "Kripto alırken hangi zaman dilimini hedeflersiniz?",
    options: [
      {
        text: "Uzun vadeli (yıllar)",
        score: { bitcoin: 3, ethereum: 3, cardano: 2, polkadot: 2, chainlink: 2, xrp: 2 }
      },
      {
        text: "Orta vadeli (aylar)",
        score: { solana: 3, bnb: 3, optimism: 2, avalanche: 2, polygon: 2, cosmos: 2 }
      },
      {
        text: "Kısa vadeli (günler/haftalar)",
        score: { pepe: 3, pengu: 3, sui: 2, aptos: 2, shiba: 2, mask: 2 }
      },
      {
        text: "Hem kısa hem uzun vadeli yatırımlar yaparım",
        score: { ethereum: 2, bnb: 2, solana: 2, bitcoin: 2, polkadot: 2, uniswap: 3 }
      }
    ]
  },
  {
    id: 8,
    text: "Hangi sektörün blockchain ile entegrasyonu sizi heyecanlandırır?",
    options: [
      {
        text: "Finans ve bankacılık",
        score: { ethereum: 3, ripple: 3, stellar: 3, uniswap: 2, aave: 3, curve: 2 }
      },
      {
        text: "Oyun ve eğlence",
        score: { axie: 3, sandbox: 3, gala: 2, enjin: 2, flow: 3, imx: 2 }
      },
      {
        text: "Tedarik zinciri ve lojistik",
        score: { vechain: 3, chainlink: 2, origintrail: 3, helium: 2, theta: 2, ftm: 2 }
      },
      {
        text: "Sosyal medya ve içerik platformları",
        score: { chiliz: 3, steem: 3, lbry: 2, status: 2, muse: 2, lens: 3 }
      }
    ]
  },
  {
    id: 9,
    text: "NFT'ler hakkında ne düşünüyorsunuz?",
    options: [
      {
        text: "Çok heyecan verici, dijital mülkiyetin geleceği",
        score: { ethereum: 2, solana: 2, flow: 3, enjin: 3, imx: 3, arweave: 2 }
      },
      {
        text: "İlginç ama şu an çok değerli bulmuyorum",
        score: { ethereum: 2, polygon: 3, solana: 2, avalanche: 2, arbitrum: 2, near: 2 }
      },
      {
        text: "Tamamen gereksiz ve balon",
        score: { bitcoin: 3, chainlink: 2, cardano: 2, litecoin: 2, monero: 3, xrp: 2 }
      },
      {
        text: "Çoğu değersiz ama bazı kullanım alanları faydalı",
        score: { ethereum: 2, polkadot: 2, tezos: 3, cosmos: 2, hedera: 2, algorand: 2 }
      }
    ]
  },
  {
    id: 10,
    text: "Kripto para ekosisteminde hangi role sahip olmak isterdiniz?",
    options: [
      {
        text: "Geliştirici",
        score: { ethereum: 3, solana: 3, polkadot: 3, cosmos: 2, near: 2, avalanche: 2 }
      },
      {
        text: "Yatırımcı",
        score: { bitcoin: 3, ethereum: 2, bnb: 3, solana: 2, ripple: 2, litecoin: 2 }
      },
      {
        text: "Topluluk yöneticisi",
        score: { pepe: 3, dogecoin: 3, optimism: 2, near: 2, solana: 2, pengu: 2 }
      },
      {
        text: "Eğitimci/İçerik üreticisi",
        score: { ethereum: 2, cardano: 3, polkadot: 2, cosmos: 2, algorand: 2, hedera: 2 }
      }
    ]
  },
  {
    id: 11,
    text: "Blockchain sistemlerinde hangi özellik sizin için daha önemli?",
    options: [
      {
        text: "Güvenlik ve merkeziyetsizlik",
        score: { bitcoin: 3, ethereum: 3, monero: 3, polkadot: 2, cardano: 2, zcash: 2 }
      },
      {
        text: "Hız ve ölçeklenebilirlik",
        score: { solana: 3, aptos: 3, sui: 2, avalanche: 2, near: 2, fantom: 3 }
      },
      {
        text: "Enerji verimliliği",
        score: { cardano: 3, algorand: 3, tezos: 2, solana: 2, hedera: 3, near: 2 }
      },
      {
        text: "Geliştirici ekosistemi ve kullanım kolaylığı",
        score: { ethereum: 3, solana: 2, polygon: 3, cosmos: 3, avalanche: 2, flow: 2 }
      }
    ]
  },
  {
    id: 12,
    text: "Merkez bankası dijital paraları (CBDC) hakkında ne düşünüyorsunuz?",
    options: [
      {
        text: "Blockchain ruhuna aykırı, desteklemiyorum",
        score: { bitcoin: 3, monero: 3, zcash: 3, litecoin: 2, pepe: 2, dogecoin: 2 }
      },
      {
        text: "Faydalı olabilirler ama tam kripto değiller",
        score: { ethereum: 3, cardano: 2, solana: 2, ripple: 3, stellar: 3, xrp: 2 }
      },
      {
        text: "Kripto adaptasyonu için önemli bir adım",
        score: { bnb: 3, ripple: 3, hedera: 3, stellar: 2, algorand: 2, vechain: 2 }
      },
      {
        text: "Merkezi sistemlerin dijital hali, önemli değil",
        score: { pepe: 2, bitcoin: 2, monero: 2, tron: 3, eos: 2, dogecoin: 2 }
      }
    ]
  },
  {
    id: 13,
    text: "Hangi özellik bir kripto para projesinde sizi cezbeder?",
    options: [
      {
        text: "Sağlam teknik altyapı",
        score: { ethereum: 3, solana: 3, polkadot: 3, cosmos: 2, near: 2, avalanche: 2 }
      },
      {
        text: "Aktif ve büyük topluluk",
        score: { dogecoin: 3, pepe: 3, shiba: 3, solana: 2, near: 2, pengu: 2 }
      },
      {
        text: "Güçlü yatırımcılar ve ortaklıklar",
        score: { solana: 3, sui: 3, aptos: 3, ripple: 2, avalanche: 2, arbitrum: 2 }
      },
      {
        text: "Özgün ve çözüm odaklı kullanım alanı",
        score: { chainlink: 3, vechain: 3, filecoin: 3, arweave: 2, helium: 2, ocean: 2 }
      }
    ]
  },
  {
    id: 14,
    text: "Gelecekte hangi teknolojik yeniliğin daha başarılı olacağını düşünüyorsunuz?",
    options: [
      {
        text: "Yapay zeka ve blockchain entegrasyonu",
        score: { eigen: 3, fetch: 3, ocean: 3, singularity: 2, rndr: 2, chainlink: 2 }
      },
      {
        text: "Metaverse ve sanal gerçeklik",
        score: { sandbox: 3, decentraland: 3, axie: 2, enjin: 2, gala: 2, stepn: 2 }
      },
      {
        text: "Merkezi olmayan kimlik ve gizlilik teknolojileri",
        score: { zksync: 3, monero: 3, zcash: 2, secret: 2, polygon: 2, arweave: 2 }
      },
      {
        text: "Web3 ve merkezi olmayan internet",
        score: { polkadot: 3, cosmos: 3, filecoin: 2, arweave: 2, theta: 2, livepeer: 3 }
      }
    ]
  },
  {
    id: 15,
    text: "Kripto para projelerinde hangi faktör daha çok dikkatinizi çeker?",
    options: [
      {
        text: "Yüksek getiri potansiyeli",
        score: { pepe: 3, sui: 3, aptos: 2, shiba: 2, dogecoin: 2, floki: 2 }
      },
      {
        text: "Uzun vadeli sürdürülebilirlik",
        score: { bitcoin: 3, ethereum: 3, cardano: 2, polkadot: 2, chainlink: 2, cosmos: 2 }
      },
      {
        text: "Güçlü bir ekip ve yol haritası",
        score: { solana: 3, cardano: 3, polkadot: 2, near: 2, optimism: 2, hedera: 2 }
      },
      {
        text: "Gerçek dünya problemlerine çözüm üretmesi",
        score: { chainlink: 3, vechain: 3, hedera: 2, filecoin: 2, helium: 3, ocean: 2 }
      }
    ]
  },
  {
    id: 16,
    text: "Yatırım stratejinizi nasıl tanımlarsınız?",
    options: [
      {
        text: "Riskten kaçınan, güvenli limanları tercih eden",
        score: { bitcoin: 3, ethereum: 3, bnb: 2, cardano: 2, xrp: 2, litecoin: 2 }
      },
      {
        text: "Dengeli, hem güvenli hem de riskli yatırımlar yapan",
        score: { ethereum: 3, solana: 2, polkadot: 2, avalanche: 2, near: 2, cosmos: 2 }
      },
      {
        text: "Agresif, yüksek getiri odaklı",
        score: { solana: 2, pepe: 3, sui: 3, aptos: 2, shiba: 2, floki: 3 }
      },
      {
        text: "Sektöre ve teknolojiye göre seçici yatırım yapan",
        score: { polkadot: 3, avalanche: 2, cosmos: 3, chainlink: 2, filecoin: 2, hedera: 2 }
      }
    ]
  },
  {
    id: 17,
    text: "Blockchain projelerinde tercih ettiğiniz konsensus mekanizması nedir?",
    options: [
      {
        text: "İş ispatı (PoW) - Güvenilir ve test edilmiş",
        score: { bitcoin: 3, litecoin: 3, monero: 2, zcash: 2, kadena: 2, ergo: 2 }
      },
      {
        text: "Hisse ispatı (PoS) - Enerji verimli",
        score: { ethereum: 3, cardano: 3, solana: 2, avalanche: 2, tezos: 2, cosmos: 2 }
      },
      {
        text: "Yeni nesil konsensus mekanizmaları",
        score: { solana: 3, sui: 3, aptos: 3, hedera: 2, algorand: 2, casper: 2 }
      },
      {
        text: "Konsensus mekanizması benim için öncelikli değil",
        score: { pepe: 3, dogecoin: 2, optimism: 2, arbitrum: 2, polygon: 2, immutablex: 2 }
      }
    ]
  },
  {
    id: 18,
    text: "Kripto paralarda sizi en çok heyecanlandıran kullanım alanı nedir?",
    options: [
      {
        text: "DeFi (Merkezi Olmayan Finans)",
        score: { ethereum: 3, solana: 2, avalanche: 3, near: 2, aave: 3, uniswap: 3 }
      },
      {
        text: "NFT ve Metaverse",
        score: { sandbox: 3, ethereum: 2, solana: 2, flow: 3, enjin: 2, gala: 3 }
      },
      {
        text: "Web3 ve merkezi olmayan internet",
        score: { polkadot: 3, cosmos: 3, filecoin: 2, arweave: 3, livepeer: 2, theta: 2 }
      },
      {
        text: "Günlük hayatta ödeme aracı olarak kullanım",
        score: { bitcoin: 2, litecoin: 3, ripple: 3, stellar: 3, dash: 3, nano: 2 }
      }
    ]
  },
  {
    id: 19,
    text: "Yatırım yaparken en çok neye dikkat edersiniz?",
    options: [
      {
        text: "Yenilikçi teknolojiler.",
        score: { eigen: 3, sui: 3, zksync: 2, aptos: 2, near: 2, avalanche: 2 }
      },
      {
        text: "Kullanıcı dostu çözümler.",
        score: { bnb: 3, solana: 3, optimism: 2, near: 2, stellar: 2, flow: 2 }
      },
      {
        text: "Eğlence ve popülerlik.",
        score: { pepe: 3, pengu: 3, sui: 2, dogecoin: 3, shiba: 2, floki: 2 }
      },
      {
        text: "Gerçek dünya çözümleri ve kurumsal adaptasyon.",
        score: { chainlink: 3, vechain: 3, ripple: 2, hedera: 3, quant: 2, algorand: 2 }
      }
    ]
  },
  {
    id: 20,
    text: "Kripto dünyasında en önemli faktör nedir?",
    options: [
      {
        text: "Teknoloji ve güvenlik.",
        score: { bitcoin: 3, ethereum: 3, chainlink: 2, polkadot: 2, monero: 2, zcash: 2 }
      },
      {
        text: "Topluluk desteği.",
        score: { pepe: 3, pengu: 3, optimism: 2, dogecoin: 3, shiba: 2, near: 2 }
      },
      {
        text: "Yenilikçi kullanım alanları.",
        score: { eigen: 3, solana: 2, sui: 2, arweave: 2, filecoin: 2, theta: 2 }
      },
      {
        text: "Düzenleyici uyum ve kurumsal kabul.",
        score: { ripple: 3, bnb: 2, hedera: 3, quant: 3, stellar: 2, algo: 2 }
      }
    ]
  }
];

interface CoinProfile {
  id: string;
  name: string;
  description: string;
  traits: string[];
  riskLevel: number; // 1-5 (düşük-yüksek)
  techLevel: number; // 1-5 (basit-karmaşık)
  category: string[]; // ['defi', 'ai', 'meme', 'privacy', 'gaming', etc.]
  marketCap: string; // 'high', 'medium', 'low'
}

const coinProfiles: CoinProfile[] = [
  {
    id: "bitcoin",
    name: "Bitcoin (BTC)",
    description: "Siz güvenlik odaklı ve sabırlı bir yatırımcısınız. Risk almaktan kaçınıyor ve uzun vadeli düşünüyorsunuz. Dijital altın olarak Bitcoin size çok uygun.",
    traits: ["Güvenlik Odaklı", "Sabırlı", "Risk Sevmeyen", "Kararlı"],
    riskLevel: 1,
    techLevel: 2,
    category: ['store-of-value', 'payment', 'blue-chip'],
    marketCap: 'high'
  },
  {
    id: "ethereum",
    name: "Ethereum (ETH)",
    description: "Akıllı kontratlar ve DeFi dünyasına ilgi duyan yenilikçi bir yatırımcısınız. Blockchain teknolojisinin geleceğine inanıyorsunuz.",
    traits: ["Yenilikçi", "Teknoloji Odaklı", "Ekosistem Sever", "Vizyoner"],
    riskLevel: 2,
    techLevel: 4,
    category: ['smart-contracts', 'defi', 'blue-chip', 'nft'],
    marketCap: 'high'
  },
  {
    id: "eigen",
    name: "Eigen (EIGEN)",
    description: "Yapay zeka ve yeni teknolojilere ilgi duyan yenilikçi bir yatırımcısınız. Geleceğin teknolojilerine yatırım yapmayı seviyorsunuz.",
    traits: ["Yenilikçi", "Teknoloji Meraklısı", "Analitik", "İleri Görüşlü"],
    riskLevel: 4,
    techLevel: 5,
    category: ['ai', 'technology', 'innovation'],
    marketCap: 'medium'
  },
  {
    id: "pepe",
    name: "Pepe (PEPE)",
    description: "Eğlenceli ve risk almayı seven bir yatırımcısınız. Topluluk odaklı projeleri seviyor ve yüksek getiri potansiyeli arıyorsunuz.",
    traits: ["Eğlenceli", "Risk Sever", "Topluluk Odaklı", "Dinamik"],
    riskLevel: 5,
    techLevel: 1,
    category: ['meme', 'community', 'viral'],
    marketCap: 'low'
  },
  {
    id: "zksync",
    name: "zkSync (ZK)",
    description: "Gizlilik ve güvenliğe önem veren teknoloji odaklı bir yatırımcısınız. Blockchain'in teknik yönleriyle ilgileniyorsunuz.",
    traits: ["Gizlilik Odaklı", "Teknik", "Güvenlik Sever", "Yenilikçi"],
    riskLevel: 3,
    techLevel: 5,
    category: ['privacy', 'scaling', 'layer2', 'technology'],
    marketCap: 'medium'
  },
  {
    id: "bnb",
    name: "Binance Coin (BNB)",
    description: "Dengeli ve çeşitlendirmeye önem veren bir yatırımcısınız. Ekosistem tokenleri ve pratik kullanım alanları sizin için önemli.",
    traits: ["Dengeli", "Pratik", "Ekosistem Odaklı", "Stratejik"],
    riskLevel: 2,
    techLevel: 3,
    category: ['exchange', 'defi', 'ecosystem', 'blue-chip'],
    marketCap: 'high'
  },
  {
    id: "solana",
    name: "Solana (SOL)",
    description: "Hızlı ve ölçeklenebilir teknolojilere ilgi duyuyorsunuz. Yüksek performanslı blockchain çözümlerini takip ediyorsunuz.",
    traits: ["Hızlı", "Yenilikçi", "Performans Odaklı", "Dinamik"],
    riskLevel: 3,
    techLevel: 4,
    category: ['layer1', 'defi', 'nft', 'gaming'],
    marketCap: 'high'
  },
  {
    id: "cardano",
    name: "Cardano (ADA)",
    description: "Akademik yaklaşımı ve sürdürülebilir gelişimi önemsiyorsunuz. Uzun vadeli ve güvenilir projeleri tercih ediyorsunuz.",
    traits: ["Akademik", "Sürdürülebilir", "Araştırmacı", "Metodolojik"],
    riskLevel: 2,
    techLevel: 4,
    category: ['smart-contracts', 'research', 'eco-friendly'],
    marketCap: 'high'
  },
  {
    id: "arbitrum",
    name: "Arbitrum (ARB)",
    description: "Ethereum'un ölçeklenebilirlik çözümlerine ilgi duyuyorsunuz. Layer 2 teknolojilerinin potansiyeline inanıyorsunuz.",
    traits: ["Teknik", "Ölçeklenebilir", "Ethereum Dostu", "Verimli"],
    riskLevel: 3,
    techLevel: 4,
    category: ['layer2', 'scaling', 'defi', 'ethereum-ecosystem'],
    marketCap: 'medium'
  },
  {
    id: "pengu",
    name: "Penguin (PENGU)",
    description: "Topluluk odaklı ama dengeli risk alan bir yatırımcısınız. Eğlenceli projeleri seviyor ama teknik yönleri de önemsiyorsunuz.",
    traits: ["Topluluk Odaklı", "Dengeli", "Eğlenceli", "Analitik"],
    riskLevel: 4,
    techLevel: 2,
    category: ['gaming', 'community', 'meme', 'nft'],
    marketCap: 'low'
  },
  {
    id: "aptos",
    name: "Aptos (APTOS)",
    description: "Teknik altyapıya önem veren yenilikçi bir yatırımcısınız. Yeni nesil blockchain projelerini takip ediyorsunuz.",
    traits: ["Teknik", "Yenilikçi", "Araştırmacı", "Gelişimci"],
    riskLevel: 3,
    techLevel: 4,
    category: ['layer1', 'technology', 'defi', 'innovation'],
    marketCap: 'medium'
  },
  {
    id: "rndr",
    name: "Render (RNDR)",
    description: "Metaverse ve yapay zeka projelerine ilgi duyan vizyoner bir yatırımcısınız. Geleceğin teknolojilerine yatırım yapıyorsunuz.",
    traits: ["Vizyoner", "Teknoloji Odaklı", "Yaratıcı", "İlerici"],
    riskLevel: 4,
    techLevel: 4,
    category: ['ai', 'metaverse', 'technology', 'graphics'],
    marketCap: 'medium'
  },
  {
    id: "sui",
    name: "Sui (SUI)",
    description: "Yeni nesil blockchain teknolojilerine ilgi duyuyorsunuz. Paralel işlem ve yüksek performans sizin için önemli.",
    traits: ["Yenilikçi", "Performans Odaklı", "Teknik", "Modern"],
    riskLevel: 4,
    techLevel: 5,
    category: ['layer1', 'smart-contracts', 'innovation', 'scaling'],
    marketCap: 'medium'
  },
  {
    id: "optimism",
    name: "Optimism (OP)",
    description: "Ethereum ekosisteminin geleceğine inanıyorsunuz. Ölçeklenebilirlik çözümlerini ve topluluk yönetimini önemsiyorsunuz.",
    traits: ["Topluluk Odaklı", "Ethereum Dostu", "Yenilikçi", "DAO Sever"],
    riskLevel: 3,
    techLevel: 4,
    category: ['layer2', 'dao', 'ethereum-ecosystem', 'defi'],
    marketCap: 'medium'
  },
  {
    id: "chainlink",
    name: "Chainlink (LINK)",
    description: "Blockchain'ler arası veri akışının önemini anlıyorsunuz. Gerçek dünya verilerinin blockchain'e entegrasyonuna ilgi duyuyorsunuz.",
    traits: ["Bağlantılı", "Güvenilir", "Altyapı Odaklı", "Temel"],
    riskLevel: 2,
    techLevel: 4,
    category: ['oracle', 'infrastructure', 'cross-chain', 'defi'],
    marketCap: 'high'
  },
  {
    id: "polygon",
    name: "Polygon (MATIC)",
    description: "Ölçeklenebilirlik ve çoklu çözüm stratejilerine ilgi duyuyorsunuz. Ethereum ekosisteminin gelişimini destekliyorsunuz.",
    traits: ["Çok Yönlü", "Ölçeklenebilir", "Adaptif", "Ekosistem Odaklı"],
    riskLevel: 2,
    techLevel: 4,
    category: ['scaling', 'ethereum-ecosystem', 'layer2', 'enterprise'],
    marketCap: 'high'
  },
  {
    id: "dogecoin",
    name: "Dogecoin (DOGE)",
    description: "Eğlenceyi ve topluluk kültürünü seven bir yatırımcısınız. İlk ve en popüler meme coin olan Dogecoin'in enerjik topluluğuna değer veriyorsunuz.",
    traits: ["Eğlenceli", "Topluluk Odaklı", "İyimser", "Rahat"],
    riskLevel: 4,
    techLevel: 1,
    category: ['meme', 'payment', 'community', 'viral'],
    marketCap: 'high'
  },
  {
    id: "shiba",
    name: "Shiba Inu (SHIB)",
    description: "Topluluk gücüne ve viral potansiyele inanıyorsunuz. Eğlenceli ve riskli yatırımlara ilgi duyuyor, yüksek getiri fırsatlarını kovalıyorsunuz.",
    traits: ["Risk Sever", "Topluluk Sever", "Trendy", "Dinamik"],
    riskLevel: 5,
    techLevel: 2,
    category: ['meme', 'defi', 'community', 'nft'],
    marketCap: 'medium'
  },
  {
    id: "polkadot",
    name: "Polkadot (DOT)",
    description: "Blockchain'ler arası iletişimin önemini anlayan teknoloji odaklı bir yatırımcısınız. Ekosistem bağlantıları ve çoklu zincir çözümlerine ilgi duyuyorsunuz.",
    traits: ["Bağlantılı", "Vizyoner", "Teknik", "Sabırlı"],
    riskLevel: 3,
    techLevel: 5,
    category: ['interoperability', 'ecosystem', 'parachain', 'staking'],
    marketCap: 'high'
  },
  {
    id: "cosmos",
    name: "Cosmos (ATOM)",
    description: "Farklı blockchain'ler arasındaki iletişimin geleceğine inanan teknik bir yatırımcısınız. Ekosistem geliştirmeye ve birlikte çalışabilirliğe değer veriyorsunuz.",
    traits: ["Bağlantılı", "Ekosistem Odaklı", "Analitik", "Stratejik"],
    riskLevel: 3,
    techLevel: 4,
    category: ['interoperability', 'ecosystem', 'staking', 'defi'],
    marketCap: 'medium'
  },
  {
    id: "monero",
    name: "Monero (XMR)",
    description: "Gizlilik ve anonimliğe büyük önem veren bir yatırımcısınız. Kişisel finansal özgürlüğün ve veri gizliliğinin savunucususunuz.",
    traits: ["Gizlilik Odaklı", "Bağımsız", "İlkeli", "Teknik"],
    riskLevel: 3,
    techLevel: 4,
    category: ['privacy', 'payment', 'anonymous', 'fungible'],
    marketCap: 'medium'
  },
  {
    id: "ripple",
    name: "Ripple (XRP)",
    description: "Geleneksel finans sistemi ile blockchain teknolojisinin entegrasyonuna inanan pratik bir yatırımcısınız. Kurumsal çözümlere ve hızlı işlemlere değer veriyorsunuz.",
    traits: ["Kurumsal", "Hızlı", "Pratik", "Sonuç Odaklı"],
    riskLevel: 2,
    techLevel: 3,
    category: ['payment', 'cross-border', 'enterprise', 'fintech'],
    marketCap: 'high'
  },
  {
    id: "litecoin",
    name: "Litecoin (LTC)",
    description: "Kanıtlanmış teknolojilere ve güvenilir projelere değer veren istikrarlı bir yatırımcısınız. Hızlı işlem süreleri ve düşük maliyetleri önemsiyorsunuz.",
    traits: ["Güvenilir", "Pratik", "İstikrarlı", "Sabırlı"],
    riskLevel: 2,
    techLevel: 2,
    category: ['payment', 'store-of-value', 'established', 'fungible'],
    marketCap: 'high'
  },
  {
    id: "avalanche",
    name: "Avalanche (AVAX)",
    description: "Yüksek performanslı blockchain teknolojilerine ilgi duyan yenilikçi bir yatırımcısınız. Hız, ölçeklenebilirlik ve çoklu platformları destekliyorsunuz.",
    traits: ["Hızlı", "Ölçeklenebilir", "Yenilikçi", "Adaptif"],
    riskLevel: 3,
    techLevel: 4,
    category: ['layer1', 'smart-contracts', 'defi', 'scaling'],
    marketCap: 'high'
  },
  {
    id: "near",
    name: "NEAR Protocol (NEAR)",
    description: "Kullanıcı dostu blockchain çözümlerine ve geliştirici ekosistemlerine ilgi duyan yenilikçi bir yatırımcısınız. Ölçeklenebilirlik ve kullanım kolaylığına değer veriyorsunuz.",
    traits: ["Kullanıcı Dostu", "Geliştirici Odaklı", "Ölçeklenebilir", "Modern"],
    riskLevel: 3,
    techLevel: 4,
    category: ['layer1', 'smart-contracts', 'developer-friendly', 'web3'],
    marketCap: 'medium'
  },
  {
    id: "vechain",
    name: "VeChain (VET)",
    description: "Gerçek dünya uygulamaları ve tedarik zinciri çözümlerine ilgi duyan pratik bir yatırımcısınız. Blockchain'in iş dünyasında kullanımına değer veriyorsunuz.",
    traits: ["Uygulama Odaklı", "İş Dünyası Dostu", "Gerçekçi", "Stratejik"],
    riskLevel: 3,
    techLevel: 3,
    category: ['supply-chain', 'enterprise', 'real-world', 'iot'],
    marketCap: 'medium'
  },
  {
    id: "uniswap",
    name: "Uniswap (UNI)",
    description: "Merkeziyetsiz finansın potansiyeline inanan ve likidite sağlamanın önemini anlayan bir yatırımcısınız. DeFi ekosisteminin gelişimine katkıda bulunmak istiyorsunuz.",
    traits: ["DeFi Sever", "Likidite Odaklı", "Yenilikçi", "Topluluk Destekli"],
    riskLevel: 4,
    techLevel: 3,
    category: ['defi', 'dex', 'ethereum-ecosystem', 'dao'],
    marketCap: 'medium'
  },
  {
    id: "aave",
    name: "Aave (AAVE)",
    description: "Merkeziyetsiz borç verme ve finansal hizmetlerin geleceğine inanan analitik bir yatırımcısınız. DeFi ekosistemindeki yenilikleri takip ediyorsunuz.",
    traits: ["Finansal", "Analitik", "Yenilikçi", "Stratejik"],
    riskLevel: 3,
    techLevel: 4,
    category: ['defi', 'lending', 'ethereum-ecosystem', 'multi-chain'],
    marketCap: 'medium'
  },
  {
    id: "filecoin",
    name: "Filecoin (FIL)",
    description: "Merkeziyetsiz veri depolama ve internet altyapısının önemini anlayan uzun vadeli bir yatırımcısınız. Web3'ün temel yapı taşlarına değer veriyorsunuz.",
    traits: ["Altyapı Odaklı", "Uzun Vadeli", "Stratejik", "Analitik"],
    riskLevel: 3,
    techLevel: 4,
    category: ['storage', 'infrastructure', 'web3', 'utility'],
    marketCap: 'medium'
  },
  {
    id: "sandbox",
    name: "The Sandbox (SAND)",
    description: "Metaverse ve sanal dünyaların potansiyeline inanan yaratıcı bir yatırımcısınız. Dijital varlıklar ve oyunlaştırılmış ekonomilere ilgi duyuyorsunuz.",
    traits: ["Yaratıcı", "Metaverse Sever", "İleri Görüşlü", "Eğlence Odaklı"],
    riskLevel: 4,
    techLevel: 3,
    category: ['metaverse', 'gaming', 'nft', 'virtual-world'],
    marketCap: 'medium'
  },
  {
    id: "axie",
    name: "Axie Infinity (AXS)",
    description: "Play-to-earn oyun ekonomilerine ve NFT tabanlı oyunların geleceğine inanan yenilikçi bir yatırımcısınız. Dijital eğlencenin geleceğini şekillendirmeye ilgi duyuyorsunuz.",
    traits: ["Oyun Sever", "Yenilikçi", "Dijital Varlık Odaklı", "Topluluk Destekli"],
    riskLevel: 4,
    techLevel: 3,
    category: ['gaming', 'nft', 'play-to-earn', 'metaverse'],
    marketCap: 'medium'
  },
  {
    id: "floki",
    name: "Floki Inu (FLOKI)",
    description: "Eğlenceli ve topluluk odaklı projeleri seven dinamik bir yatırımcısınız. Viral potansiyeli yüksek ve güçlü topluluğa sahip projelere ilgi duyuyorsunuz.",
    traits: ["Eğlenceli", "Topluluk Odaklı", "Dinamik", "Trendy"],
    riskLevel: 5,
    techLevel: 1,
    category: ['meme', 'community', 'viral', 'nft'],
    marketCap: 'low'
  },
  {
    id: "hedera",
    name: "Hedera (HBAR)",
    description: "Kurumsal kullanım ve güvenliğe önem veren dengeli bir yatırımcısınız. Yenilikçi konsensus teknolojileri ve kurumsal adaptasyona ilgi duyuyorsunuz.",
    traits: ["Kurumsal", "Güvenlik Odaklı", "Yenilikçi", "Pratik"],
    riskLevel: 2,
    techLevel: 4,
    category: ['enterprise', 'hashgraph', 'governance', 'smart-contracts'],
    marketCap: 'medium'
  },
  {
    id: "algorand",
    name: "Algorand (ALGO)",
    description: "Ölçeklenebilirlik ve güvenliğin mükemmel dengesini arayan teknoloji odaklı bir yatırımcısınız. Sürdürülebilir ve kanıtlanmış teknolojilere değer veriyorsunuz.",
    traits: ["Sürdürülebilir", "Teknik", "Akademik", "Stratejik"],
    riskLevel: 2,
    techLevel: 4,
    category: ['layer1', 'smart-contracts', 'sustainable', 'institutional'],
    marketCap: 'medium'
  }
];

// Coin önerilerini hesaplayan fonksiyon
function getRecommendations(userCoin: CoinProfile): string[] {
  // Kullanıcının profiline göre benzer coinleri bul
  const recommendations = coinProfiles
    .filter(coin => coin.id !== userCoin.id) // Kendisi hariç
    .map(coin => {
      let score = 0;
      
      // Risk seviyesi benzerliği (0-5 puan)
      score += 5 - Math.abs(coin.riskLevel - userCoin.riskLevel);
      
      // Teknoloji seviyesi benzerliği (0-5 puan)
      score += 5 - Math.abs(coin.techLevel - userCoin.techLevel);
      
      // Kategori örtüşmesi (her ortak kategori için 2 puan)
      const commonCategories = coin.category.filter(cat => userCoin.category.includes(cat));
      score += commonCategories.length * 2;
      
      // Market cap çeşitlendirmesi (1 puan)
      if (coin.marketCap !== userCoin.marketCap) {
        score += 1;
      }

      // Blue-chip bonus (güvenlik için)
      if (coin.category.includes('blue-chip') && userCoin.riskLevel <= 2) {
        score += 2;
      }

      // İnovasyon bonus (yenilikçilik için)
      if (coin.category.includes('innovation') && userCoin.techLevel >= 4) {
        score += 2;
      }
      
      return { coin: coin.name, score };
    })
    .sort((a, b) => b.score - a.score) // En yüksek puandan en düşüğe sırala
    .slice(0, 3) // İlk 3 öneriyi al
    .map(item => item.coin);
  
  return recommendations;
}

export const coinPersonalities: CoinPersonality[] = [
  {
    id: "bitcoin",
    name: "Bitcoin (BTC)",
    description: "Siz güvenlik odaklı ve sabırlı bir yatırımcısınız. Risk almaktan kaçınıyor ve uzun vadeli düşünüyorsunuz. Dijital altın olarak Bitcoin size çok uygun.",
    riskLevel: 1,
    techLevel: 2,
    traits: ["Güvenlik Odaklı", "Sabırlı", "Risk Sevmeyen", "Kararlı"],
    recommendations: ["Ethereum", "Cardano", "Chainlink"]
  },
  {
    id: "ethereum",
    name: "Ethereum (ETH)",
    description: "Akıllı kontratlar ve DeFi dünyasına ilgi duyan yenilikçi bir yatırımcısınız. Blockchain teknolojisinin geleceğine inanıyorsunuz.",
    riskLevel: 2,
    techLevel: 4,
    traits: ["Yenilikçi", "Teknoloji Odaklı", "Ekosistem Sever", "Vizyoner"],
    recommendations: ["Solana", "Polygon", "Polkadot"]
  },
  {
    id: "eigen",
    name: "Eigen (EIGEN)",
    description: "Yapay zeka ve yeni teknolojilere ilgi duyan yenilikçi bir yatırımcısınız. Geleceğin teknolojilerine yatırım yapmayı seviyorsunuz.",
    riskLevel: 4,
    techLevel: 5,
    traits: ["Yenilikçi", "Teknoloji Meraklısı", "Analitik", "İleri Görüşlü"],
    recommendations: ["RNDR", "Chainlink", "Fetch.ai"]
  },
  {
    id: "pepe",
    name: "Pepe (PEPE)",
    description: "Eğlenceli ve risk almayı seven bir yatırımcısınız. Topluluk odaklı projeleri seviyor ve yüksek getiri potansiyeli arıyorsunuz.",
    riskLevel: 5,
    techLevel: 1,
    traits: ["Eğlenceli", "Risk Sever", "Topluluk Odaklı", "Dinamik"],
    recommendations: ["Dogecoin", "Shiba Inu", "Floki"]
  },
  {
    id: "zksync",
    name: "zkSync (ZK)",
    description: "Gizlilik ve güvenliğe önem veren teknoloji odaklı bir yatırımcısınız. Blockchain'in teknik yönleriyle ilgileniyorsunuz.",
    riskLevel: 3,
    techLevel: 5,
    traits: ["Gizlilik Odaklı", "Teknik", "Güvenlik Sever", "Yenilikçi"],
    recommendations: ["Monero", "Polygon", "Arbitrum"]
  },
  {
    id: "bnb",
    name: "Binance Coin (BNB)",
    description: "Dengeli ve çeşitlendirmeye önem veren bir yatırımcısınız. Ekosistem tokenleri ve pratik kullanım alanları sizin için önemli.",
    riskLevel: 2,
    techLevel: 3,
    traits: ["Dengeli", "Pratik", "Ekosistem Odaklı", "Stratejik"],
    recommendations: ["Ethereum", "Solana", "Polkadot"]
  },
  {
    id: "solana",
    name: "Solana (SOL)",
    description: "Hızlı ve ölçeklenebilir teknolojilere ilgi duyuyorsunuz. Yüksek performanslı blockchain çözümlerini takip ediyorsunuz.",
    riskLevel: 3,
    techLevel: 4,
    traits: ["Hızlı", "Yenilikçi", "Performans Odaklı", "Dinamik"],
    recommendations: ["Avalanche", "NEAR", "Sui"]
  },
  {
    id: "cardano",
    name: "Cardano (ADA)",
    description: "Akademik yaklaşımı ve sürdürülebilir gelişimi önemsiyorsunuz. Uzun vadeli ve güvenilir projeleri tercih ediyorsunuz.",
    riskLevel: 2,
    techLevel: 4,
    traits: ["Akademik", "Sürdürülebilir", "Araştırmacı", "Metodolojik"],
    recommendations: ["Polkadot", "Ethereum", "Algorand"]
  },
  {
    id: "arbitrum",
    name: "Arbitrum (ARB)",
    description: "Ethereum'un ölçeklenebilirlik çözümlerine ilgi duyuyorsunuz. Layer 2 teknolojilerinin potansiyeline inanıyorsunuz.",
    riskLevel: 3,
    techLevel: 4,
    traits: ["Teknik", "Ölçeklenebilir", "Ethereum Dostu", "Verimli"],
    recommendations: ["Optimism", "Polygon", "zkSync"]
  },
  {
    id: "pengu",
    name: "Penguin (PENGU)",
    description: "Topluluk odaklı ama dengeli risk alan bir yatırımcısınız. Eğlenceli projeleri seviyor ama teknik yönleri de önemsiyorsunuz.",
    riskLevel: 4,
    techLevel: 2,
    traits: ["Topluluk Odaklı", "Dengeli", "Eğlenceli", "Analitik"],
    recommendations: ["Pepe", "Axie Infinity", "The Sandbox"]
  },
  {
    id: "aptos",
    name: "Aptos (APTOS)",
    description: "Teknik altyapıya önem veren yenilikçi bir yatırımcısınız. Yeni nesil blockchain projelerini takip ediyorsunuz.",
    riskLevel: 3,
    techLevel: 4,
    traits: ["Teknik", "Yenilikçi", "Araştırmacı", "Gelişimci"],
    recommendations: ["Sui", "Solana", "Near"]
  },
  {
    id: "rndr",
    name: "Render (RNDR)",
    description: "Metaverse ve yapay zeka projelerine ilgi duyan vizyoner bir yatırımcısınız. Geleceğin teknolojilerine yatırım yapıyorsunuz.",
    riskLevel: 4,
    techLevel: 4,
    traits: ["Vizyoner", "Teknoloji Odaklı", "Yaratıcı", "İlerici"],
    recommendations: ["Eigen", "The Sandbox", "Axie Infinity"]
  },
  {
    id: "sui",
    name: "Sui (SUI)",
    description: "Yeni nesil blockchain teknolojilerine ilgi duyuyorsunuz. Paralel işlem ve yüksek performans sizin için önemli.",
    riskLevel: 4,
    techLevel: 5,
    traits: ["Yenilikçi", "Performans Odaklı", "Teknik", "Modern"],
    recommendations: ["Aptos", "Solana", "Near"]
  },
  {
    id: "optimism",
    name: "Optimism (OP)",
    description: "Ethereum ekosisteminin geleceğine inanıyorsunuz. Ölçeklenebilirlik çözümlerini ve topluluk yönetimini önemsiyorsunuz.",
    riskLevel: 3,
    techLevel: 4,
    traits: ["Topluluk Odaklı", "Ethereum Dostu", "Yenilikçi", "DAO Sever"],
    recommendations: ["Arbitrum", "Polygon", "Ethereum"]
  },
  {
    id: "chainlink",
    name: "Chainlink (LINK)",
    description: "Blockchain'ler arası veri akışının önemini anlıyorsunuz. Gerçek dünya verilerinin blockchain'e entegrasyonuna ilgi duyuyorsunuz.",
    riskLevel: 2,
    techLevel: 4,
    traits: ["Bağlantılı", "Güvenilir", "Altyapı Odaklı", "Temel"],
    recommendations: ["Polkadot", "VeChain", "The Graph"]
  },
  {
    id: "polygon",
    name: "Polygon (MATIC)",
    description: "Ölçeklenebilirlik ve çoklu çözüm stratejilerine ilgi duyuyorsunuz. Ethereum ekosisteminin gelişimini destekliyorsunuz.",
    riskLevel: 3,
    techLevel: 4,
    traits: ["Çözüm Odaklı", "Ölçeklenebilir", "Pratik", "Entegre"],
    recommendations: ["Ethereum", "Arbitrum", "Optimism"]
  },
  {
    id: "dogecoin",
    name: "Dogecoin (DOGE)",
    description: "Eğlenceyi ve topluluk kültürünü seven bir yatırımcısınız. İlk ve en popüler meme coin olan Dogecoin'in enerjik topluluğuna değer veriyorsunuz.",
    riskLevel: 4,
    techLevel: 1,
    traits: ["Eğlenceli", "Topluluk Odaklı", "İyimser", "Rahat"],
    recommendations: ["Shiba Inu", "Pepe", "Floki"]
  },
  {
    id: "shiba",
    name: "Shiba Inu (SHIB)",
    description: "Topluluk gücüne ve viral potansiyele inanıyorsunuz. Eğlenceli ve riskli yatırımlara ilgi duyuyor, yüksek getiri fırsatlarını kovalıyorsunuz.",
    riskLevel: 5,
    techLevel: 2,
    traits: ["Risk Sever", "Topluluk Sever", "Trendy", "Dinamik"],
    recommendations: ["Dogecoin", "Pepe", "Floki"]
  },
  {
    id: "polkadot",
    name: "Polkadot (DOT)",
    description: "Blockchain'ler arası iletişimin önemini anlayan teknoloji odaklı bir yatırımcısınız. Ekosistem bağlantıları ve çoklu zincir çözümlerine ilgi duyuyorsunuz.",
    riskLevel: 3,
    techLevel: 5,
    traits: ["Bağlantılı", "Vizyoner", "Teknik", "Sabırlı"],
    recommendations: ["Cosmos", "Chainlink", "Ethereum"]
  },
  {
    id: "cosmos",
    name: "Cosmos (ATOM)",
    description: "Farklı blockchain'ler arasındaki iletişimin geleceğine inanan teknik bir yatırımcısınız. Ekosistem geliştirmeye ve birlikte çalışabilirliğe değer veriyorsunuz.",
    riskLevel: 3,
    techLevel: 4,
    traits: ["Bağlantılı", "Ekosistem Odaklı", "Analitik", "Stratejik"],
    recommendations: ["Polkadot", "Near", "Algorand"]
  },
  {
    id: "monero",
    name: "Monero (XMR)",
    description: "Gizlilik ve anonimliğe büyük önem veren bir yatırımcısınız. Kişisel finansal özgürlüğün ve veri gizliliğinin savunucususunuz.",
    riskLevel: 3,
    techLevel: 4,
    traits: ["Gizlilik Odaklı", "Bağımsız", "İlkeli", "Teknik"],
    recommendations: ["Zcash", "Secret", "zkSync"]
  },
  {
    id: "ripple",
    name: "Ripple (XRP)",
    description: "Geleneksel finans sistemi ile blockchain teknolojisinin entegrasyonuna inanan pratik bir yatırımcısınız. Kurumsal çözümlere ve hızlı işlemlere değer veriyorsunuz.",
    riskLevel: 2,
    techLevel: 3,
    traits: ["Kurumsal", "Hızlı", "Pratik", "Sonuç Odaklı"],
    recommendations: ["Stellar", "Hedera", "Quant"]
  },
  {
    id: "litecoin",
    name: "Litecoin (LTC)",
    description: "Kanıtlanmış teknolojilere ve güvenilir projelere değer veren istikrarlı bir yatırımcısınız. Hızlı işlem süreleri ve düşük maliyetleri önemsiyorsunuz.",
    riskLevel: 2,
    techLevel: 2,
    traits: ["Güvenilir", "Pratik", "İstikrarlı", "Sabırlı"],
    recommendations: ["Bitcoin", "Dash", "XRP"]
  },
  {
    id: "avalanche",
    name: "Avalanche (AVAX)",
    description: "Yüksek performanslı blockchain teknolojilerine ilgi duyan yenilikçi bir yatırımcısınız. Hız, ölçeklenebilirlik ve çoklu platformları destekliyorsunuz.",
    riskLevel: 3,
    techLevel: 4,
    traits: ["Hızlı", "Ölçeklenebilir", "Yenilikçi", "Adaptif"],
    recommendations: ["Solana", "Near", "Fantom"]
  },
  {
    id: "near",
    name: "NEAR Protocol (NEAR)",
    description: "Kullanıcı dostu blockchain çözümlerine ve geliştirici ekosistemlerine ilgi duyan yenilikçi bir yatırımcısınız. Ölçeklenebilirlik ve kullanım kolaylığına değer veriyorsunuz.",
    riskLevel: 3,
    techLevel: 4,
    traits: ["Kullanıcı Dostu", "Geliştirici Odaklı", "Ölçeklenebilir", "Modern"],
    recommendations: ["Solana", "Avalanche", "Flow"]
  },
  {
    id: "vechain",
    name: "VeChain (VET)",
    description: "Gerçek dünya uygulamaları ve tedarik zinciri çözümlerine ilgi duyan pratik bir yatırımcısınız. Blockchain'in iş dünyasında kullanımına değer veriyorsunuz.",
    riskLevel: 3,
    techLevel: 3,
    traits: ["Uygulama Odaklı", "İş Dünyası Dostu", "Gerçekçi", "Stratejik"],
    recommendations: ["Chainlink", "Hedera", "Quant"]
  },
  {
    id: "sandbox",
    name: "The Sandbox (SAND)",
    description: "Metaverse ve sanal dünyaların potansiyeline inanan yaratıcı bir yatırımcısınız. Dijital varlıklar ve oyunlaştırılmış ekonomilere ilgi duyuyorsunuz.",
    riskLevel: 4,
    techLevel: 3,
    traits: ["Yaratıcı", "Metaverse Sever", "İleri Görüşlü", "Eğlence Odaklı"],
    recommendations: ["Decentraland", "Axie Infinity", "Enjin"]
  },
  {
    id: "axie",
    name: "Axie Infinity (AXS)",
    description: "Play-to-earn oyun ekonomilerine ve NFT tabanlı oyunların geleceğine inanan yenilikçi bir yatırımcısınız. Dijital eğlencenin geleceğini şekillendirmeye ilgi duyuyorsunuz.",
    riskLevel: 4,
    techLevel: 3,
    traits: ["Oyun Sever", "Yenilikçi", "Dijital Varlık Odaklı", "Topluluk Destekli"],
    recommendations: ["The Sandbox", "Gala", "StepN"]
  },
  {
    id: "hedera",
    name: "Hedera (HBAR)",
    description: "Kurumsal kullanım ve güvenliğe önem veren dengeli bir yatırımcısınız. Yenilikçi konsensus teknolojileri ve kurumsal adaptasyona ilgi duyuyorsunuz.",
    riskLevel: 2,
    techLevel: 4,
    traits: ["Kurumsal", "Güvenlik Odaklı", "Yenilikçi", "Pratik"],
    recommendations: ["Algorand", "XRP", "Quant"]
  },
  {
    id: "algorand",
    name: "Algorand (ALGO)",
    description: "Ölçeklenebilirlik ve güvenliğin mükemmel dengesini arayan teknoloji odaklı bir yatırımcısınız. Sürdürülebilir ve kanıtlanmış teknolojilere değer veriyorsunuz.",
    riskLevel: 2,
    techLevel: 4,
    traits: ["Sürdürülebilir", "Teknik", "Akademik", "Stratejik"],
    recommendations: ["Cardano", "Hedera", "Tezos"]
  }
]; 