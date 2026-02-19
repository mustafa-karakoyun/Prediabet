import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Hakkımızda</Text>
        <View style={styles.card}>
          <Text style={styles.paragraph}>
            Prediabet uygulaması, risk farkındalığını artırmak ve kullanıcılara pratik günlük takip araçları sağlamak için tasarlandı.
          </Text>
          <Text style={styles.paragraph}>
            Basit arayüz, hızlı form doldurma ve temel ölçümlerle kullanıcıları motive etmeyi hedefliyoruz.
          </Text>
          <Text style={styles.paragraph}>
            Bu sürüm mock veriler kullanır; gerçek entegrasyonlar için API bağlantıları eklenebilir.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: theme.spacing.lg },
  title: { fontSize: 22, fontWeight: '700', marginBottom: theme.spacing.md, color: theme.colors.text },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.lg,
    gap: theme.spacing.sm
  },
  paragraph: {
    fontSize: theme.typography.body,
    color: theme.colors.text,
    lineHeight: 20
  }
});

export default AboutScreen;
