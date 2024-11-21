import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, Star } from 'lucide-react-native';

interface Daycare {
  id: number;
  name: string;
  rating: number;
  address: string;
}

const DaycareFinder: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDaycare, setSelectedDaycare] = useState<Daycare | null>(null);

  const daycares: Daycare[] = [
    { id: 1, name: 'Happy Kids Daycare', rating: 4.5, address: '123 Main St, Anytown, Canada' },
    { id: 2, name: 'Little Learners Center', rating: 4.2, address: '456 Oak Ave, Somewhere, Canada' },
    { id: 3, name: 'Sunshine Daycare', rating: 4.7, address: '789 Elm St, Elsewhere, Canada' },
    { id: 4, name: 'Tiny Tots Preschool', rating: 4.3, address: '101 Pine Rd, Anywhere, Canada' },
  ];

  const renderDaycareItem = (daycare: Daycare) => (
    <TouchableOpacity
      key={daycare.id}
      style={styles.daycareItem}
      onPress={() => setSelectedDaycare(daycare)}
    >
      <Text style={styles.daycareName}>{daycare.name}</Text>
      <View style={styles.ratingContainer}>
        <Star size={16} color="#FFB347" />
        <Text style={styles.ratingText}>{daycare.rating}</Text>
      </View>
      <Text style={styles.addressText}>{daycare.address}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Find a Daycare Near You</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name, type, or location"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Search size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Filter size={20} color="#111517" />
        <Text style={styles.filterText}>Filters</Text>
      </TouchableOpacity>
      <ScrollView style={styles.daycareList}>
        {daycares.map(renderDaycareItem)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111517',
    textAlign: 'center',
    marginVertical: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#F0F3F4',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  searchButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFB347',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFB347',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginBottom: 16,
  },
  filterText: {
    marginLeft: 8,
    color: '#111517',
    fontWeight: 'bold',
  },
  daycareList: {
    flex: 1,
  },
  daycareItem: {
    backgroundColor: '#F0F3F4',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  daycareName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111517',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    marginLeft: 4,
    color: '#111517',
  },
  addressText: {
    color: '#647987',
  },
});

export default DaycareFinder;

