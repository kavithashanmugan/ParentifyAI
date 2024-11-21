import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function KidsCountQuestion() {
  const [kidsCount, setKidsCount] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    router.push('/questionnaire/age-groups');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How many kids do you have?</Text>
      <View style={styles.inputContainer}>
        <Label>Number of Kids</Label>
        <Input
          id="kidsCount"
          value={kidsCount}
          onChangeText={setKidsCount}
          placeholder="Enter number of kids"
          keyboardType="numeric"
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

