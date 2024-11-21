import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { CheckSquare, Square, ArrowLeft } from 'lucide-react-native';

interface BehaviorData {
  [key: string]: {
    title: string;
    description: string;
    suggestions: string[];
  };
}

const behaviorData: BehaviorData = {
  tantrums: {
    title: 'Tantrums',
    description: 'Tantrums are a normal part of child development. They are how young children show that they are upset or frustrated.',
    suggestions: [
      'Stay calm and do not give in to the tantrum',
      'Try to understand the reason behind the tantrum',
      'Use distraction techniques',
      'Praise good behavior',
      'Ensure your child is getting enough sleep and proper nutrition',
    ],
  },
  bedtime: {
    title: 'Bedtime Issues',
    description: 'Many children resist bedtime. Establishing a consistent routine can help make bedtime easier for everyone.',
    suggestions: [
      'Set a consistent bedtime and wake-up time',
      'Create a relaxing bedtime routine',
      'Limit screen time before bed',
      'Ensure the bedroom is comfortable and conducive to sleep',
      'Be patient and consistent with the routine',
    ],
  },
  'sibling-rivalry': {
    title: 'Sibling Rivalry',
    description: 'Sibling rivalry is common in families with more than one child. It is often how children compete for their parents attention.',
    suggestions: [
      'Avoid comparing siblings to each other',
      'Spend one-on-one time with each child',
      'Teach conflict resolution skills',
      'Encourage cooperation instead of competition',
      'Set clear rules about acceptable behavior',
    ],
  },
  'screen-time': {
    title: 'Screen Time',
    description: 'Managing screen time is a common challenge for modern parents. It is important to find a balance that works for your family.',
    suggestions: [
      'Set clear rules and time limits for screen use',
      'Encourage alternative activities like reading or outdoor play',
      'Be a good role model with your own screen use',
      'Use parental controls and monitor content',
      'Create screen-free zones or times in your home',
    ],
  },
};

export default function BehaviorDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const behavior = behaviorData[id as string];
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(behavior.suggestions.length).fill(false));

  // ... rest of the code remains the same
}

// ... styles remain the same

