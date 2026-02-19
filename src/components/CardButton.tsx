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
    padding: theme.spacing.lg,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 8,
    margin: theme.spacing.sm,
    overflow: 'hidden'
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    shadowOpacity: 0.18
  },
  textContainer: {
    gap: theme.spacing.xs
  },
  label: {
    fontSize: theme.typography.subtitle,
    fontWeight: '700',
    color: theme.colors.text,
    letterSpacing: 0.2
  },
  description: {
    fontSize: theme.typography.body,
    color: theme.colors.muted
  }
});
