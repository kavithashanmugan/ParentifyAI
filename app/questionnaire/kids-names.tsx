import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function KidsNamesQuestion() {
  const [kidsNames, setKidsNames] = useState(['', '']);
  const [preferNotToSay, setPreferNotToSay] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    // Here you would typically save the kids' names to your app's state or context
    router.push('/questionnaire/location' as any);
  };

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...kidsNames];
    newNames[index] = value;
    setKidsNames(newNames);
  };

  const addNameField = () => {
    setKidsNames([...kidsNames, '']);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What are your children's names or nicknames?</Text>
      {!preferNotToSay && kidsNames.map((name, index) => (
        <View key={index} style={styles.inputContainer}>
          <Label>{`Child ${index + 1}`}</Label>
          <Input
            id={`name${index}`}
            value={name}
            onChangeText={(value) => handleNameChange(index, value)}
            placeholder={`Enter name or nickname for child ${index + 1}`}
          />
        </View>
      ))}
      {!preferNotToSay && (
        <Button onPress={addNameField} variant="outline" style={styles.addButton}>
          Add Another Child
        </Button>
      )}
      <View style={styles.checkboxContainer}>
        <Checkbox
          id="preferNotToSay"
          checked={preferNotToSay}
          onCheckedChange={setPreferNotToSay}
        />
        <Label>Prefer not to say</Label>
      </View>
      <Button onPress={handleContinue} style={styles.button}>
        Continue
      </Button>
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButton: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

