import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FormInput } from '../components/FormInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { theme } from '../theme/theme';

const BMIScreen = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [saved, setSaved] = useState(false);

  const { bmi, category } = useMemo(() => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w) return { bmi: undefined, category: undefined };
    const meters = h / 100;
    const value = +(w / (meters * meters)).toFixed(1);
    let cat: string | undefined;
    if (value < 18.5) cat = 'Düşük kilolu';
    else if (value < 25) cat = 'Normal';
    else if (value < 30) cat = 'Fazla kilolu';
    else cat = 'Obez';
    return { bmi: value, category: cat };
  }, [height, weight]);

  const handleSave = () => {
    setSaved(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>BKİ Hesaplama</Text>
        <FormInput label="Boy (cm)" keyboardType="numeric" value={height} onChangeText={(text) => { setSaved(false); setHeight(text); }} placeholder="170" />
        <FormInput label="Kilo (kg)" keyboardType="numeric" value={weight} onChangeText={(text) => { setSaved(false); setWeight(text); }} placeholder="70" />
        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>Sonuç</Text>
          <Text style={styles.resultValue}>{bmi ? bmi : '--'}</Text>
          <Text style={styles.resultCategory}>{category || 'Bilgileri giriniz'}</Text>
        </View>
        <PrimaryButton label={saved ? 'Kaydedildi' : 'Kaydet'} onPress={handleSave} disabled={!bmi} />
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
  },
  resultCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
    marginBottom: theme.spacing.md
  },
  resultLabel: {
    color: theme.colors.muted,
    marginBottom: theme.spacing.xs
  },
  resultValue: {
    fontSize: 36,
    fontWeight: '800',
    color: theme.colors.primary
  },
  resultCategory: {
    marginTop: theme.spacing.xs,
    color: theme.colors.text,
    fontWeight: '600'
  }
});

export default BMIScreen;
