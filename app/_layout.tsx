import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF3E0' }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      />
    </View>
  );
}

