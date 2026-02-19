# Prediabet Mobile (Expo)

MobilUygulama dersi challenge MUK-01. Prediabet temalı bir Expo managed React Native uygulaması; profil, bilgilendirme, BKİ hesaplama, testler, besin listesi, adımsayar ve Findrisk anketi akışlarını içerir. Mock veriler ve lokal state kullanılır.

## Çalıştırma
1) Node 18+ ile bağımlılıkları kurun: `npm install`
2) Geliştirme sunucusu: `npm start` (ya da `npx expo start --clear`)
   - Android: `npm run android`
   - iOS: `npm run ios` (macOS gerektirir)

> Eğer yerelde sorun yaşarsanız (ör. Expo Go uyumsuzluğu), hazır önizleme için: https://prediabet-mobile-app.rork.app

## Yapı
- `App.tsx`: Navigation container ve tema.
- `src/navigation`: Stack navigator.
- `src/screens`: Profil, Bilgilendirme, BKİ, Ön/Son Testler, İletişim, Hakkımızda, S.S.S., Besin Ekle, Adımsayar, Risk Anketi.
- `src/components`: Kart, form input ve buton bileşenleri.
- `src/data/mockData.ts`: Menü, iletişim, risk soruları, beslenme örnekleri, adım geçmişi.
- `src/theme/theme.ts`: Yeşil-beyaz palet ve tipografi/spacing ölçekleri.

## Özellikler
- 2 sütunlu ana menü grid.
- BKİ hesaplama ve kategori çıktısı.
- Findrisk anketi toplam puan ve risk seviyesi.
- Besin listesi ekleme (lokal state, mock veri).
- Adımsayar geçmişi listesi ve özet.
- Form alanlarında temel doğrulama (boş bırakma engeli).

## Tasarım Notları
- Yeşil-beyaz palet, yumuşak kart yüzeyleri ve gölgeler.
- Placeholder ikon/splash dosyaları `assets/` altında; gerçek görsellerle değiştirebilirsiniz.
- İkon/illüstrasyon eklemek için kartlara veya header alanlarına SVG/PNG entegre edilebilir.

## Sonraki Adımlar
- Gerçek pedometre ve profil API entegrasyonları.
- Form validasyonlarını genişletme ve kalıcı depolama.
- Erişilebilirlik (VoiceOver/TalkBack) ve çok dillilik desteği.
