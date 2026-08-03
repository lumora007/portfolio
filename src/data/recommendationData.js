// Recommendations are shown in the language they were given in, so the quotes
// live here rather than in the locale files and are never translated. Set
// `quoteLang` so the correct font and screen-reader voice are applied.
//
// Images are optional and fall back gracefully:
//   avatarUrl -> initials badge   |   logoUrl -> company name chip
// Drop files in public/rasters/recommendations/ and reference them as
// '/rasters/recommendations/<file>'.
export const recommendationData = [
  {
    id: 'rec-foundation-egi-sosa',
    name: 'Jonathan Sosa',
    initials: 'JS',
    role: 'Head of Engineering',
    profileUrl: 'https://www.linkedin.com/in/jonathan-sosa-34ab83122/',
    avatarUrl: '/rasters/recommendations/jonathan-sosa.jpg',
    company: 'Foundation EGI',
    companyUrl: 'https://foundationegi.com/',
    logoUrl: '/rasters/logos/foundation-egi.svg',
    logoBg: '#ffffff',
    quoteLang: 'en',
    quote:
      'Eito is the rare engineer who is equally strong in research and in production. He took our multi-agent automation platform from a fragile prototype to a system handling millions of requests a day, and he did it while making the architecture simpler rather than more complex. He is also the person everyone on the team wanted reviewing their designs.',
  },
  {
    id: 'rec-citadel-ai-song',
    name: 'Kenny Song',
    initials: 'KS',
    role: 'Co-Founder & CTO',
    profileUrl: 'https://www.zoominfo.com/p/Kenny-Song/86547486',
    avatarUrl: '/rasters/recommendations/kenny-song.jpg',
    company: 'Citadel AI',
    companyUrl: 'https://citadel-ai.com/company/',
    // Citadel only publish a light-on-dark wordmark, so it keeps a dark plate
    logoUrl: '/rasters/logos/citadel-ai.svg',
    logoBg: '#22282e',
    quoteLang: 'ja',
    quote:
      'エイトさんは、製造ラインの外観検査システムを検出精度96%で実運用まで導いてくれました。モデルが実世界のどこで失敗するかを見抜く力があり、精度だけでなく運用に耐える設計を最初から考えられる稀有なエンジニアです。Docker・KubernetesによるCI/CDの整備でデプロイ時間を70%短縮し、チーム全体の開発速度を大きく引き上げてくれました。',
  },
  {
    id: 'rec-tenchijin-nishiyama',
    name: 'Yohei Nishiyama',
    initials: 'YN',
    role: 'VP of Business Development',
    profileUrl: 'https://jp.linkedin.com/in/yohei-nishiyama-22912b39',
    avatarUrl: '/rasters/recommendations/yohei-nishiyama.jpg',
    company: 'Tenchijin',
    companyUrl: 'https://www.linkedin.com/company/tenchijin/',
    logoUrl: '/rasters/logos/tenchijin.svg',
    logoBg: '#ffffff',
    quoteLang: 'ja',
    quote:
      'エイトさんの強みは、技術をビジネスの成果に翻訳できることです。彼が構築したレコメンドエンジンはコンバージョンを28%向上させ、事業側の議論でもトレードオフを明確に説明してくれました。経営層にもエンジニアにも同じ精度で伝えられる方は、本当に貴重だと感じています。',
  },
  {
    id: 'rec-tenchijin-sakuraba',
    name: 'Yasuhito Sakuraba',
    initials: 'YS',
    role: 'Co-Founder & CEO',
    profileUrl: 'https://www.linkedin.com/in/yasuhito-sakuraba-12aa8836/',
    avatarUrl: '/rasters/recommendations/yasuhito-sakuraba.jpg',
    company: 'Tenchijin',
    companyUrl: 'https://www.linkedin.com/company/tenchijin/',
    logoUrl: '/rasters/logos/tenchijin.svg',
    logoBg: '#ffffff',
    quoteLang: 'ja',
    quote:
      'エイトさんには、月間50万件以上の文書を処理する文書理解システムを抽出精度94%で構築していただきました。4言語対応の多言語NLPパイプラインの設計から、MLOpsの整備による本番投入までの時間の60%短縮まで、一貫して任せられる方です。若手エンジニアの育成にも尽力し、チームは以前よりはるかに力をつけました。',
  },
];
