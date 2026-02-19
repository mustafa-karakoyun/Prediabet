import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CardButton } from '../components/CardButton';
import { menuItems } from '../data/mockData';
import { RootStackParamList } from '../navigation';
import { theme } from '../theme/theme';

const HomeScreen: React.FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Prediabet+</Text>
        </View>
        <Text style={styles.title}>Hızlı erişim</Text>
        <Text style={styles.subtitle}>Temel kontroller ve rehberlik</Text>
      </View>
      <FlatList
        data={menuItems}
        numColumns={2}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <CardButton label={item.label} onPress={() => navigation.navigate(item.key as keyof RootStackParamList)} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  hero: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.lg,
    gap: theme.spacing.sm
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.soft,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  badgeText: {
    color: theme.colors.muted,
    fontWeight: '700',
    letterSpacing: 0.4
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: theme.colors.text
  },
  subtitle: {
    marginTop: theme.spacing.xs,
    color: theme.colors.muted,
    fontSize: theme.typography.body
  },
  list: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.lg
  }
});

export default HomeScreen;
