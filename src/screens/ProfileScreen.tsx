import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { FormInput } from '../components/FormInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { theme } from '../theme/theme';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = () => {
    // Placeholder: integrate with backend later
    console.log('Profile updated', { name, phone });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Profil Bilgileri</Text>
        <FormInput label="Adı Soyadı" value={name} onChangeText={setName} placeholder="Örn. Ayşe Yılmaz" />
        <FormInput label="Telefon" value={phone} onChangeText={setPhone} placeholder="05xx xxx xx xx" keyboardType="phone-pad" />
        <FormInput label="Şifre" value={password} onChangeText={setPassword} placeholder="********" secureTextEntry />
        <PrimaryButton label="Profili Güncelle" onPress={handleUpdate} disabled={!name || !phone} />
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
    marginBottom: theme.spacing.lg,
    color: theme.colors.text
  }
});

export default ProfileScreen;
