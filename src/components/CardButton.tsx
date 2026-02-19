import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';

interface CardButtonProps {
  label: string;
  onPress: () => void;
  description?: string;
}

export const CardButton: React.FC<CardButtonProps> = ({ label, description, onPress }) => {
  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.cardPressed]} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 88,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: theme.spacing.md,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    margin: theme.spacing.sm
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    shadowOpacity: 0.05
  },
  textContainer: {
    gap: theme.spacing.xs
  },
  label: {
    fontSize: theme.typography.subtitle,
    fontWeight: '700',
    color: theme.colors.text
  },
  description: {
    fontSize: theme.typography.body,
    color: theme.colors.muted
  }
});
