import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FormInput } from '../components/FormInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { InfoItem } from '../components/InfoItem';
import { foodSamples } from '../data/mockData';
import { theme } from '../theme/theme';

const FoodAddScreen = () => {
  const [items, setItems] = useState(foodSamples);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return;
    setItems((prev) => [input.trim(), ...prev]);
    setInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Besin Ekle</Text>
        <FormInput label="Yeni besin" value={input} onChangeText={setInput} placeholder="Örn. Yoğurt" />
        <PrimaryButton label="Kaydet" onPress={handleAdd} disabled={!input.trim()} />
        <View style={styles.list}>
          {items.map((item, idx) => (
            <InfoItem key={`${item}-${idx}`} title={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  content: { padding: theme.spacing.lg },
  title: { fontSize: 22, fontWeight: '700', marginBottom: theme.spacing.md, color: theme.colors.text },
  list: { marginTop: theme.spacing.md }
});

export default FoodAddScreen;
