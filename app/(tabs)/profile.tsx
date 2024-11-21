import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Settings, HelpCircle, User } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <TouchableOpacity>
          <Settings size={24} color="#111517" />
        </TouchableOpacity>
      </View>

      {/* Profile Info Section */}
      <View style={styles.profileInfo}>
        <Text style={styles.userName}>Jane Doe</Text>
        <Text style={styles.userEmail}>janedoe@example.com</Text>
      </View>

      {/* Options Section */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={{ paddingBottom: 16, marginTop:16 }}>
        {/* Account Settings */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <Settings size={24} color="#111517" />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Account Settings</Text>
              <Text style={styles.cardSubtitle}>Manage your account preferences</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Help & Support */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <HelpCircle size={24} color="#111517" />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Help & Support</Text>
              <Text style={styles.cardSubtitle}>Get help with ParentifyAI</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f3f4',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111517',
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111517',
  },
  userEmail: {
    fontSize: 14,
    color: '#647987',
    marginTop: 4,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  card: {
    backgroundColor: '#f0f3f4',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111517',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#647987',
    marginTop: 4,
  },
});
