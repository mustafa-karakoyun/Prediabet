import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';

interface InfoItemProps {
  title: string;
  subtitle?: string;
  muted?: boolean;
}

export const InfoItem: React.FC<InfoItemProps> = ({ title, subtitle, muted }) => {
  return (
    <View style={[styles.item, muted && styles.itemMuted]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.sm
  },
  itemMuted: {
    backgroundColor: theme.colors.soft
  },
  title: {
    fontSize: theme.typography.subtitle,
    fontWeight: '600',
    color: theme.colors.text
  },
  subtitle: {
    marginTop: theme.spacing.xs,
    fontSize: theme.typography.body,
    color: theme.colors.muted
  }
});
