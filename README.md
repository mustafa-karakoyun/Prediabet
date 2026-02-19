<<<<<<< HEAD
# Prediabet Mobile (Expo)

MobilUygulama dersi challenge MUK-01. Prediabet temalı bir Expo managed React Native uygulaması. Ana menüden profil, bilgi ekranları, BKİ hesaplama, testler, besin listesi, adımsayar ve Findrisk anketi akışlarını içerir. Mock veriler ve lokal state kullanılır.
# Prediabet
MobilUygulama dersi challenge MUK-01
=======
# Prediabet Mobile (Expo)

Prediabet temalı bir Expo managed React Native uygulaması. Ana menüden profil, bilgi ekranları, BKİ hesaplama, testler, besin listesi, adımsayar ve Findrisk anketi akışlarını içerir. Mock veriler ve lokal state kullanılır.

## Kurulum
1. Node 18+ ve Expo CLI kurulu olmalı (`npm install -g expo-cli` isteğe bağlı).
2. Depoyu klonlayın veya bu klasörde `npm install` çalıştırın.
3. Geliştirme sunucusunu başlatın:
   - `npm start` (veya `npx expo start`)
   - Android: `npm run android`
   - iOS: `npm run ios` (macOS gerektirir)

## Yapı
- `App.tsx`: Navigation container ve tema.
- `src/navigation`: Stack navigator tanımı.
- `src/screens`: Ana ekranlar (Profil, Bilgilendirme, BKİ, Ön/Son Testler, İletişim, Hakkımızda, S.S.S., Besin Ekle, Adımsayar, Risk Anketi).
- `src/components`: Kart, form input ve buton bileşenleri.
- `src/data/mockData.ts`: Mock menü, iletişim, risk soruları ve listeler.
- `src/theme/theme.ts`: Renk ve tipografi teması (kırmızı/beyaz palet).

## Özellikler
- 2 sütunlu ana menü grid.
- BKİ hesaplama (boy/kilo) ve kategori çıktısı.
- Risk anketi toplam puan ve risk seviyesi.
- Besin listesi ekleme (lokal state).
- Adımsayar geçmiş listesi (mock) ve özet.
- Form alanları için temel doğrulama (boş bırakma engeli).

## Tasarım Notları
- Panodaki kırmızı/beyaz görünüm baz alınmıştır.
- Gerçek ikon/splash görselleri eklemek için `assets/` altındaki placeholder dosyalarını değiştirin (örnek: `icon.png`, `splash.png`).
- BKİ görseli veya diğer referans ekranları `assets/` içine yerleştirilebilir.

## Sonraki Adımlar
- Gerçek pedometre, anket ve profil API entegrasyonları.
- Form validasyonlarını genişletme ve kalıcı depolama ekleme.
- Erişilebilirlik (VoiceOver/TalkBack) ve çok dillilik.
>>>>>>> 9b841f3 (chore: initialize Expo 54 project)
