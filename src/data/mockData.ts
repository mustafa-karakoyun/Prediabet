export const menuItems = [
  { key: 'Profile', label: 'Profil' },
  { key: 'Info', label: 'Bilgilendirme' },
  { key: 'BMI', label: 'BKİ Hesaplama' },
  { key: 'PreTests', label: 'Ön Testler' },
  { key: 'PostTests', label: 'Son Testler' },
  { key: 'Contact', label: 'İletişim' },
  { key: 'About', label: 'Hakkımızda' },
  { key: 'FAQ', label: 'S.S.S.' },
  { key: 'FoodAdd', label: 'Besin Ekle' },
  { key: 'Pedometer', label: 'Adımsayar' },
  { key: 'RiskSurvey', label: 'Risk Anketi' }
];

export const infoArticles = [
  { title: 'Prediyabet nedir?', subtitle: 'Tanım, belirtiler ve erken tanı yolları.' },
  { title: 'Glikoz takibi', subtitle: 'Açlık/tokluk ve HbA1c hedef aralıkları.' },
  { title: 'Hareket planı', subtitle: 'Haftada 150 dakika orta tempo önerisi.' },
  { title: 'Beslenme temel ilkeleri', subtitle: 'Tam tahıl, lif ve dengeli tabak örnekleri.' },
  { title: 'Stres ve uyku', subtitle: 'Kortizol, uyku hijyeni ve kan şekeri ilişkisi.' },
  { title: 'Komplikasyonlar', subtitle: 'Erken dönemde önlenebilecek riskler.' },
  { title: 'Takip ve kontroller', subtitle: 'Rutin doktor randevuları ve ölçüm sıklıkları.' }
];

export const contactItems = [
  { title: 'Telefon', subtitle: '0545 664 76 62' },
  { title: 'E-Posta', subtitle: 'ibrahim.topuz@ksbu.edu.tr' },
  { title: 'Website', subtitle: 'www.prediyabet-tr.com' },
  { title: 'Whatsapp ile yaz', subtitle: 'Hızlı destek hattı' },
  { title: 'Uzmana sor', subtitle: 'Soru-cevap için form' }
];

export const foodSamples = [
  'Kahvaltı: Yulaf, ceviz, yaban mersini, tarçın',
  'Ara öğün: Yoğurt + keten tohumu + çilek',
  'Öğle: Izgara tavuk, kinoa, roka salatası, zeytinyağı',
  'Akşam: Fırın somon, buharda brokoli, esmer pirinç',
  'Tam tahıllı ekmek yerine çavdar veya kepekli seçenekler',
  'Baklagiller: Mercimek, nohut, barbunya (lif + protein)',
  'Sağlıklı yağ: Avokado, zeytinyağı, çiğ badem/fındık',
  'İçecek: Şekersiz bitki çayı, su, şekersiz maden suyu',
  'Tatlı alternatifi: Fırınlanmış elma + tarçın + az yoğurt',
  'Kaçınılacaklar: Şekerli içecekler, trans yağlı ürünler, aşırı işlenmiş paketli atıştırmalıklar'
];

export const pedometerHistory = [
  { date: '2024-11-01', steps: 4560 },
  { date: '2024-11-02', steps: 7320 },
  { date: '2024-11-03', steps: 8125 },
  { date: '2024-11-04', steps: 10230 },
  { date: '2024-11-05', steps: 6890 },
  { date: '2024-11-06', steps: 9150 },
  { date: '2024-11-07', steps: 12110 }
];

export const riskSurveyQuestions = [
  {
    title: 'Yaşınız',
    options: [
      { label: '<45 yaş', score: 0 },
      { label: '45-54 yaş', score: 2 },
      { label: '55-64 yaş', score: 3 },
      { label: '>64 yaş', score: 4 }
    ]
  },
  {
    title: 'BKİ',
    options: [
      { label: '<25 kg/m²', score: 0 },
      { label: '25-30 kg/m²', score: 1 },
      { label: '>30 kg/m²', score: 3 }
    ]
  },
  {
    title: 'Bel çevresi',
    options: [
      { label: '<80 cm', score: 0 },
      { label: '80-88 cm', score: 3 },
      { label: '>88 cm', score: 4 }
    ]
  },
  {
    title: 'Günlük hareket',
    options: [
      { label: 'Günde <30 dk hafif/orta aktivite', score: 2 },
      { label: 'Günde 30-60 dk hafif/orta aktivite', score: 1 },
      { label: 'Günde 60+ dk hafif/orta aktivite', score: 0 }
    ]
  },
  {
    title: 'Aile öyküsü',
    options: [
      { label: 'Ebeveyn/kardeş diyabet', score: 5 },
      { label: 'Büyükbaba/büyükanne diyabet', score: 3 },
      { label: 'Aile öyküsü yok', score: 0 }
    ]
  }
];
