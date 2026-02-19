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
      <View style={styles.header}>
        <Text style={styles.title}>Prediabet</Text>
        <Text style={styles.subtitle}>Hızlı erişim ve temel kontroller</Text>
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
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.md
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: theme.colors.primary
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
