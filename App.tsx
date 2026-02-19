import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { theme } from './src/theme/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <RootNavigator />
        <StatusBar style="dark" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  }
});
