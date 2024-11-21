import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Video, Play, BookOpen, Leaf } from 'lucide-react-native';

type Section = 'videos' | 'exercises' | 'areas';

const MindfulnessScreen = () => {
  const [activeSection, setActiveSection] = useState<Section>('videos');

  const renderContent = () => {
    switch (activeSection) {
      case 'videos':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Mindfulness Videos</Text>
            {/* Add video components here */}
            <Text style={styles.placeholder}>Video content will be displayed here</Text>
          </View>
        );
      case 'exercises':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Mindfulness Exercises</Text>
            {/* Add exercise components here */}
            <Text style={styles.placeholder}>Exercise content will be displayed here</Text>
          </View>
        );
      case 'areas':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Mindfulness Areas</Text>
            {/* Add mindfulness areas components here */}
            <Text style={styles.placeholder}>Mindfulness areas content will be displayed here</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.sidebar}>
          <TouchableOpacity
            style={[styles.sidebarItem, activeSection === 'videos' && styles.activeSidebarItem]}
            onPress={() => setActiveSection('videos')}
          >
            <Video size={24} color={activeSection === 'videos' ? '#007AFF' : '#111517'} />
            <Text style={[styles.sidebarText, activeSection === 'videos' && styles.activeSidebarText]}>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sidebarItem, activeSection === 'exercises' && styles.activeSidebarItem]}
            onPress={() => setActiveSection('exercises')}
          >
            <BookOpen size={24} color={activeSection === 'exercises' ? '#007AFF' : '#111517'} />
            <Text style={[styles.sidebarText, activeSection === 'exercises' && styles.activeSidebarText]}>Exercises</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sidebarItem, activeSection === 'areas' && styles.activeSidebarItem]}
            onPress={() => setActiveSection('areas')}
          >
            <Leaf size={24} color={activeSection === 'areas' ? '#007AFF' : '#111517'} />
            <Text style={[styles.sidebarText, activeSection === 'areas' && styles.activeSidebarText]}>Areas</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.mainContent}>
          {renderContent()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 100,
    backgroundColor: '#F0F0F0',
    paddingTop: 20,
  },
  sidebarItem: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  activeSidebarItem: {
    backgroundColor: '#E0E0E0',
  },
  sidebarText: {
    marginTop: 4,
    fontSize: 12,
    color: '#111517',
  },
  activeSidebarText: {
    color: '#007AFF',
  },
  mainContent: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#111517',
  },
  placeholder: {
    fontSize: 16,
    color: '#666',
  },
});

export default MindfulnessScreen;

