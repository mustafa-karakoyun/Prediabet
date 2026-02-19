import React, { useMemo } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { InfoItem } from '../components/InfoItem';
import { pedometerHistory } from '../data/mockData';
import { theme } from '../theme/theme';

const PedometerScreen = () => {
  const total = useMemo(() => pedometerHistory.reduce((sum, item) => sum + item.steps, 0), []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Adımsayar</Text>
        <View style={styles.summary}>
          <Text style={styles.summaryLabel}>Adım Sayısı</Text>
          <Text style={styles.summaryValue}>70951</Text>
          <Text style={styles.summarySub}>Geçmiş toplam: {total}</Text>
        </View>
        <Text style={styles.sectionTitle}>Geçmiş Adımlarım</Text>
        {pedometerHistory.map((item) => (
          <InfoItem key={item.date} title={`Adım Sayısı: ${item.steps}`} subtitle={`Tarih: ${item.date}`} />
        ))}
        <PrimaryButton label="Haftalık Adımlarım" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: theme.spacing.lg },
  title: { fontSize: 22, fontWeight: '700', marginBottom: theme.spacing.md, color: theme.colors.text },
  summary: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.lg,
    alignItems: 'center',
    marginBottom: theme.spacing.lg
  },
  summaryLabel: { color: theme.colors.muted, marginBottom: theme.spacing.xs, fontWeight: '600' },
  summaryValue: { fontSize: 32, fontWeight: '800', color: theme.colors.primary },
  summarySub: { marginTop: theme.spacing.xs, color: theme.colors.text },
  sectionTitle: {
    fontSize: theme.typography.subtitle,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm
  }
});

export default PedometerScreen;
