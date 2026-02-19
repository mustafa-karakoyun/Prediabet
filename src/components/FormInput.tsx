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
    fontWeight: '600'
  },
  input: {
    height: 48,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.card,
    fontSize: theme.typography.body,
    color: theme.colors.text
  }
});
