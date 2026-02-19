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
  { title: 'Prediyabet mobil uygulamasının hedefleri', subtitle: 'Kişiselleştirilmiş takip ve farkındalık.' },
  { title: 'Tasarımcılar kimlerdir?', subtitle: 'Multidisipliner sağlık ve ürün ekibi.' },
  { title: 'Sağlıklı yaşam', subtitle: 'Günlük alışkanlıklar, aktivite ve beslenme önerileri.' },
  { title: 'Prediyabeti öğrenelim', subtitle: 'Eğitici içerikler ve sık sorulanlar.' },
  { title: 'Komplikasyonlar', subtitle: 'Erken dönemde önlenebilecek riskler.' },
  { title: 'Tanı ve tedavi yöntemleri', subtitle: 'Uzman görüşü ve takip planları.' }
];

export const contactItems = [
  { title: 'Telefon', subtitle: '0545 664 76 62' },
  { title: 'E-Posta', subtitle: 'ibrahim.topuz@ksbu.edu.tr' },
  { title: 'Website', subtitle: 'www.prediyabet-tr.com' },
  { title: 'Whatsapp ile yaz', subtitle: 'Hızlı destek hattı' },
  { title: 'Uzmana sor', subtitle: 'Soru-cevap için form' }
];

export const foodSamples = [
  'Çavdar unu ve kepekli ekmeğin yanı sıra buğday unu',
  'Balık havyarı',
  'Et ve mantar et suyu, yaylı sırra bunlara dayalı yemekler',
  'Yüksek yağlı içerikli süt ürünleri',
  'Siyah ve yeşil çay, bitkisel çaylar ve soğanlar; yabani gül suyu',
  'Az yağlı balıklar (pollock, walleye, turna, hake vs.) – fırında kaynatın veya fırında pişirin',
  'Yağda konserve balık',
  'Füme, kurutulmuş ve tuzlu balık',
  'Sütlü tatlılar',
  'İç yağ',
  'Dondurma, reçeller, kremler, tatlılar',
  'Herhangi bir formda yağlı balık türleri'
];

export const pedometerHistory = [
  { date: '10/5/2023', steps: 0 },
  { date: '10/8/2023', steps: 0 },
  { date: '10/9/2023', steps: 0 },
  { date: '10/12/2023', steps: 0 },
  { date: '10/15/2023', steps: 0 },
  { date: '11/1/2023', steps: 0 },
  { date: '11/12/2023', steps: 0 }
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
  }
];
