import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { InfoItem } from '../components/InfoItem';
import { theme } from '../theme/theme';

const faqs = [
  { q: 'Bu uygulama tıbbi tavsiye yerine geçer mi?', a: 'Hayır, sadece bilgilendirme ve takibi destekler.' },
  { q: 'Verilerim güvenli mi?', a: 'Gerçek projede şifreli saklama ve KVKK uyumu gerekir.' },
  { q: 'Adımsayar gerçek zamanlı mı?', a: 'Şu an mock; pedometre API ile entegre edilebilir.' }
];

const FAQScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>S.S.S.</Text>
        {faqs.map((item) => (
          <InfoItem key={item.q} title={item.q} subtitle={item.a} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: theme.spacing.lg },
  title: { fontSize: 22, fontWeight: '700', marginBottom: theme.spacing.md, color: theme.colors.text }
});

export default FAQScreen;
