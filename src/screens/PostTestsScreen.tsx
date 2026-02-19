import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { InfoItem } from '../components/InfoItem';
import { PrimaryButton } from '../components/PrimaryButton';
import { theme } from '../theme/theme';

const initialTests = [
  { title: 'Açlık Kan Şekeri', subtitle: 'Henüz girilmedi' },
  { title: 'HbA1c', subtitle: 'Henüz girilmedi' },
  { title: 'Oral Glukoz Tolerans', subtitle: 'Henüz girilmedi' }
];

const PostTestsScreen = () => {
  const [tests, setTests] = useState(initialTests);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Placeholder: replace with real save
    setSaved(true);
    setTests((prev) => prev.map((t) => ({ ...t, subtitle: t.subtitle === 'Henüz girilmedi' ? 'Örnek değer eklendi' : t.subtitle })));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Son Testler</Text>
        {tests.map((item) => (
          <InfoItem key={item.title} title={item.title} subtitle={item.subtitle} />
        ))}
        <PrimaryButton label={saved ? 'Kaydedildi' : 'Kaydet'} onPress={handleSave} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: theme.spacing.lg },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: theme.spacing.md,
    color: theme.colors.text
  }
});

export default PostTestsScreen;
