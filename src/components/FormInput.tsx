import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { theme } from '../theme/theme';

interface FormInputProps extends TextInputProps {
  label: string;
}

export const FormInput: React.FC<FormInputProps> = ({ label, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.muted}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md
  },
  label: {
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
    fontWeight: '700',
    letterSpacing: 0.2
  },
  input: {
    height: 52,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.card,
    fontSize: theme.typography.body,
    color: theme.colors.text,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.16,
    shadowRadius: 14,
    elevation: 6
  }
});
