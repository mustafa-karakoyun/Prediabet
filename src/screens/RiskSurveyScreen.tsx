import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { riskSurveyQuestions } from '../data/mockData';
import { theme } from '../theme/theme';

type Answers = { [key: number]: number };

const RiskSurveyScreen = () => {
  const [answers, setAnswers] = useState<Answers>({});
  const [saved, setSaved] = useState(false);

  const total = useMemo(() => Object.values(answers).reduce((acc, cur) => acc + cur, 0), [answers]);

  const level = useMemo(() => {
    if (total === 0) return 'Henüz hesaplanmadı';
    if (total < 5) return 'Düşük risk';
    if (total < 9) return 'Orta risk';
    return 'Yüksek risk';
  }, [total]);

  const select = (qIdx: number, score: number) => {
    setSaved(false);
    setAnswers((prev) => ({ ...prev, [qIdx]: score }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Findrisk Anketi</Text>
        {riskSurveyQuestions.map((q, idx) => (
          <View key={q.title} style={styles.card}>
            <Text style={styles.question}>{q.title}</Text>
            {q.options.map((opt) => {
              const selected = answers[idx] === opt.score;
              return (
                <Pressable key={opt.label} style={[styles.option, selected && styles.optionSelected]} onPress={() => select(idx, opt.score)}>
                  <Text style={[styles.optionText, selected && styles.optionTextSelected]}>{opt.label}</Text>
                  <Text style={[styles.score, selected && styles.optionTextSelected]}>Puan: {opt.score}</Text>
                </Pressable>
              );
            })}
          </View>
        ))}
        <View style={styles.result}>
          <Text style={styles.resultLabel}>Toplam Puan</Text>
          <Text style={styles.resultValue}>{total}</Text>
          <Text style={styles.resultLevel}>{level}</Text>
        </View>
        <PrimaryButton label={saved ? 'Kaydedildi' : 'Kaydet'} onPress={() => setSaved(true)} />
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
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    gap: theme.spacing.sm
  },
  question: { fontSize: theme.typography.subtitle, fontWeight: '700', color: theme.colors.text },
  option: {
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.card,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionSelected: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.soft
  },
  optionText: { color: theme.colors.text, fontWeight: '600' },
  optionTextSelected: { color: theme.colors.primary },
  score: { color: theme.colors.muted },
  result: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.lg,
    alignItems: 'center',
    marginTop: theme.spacing.md
  },
  resultLabel: { color: theme.colors.muted },
  resultValue: { fontSize: 32, fontWeight: '800', color: theme.colors.primary },
  resultLevel: { marginTop: theme.spacing.xs, fontWeight: '700', color: theme.colors.text }
});

export default RiskSurveyScreen;
