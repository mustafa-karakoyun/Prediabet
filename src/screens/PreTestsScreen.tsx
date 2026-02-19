import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { theme } from '../theme/theme';

const questions = [
  'Son 6 ayda açlık kan şekeri ölçtünüz mü?',
  'Ailenizde diyabet öyküsü var mı?',
  'Haftada 3+ gün egzersiz yapıyor musunuz?',
  'Günlük sebze/meyve tüketiminiz yeterli mi?'
];

const options = ['Evet', 'Hayır'];

type AnswerMap = { [key: number]: string };

const PreTestsScreen = () => {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [saved, setSaved] = useState(false);

  const select = (qIdx: number, value: string) => {
    setSaved(false);
    setAnswers((prev) => ({ ...prev, [qIdx]: value }));
  };

  const handleSave = () => setSaved(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Ön Testler</Text>
        {questions.map((q, idx) => (
          <View key={q} style={styles.questionCard}>
            <Text style={styles.question}>{q}</Text>
            <View style={styles.optionRow}>
              {options.map((opt) => {
                const selected = answers[idx] === opt;
                return (
                  <Pressable key={opt} style={[styles.option, selected && styles.optionSelected]} onPress={() => select(idx, opt)}>
                    <Text style={[styles.optionText, selected && styles.optionTextSelected]}>{opt}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}
        <PrimaryButton label={saved ? 'Kaydedildi' : 'Kaydet'} onPress={handleSave} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: theme.spacing.lg },
  title: { fontSize: 22, fontWeight: '700', marginBottom: theme.spacing.md, color: theme.colors.text },
  questionCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md
  },
  question: { fontSize: theme.typography.subtitle, fontWeight: '600', color: theme.colors.text, marginBottom: theme.spacing.sm },
  optionRow: { flexDirection: 'row', gap: theme.spacing.sm },
  option: {
    flex: 1,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center'
  },
  optionSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.soft
  },
  optionText: { color: theme.colors.text, fontWeight: '600' },
  optionTextSelected: { color: theme.colors.primary }
});

export default PreTestsScreen;
