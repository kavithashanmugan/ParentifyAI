import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function RoleSelection() {
  const [role, setRole] = useState<string | undefined>(undefined);
  const router = useRouter();

  const handleContinue = () => {
    if (role === 'parent') {
      router.push('/signup');
    } else if (role === 'daycare') {
      // Navigate to daycare provider signup or relevant screen
      // For now, we'll just show an alert
      alert('Daycare provider signup is not implemented yet');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>I am a...</Text>
      <RadioGroup onValueChange={setRole} value={role}>
        <View style={styles.radioItem}>
          <RadioGroupItem value="parent" id="parent" />
          <Label>Parent</Label>
        </View>
        <View style={styles.radioItem}>
          <RadioGroupItem value="daycare" id="daycare" />
          <Label>Daycare Provider</Label>
        </View>
      </RadioGroup>
      <TouchableOpacity
        onPress={handleContinue}
        disabled={!role}
        style={[styles.button, !role && styles.buttonDisabled]}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFAF0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
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
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

