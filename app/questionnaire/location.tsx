import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LocationQuestion() {
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    router.push('/questionnaire/preferences');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Where are you located?</Text>
      <View style={styles.inputContainer}>
        <Label>Location</Label>
        <Input
          id="location"
          value={location}
          onChangeText={setLocation}
          placeholder="Enter your city or zip code"
        />
      </View>
      <TouchableOpacity onPress={handleContinue} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFAF0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    gap: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

