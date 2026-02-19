import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { InfoItem } from '../components/InfoItem';
import { infoArticles } from '../data/mockData';
import { theme } from '../theme/theme';

const InfoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Bilgilendirme</Text>
        {infoArticles.map((item) => (
          <InfoItem key={item.title} title={item.title} subtitle={item.subtitle} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: {
    padding: theme.spacing.lg
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: theme.spacing.md,
    color: theme.colors.text
  }
});

export default InfoScreen;
