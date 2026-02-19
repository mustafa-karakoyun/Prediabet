import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '../theme/theme';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onPress, disabled }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && !disabled && styles.buttonPressed, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: theme.radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    marginVertical: theme.spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }]
  },
  buttonDisabled: {
    backgroundColor: theme.colors.muted
  },
  label: {
    color: '#fff',
    fontWeight: '700',
    fontSize: theme.typography.subtitle
  }
});
