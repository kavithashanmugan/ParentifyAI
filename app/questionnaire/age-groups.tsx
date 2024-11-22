import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const ageGroups = [
  { id: 'infant', label: 'Infant (0-1 year)' },
  { id: 'toddler', label: 'Toddler (1-3 years)' },
  { id: 'preschool', label: 'Preschool (3-5 years)' },
  { id: 'schoolAge', label: 'School Age (5-12 years)' },
  { id: 'teen', label: 'Teen (13+ years)' },
];

export default function AgeGroupsQuestion() {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const router = useRouter();

  const handleContinue = () => {
    router.push('/questionnaire/location');
  };

  const toggleGroup = (id: string) => {
    setSelectedGroups(prev =>
      prev.includes(id) ? prev.filter(groupId => groupId !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What are their age groups?</Text>
      {ageGroups.map((group) => (
        <View key={group.id} style={styles.checkboxContainer}>
          <Checkbox
            checked={selectedGroups.includes(group.id)}
            onCheckedChange={() => toggleGroup(group.id)}
          />
          <Label>{group.label}</Label>
        </View>
      ))}
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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

