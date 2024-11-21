import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Star, Phone, Mail, MapPin, MessageCircle, Info, Navigation, Clock } from 'lucide-react-native';

const DaycareProfile = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Mock data for the daycare
  const daycare = {
    id: 1,
    name: 'Happy Kids Daycare',
    tagline: 'Caring for every child, every need',
    rating: 4.5,
    reviews: 32,
    description: 'Happy Kids Daycare is a nurturing environment where children can learn, play, and grow. Our experienced staff provides a safe and stimulating atmosphere for children of all ages.',
    services: ['Montessori', 'ADHD support', 'After-school care', 'Bilingual program'],
    address: '123 Main St, Anytown, USA',
    phone: '(555) 123-4567',
    email: 'info@happykidsdaycare.com',
    hours: 'Mon-Fri: 7:00 AM - 6:00 PM',
    image: require('../../assets/images/daycare.png'),
  };

  const handleSendMessage = () => {
    router.push(`/daycare/message/${id}` as any);
  };

  const handleRequestInfo = () => {
    // Implement the automated email workflow here
    console.log('Request info button pressed');
  };

  const handleNavigate = () => {
    // Implement navigation to the daycare (e.g., open in Google Maps)
    console.log('Navigate button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: daycare.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{daycare.name}</Text>
          <Text style={styles.tagline}>{daycare.tagline}</Text>
          <View style={styles.ratingContainer}>
            <Star size={20} color="#FFB347" />
            <Text style={styles.rating}>{daycare.rating}</Text>
            <Text style={styles.reviews}>({daycare.reviews} reviews)</Text>
          </View>
          <Text style={styles.description}>{daycare.description}</Text>
          <Text style={styles.sectionTitle}>Services</Text>
          {daycare.services.map((service, index) => (
            <Text key={index} style={styles.service}>• {service}</Text>
          ))}
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.contactItem}>
            <MapPin size={20} color="#111517" />
            <Text style={styles.contactText}>{daycare.address}</Text>
          </View>
          <View style={styles.contactItem}>
            <Phone size={20} color="#111517" />
            <Text style={styles.contactText}>{daycare.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <Mail size={20} color="#111517" />
            <Text style={styles.contactText}>{daycare.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Clock size={20} color="#111517" />
            <Text style={styles.contactText}>{daycare.hours}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
              <MessageCircle size={20} color="#FFFFFF" />
              <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleRequestInfo}>
              <Info size={20} color="#FFFFFF" />
              <Text style={styles.buttonText}>Request Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNavigate}>
              <Navigation size={20} color="#FFFFFF" />
              <Text style={styles.buttonText}>Navigate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111517',
    marginBottom: 4,
  },
  tagline: {
    fontSize: 16,
    color: '#FFB347',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111517',
    marginLeft: 4,
  },
  reviews: {
    fontSize: 14,
    color: '#647987',
    marginLeft: 4,
  },
  description: {
    fontSize: 16,
    color: '#111517',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111517',
    marginTop: 16,
    marginBottom: 8,
  },
  service: {
    fontSize: 16,
    color: '#111517',
    marginBottom: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 16,
    color: '#111517',
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFB347',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default DaycareProfile;

