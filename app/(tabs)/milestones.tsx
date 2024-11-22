import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trophy, ArrowRight, Bell, Award, Activity, Brain, Users, MessageCircle } from 'lucide-react-native';

export default function MilestonesScreen() {
  const childName = "Aarav"; // This would come from your app's state management
  const ageInWeeks = 114; // This would come from your app's state management

  const milestoneCategories = [
    {
      title: "Physical",
      icon: Activity,
      color: "#4CAF50",
      completedMilestones: 12,
      totalMilestones: 15,
    },
    {
      title: "Cognitive",
      icon: Brain,
      color: "#2196F3",
      completedMilestones: 8,
      totalMilestones: 10,
    },
    {
      title: "Social",
      icon: Users,
      color: "#FF9800",
      completedMilestones: 5,
      totalMilestones: 8,
    },
    {
      title: "Language",
      icon: MessageCircle,
      color: "#9C27B0",
      completedMilestones: 7,
      totalMilestones: 12,
    },
  ];

  const upcomingMilestones = [
    "First steps",
    "Says 'mama' or 'dada'",
    "Waves goodbye",
    "Drinks from a cup",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.childName}>{childName}</Text>
            <Text style={styles.ageText}>{ageInWeeks} weeks</Text>
          </View>
          <TouchableOpacity style={styles.referButton}>
            <Trophy size={20} color="#6B2D5C" />
            <Text style={styles.referButtonText}>Milestones</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Overview */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Milestone Progress</Text>
          <View style={styles.progressGrid}>
            {milestoneCategories.map((category, index) => (
              <View key={index} style={styles.progressItem}>
                <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
                  <category.icon size={24} color="white" />
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.progressText}>
                  {category.completedMilestones}/{category.totalMilestones}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Upcoming Milestones */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Upcoming Milestones</Text>
            <Bell size={20} color="#6B2D5C" />
          </View>
          {upcomingMilestones.map((milestone, index) => (
            <TouchableOpacity key={index} style={styles.milestoneItem}>
              <Award size={20} color="#6B2D5C" />
              <Text style={styles.milestoneText}>{milestone}</Text>
              <ArrowRight size={20} color="#6B2D5C" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Trophy size={20} color="white" />
            <Text style={styles.actionButtonText}>Log Milestone</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Bell size={20} color="white" />
            <Text style={styles.actionButtonText}>Set Reminder</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 20,
  },
  childName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111517',
  },
  ageText: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  referButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
    padding: 12,
    borderRadius: 20,
    gap: 8,
  },
  referButtonText: {
    color: '#6B2D5C',
    fontWeight: '600',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    margin: 16,
    marginTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6B2D5C',
    marginBottom: 16,
  },
  progressGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  progressItem: {
    width: '48%',
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111517',
    marginBottom: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
  milestoneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  milestoneText: {
    flex: 1,
    fontSize: 16,
    color: '#111517',
    marginLeft: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B6B',
    padding: 16,
    borderRadius: 25,
    gap: 8,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

