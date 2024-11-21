import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { AlertTriangle, Moon, Users, Tv, Info } from 'lucide-react-native';

const behaviors = [
  { id: 'tantrums', title: 'Tantrums', icon: AlertTriangle },
  { id: 'bedtime', title: 'Bedtime Issues', icon: Moon },
  { id: 'sibling-rivalry', title: 'Sibling Rivalry', icon: Users },
  { id: 'screen-time', title: 'Screen Time', icon: Tv },
];

const quickTips = [
  "Deep breathing can calm both you and your child.",
  "Consistency is key in addressing behavioral issues.",
  "Positive reinforcement can be more effective than punishment.",
  "Remember to take care of yourself too - parenting is challenging!",
];

export default function BehavioralSupportScreen() {
  const router = useRouter();
  const [currentTipIndex, setCurrentTipIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % quickTips.length);
    }, 10000); // Change tip every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Behavioral Support</Text>
        <Text style={styles.subtitle}>Tackle everyday challenges with expert suggestions.</Text>

        <View style={styles.grid}>
          {behaviors.map((behavior) => (
            <TouchableOpacity
              key={behavior.id}
              style={styles.card}
              onPress={() => router.push(`/behavioral/${behavior.id}` as any)}
            >
              <behavior.icon size={32} color="#FF6347" />
              <Text style={styles.cardTitle}>{behavior.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.quickTipBanner}>
          <Info size={24} color="#FF6347" />
          <Text style={styles.quickTipText}>{quickTips[currentTipIndex]}</Text>
        </View>
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
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111517',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#647987',
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#111517',
    textAlign: 'center',
  },
  quickTipBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },
  quickTipText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: '#111517',
  },
});
