import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const preferences = [
  { id: 'meal-plans', label: 'Customized Meal Plans' },
  { id: 'mindfulness', label: 'Mindfulness Tools' },
  { id: 'parenting-style', label: 'Parenting Style' },
  { id: 'daycare', label: 'Daycare' },
  { id: 'behavioral', label: 'Behavioral Suggestions' },
  { id: 'milestones', label: 'Age-Specific Advice (Milestones)' },
];

const mindfulnessOptions = [
  { id: 'yoga', label: 'Yoga' },
  { id: 'meditation', label: 'Meditation' },
  { id: 'exercises', label: 'Exercises' },
];

export default function PreferencesQuestion() {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [selectedMindfulness, setSelectedMindfulness] = useState<string[]>([]);
  const router = useRouter();

  const handlePreferenceChange = (id: string) => {
    setSelectedPreferences(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleMindfulnessChange = (id: string) => {
    setSelectedMindfulness(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    router.push('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>What are your preferences?</Text>
        <View style={styles.preferencesContainer}>
          {preferences.map((pref) => (
            <View key={pref.id} style={styles.checkboxContainer}>
              <Checkbox
                checked={selectedPreferences.includes(pref.id)}
                onCheckedChange={() => handlePreferenceChange(pref.id)}
              />
              <Label style={styles.label}>{pref.label}</Label>
            </View>
          ))}
        </View>
        <Text style={styles.subtitle}>Additional Mindfulness Options:</Text>
        <View style={styles.preferencesContainer}>
          {mindfulnessOptions.map((option) => (
            <View key={option.id} style={styles.checkboxContainer}>
              <Checkbox
                checked={selectedMindfulness.includes(option.id)}
                onCheckedChange={() => handleMindfulnessChange(option.id)}
              />
              <Label style={styles.label}>{option.label}</Label>
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={handleContinue} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  preferencesContainer: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
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

