import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView, FlatList, TextInput } from 'react-native';
import { Utensils, Plus, Search, ChevronRight, MessageCircle } from 'lucide-react-native';
import { Link } from 'expo-router';

interface Meal {
  id: number;
  name: string;
  dish: string;
  image: string;
}

interface WeeklyPlanItem {
  id: number;
  day: string;
  dish: string;
}

export default function MealPlanScreen() {
  const [activeTab, setActiveTab] = useState<'today' | 'week'>('today');

  const todayMeals: Meal[] = [
    { id: 1, name: 'Breakfast', dish: 'Avocado Toast', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww' },
    { id: 2, name: 'Lunch', dish: 'Grilled Chicken Salad', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JpbGxlZCUyMGNoaWNrZW4lMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, name: 'Dinner', dish: 'Salmon with Roasted Vegetables', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9uJTIwd2l0aCUyMHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D' },
  ];

  const weeklyPlan: WeeklyPlanItem[] = [
    { id: 1, day: 'Mon', dish: 'Pasta Primavera' },
    { id: 2, day: 'Tue', dish: 'Taco Tuesday' },
    { id: 3, day: 'Wed', dish: 'Grilled Salmon' },
    { id: 4, day: 'Thu', dish: 'Vegetable Stir Fry' },
    { id: 5, day: 'Fri', dish: 'Homemade Pizza' },
    { id: 6, day: 'Sat', dish: 'BBQ Chicken' },
    { id: 7, day: 'Sun', dish: 'Roast Dinner' },
  ];

  const renderMealCard = ({ item }: { item: Meal }) => (
    <View style={{ 
      backgroundColor: 'white', 
      borderRadius: 12, 
      marginBottom: 16, 
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: '100%', height: 160, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>{item.name}</Text>
        <Text style={{ fontSize: 16, color: '#666', marginBottom: 12 }}>{item.dish}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ backgroundColor: '#007AFF', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>View Recipe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#34C759', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>Start Cooking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderWeeklyPlanItem = ({ item }: { item: WeeklyPlanItem }) => (
    <View style={{ 
      backgroundColor: 'white', 
      borderRadius: 12, 
      padding: 16, 
      marginRight: 12,
      width: 120,
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>{item.day}</Text>
      <Text style={{ fontSize: 14, textAlign: 'center' }}>{item.dish}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F7' }}>
      <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#111517' }}>Your Meal Plan</Text>
          <Text style={{ fontSize: 16, color: '#666', marginTop: 4 }}>Tailored nutrition for your family</Text>
        </View>
        {/* <TouchableOpacity>
          <Search size={24} color="#111517" />
        </TouchableOpacity> */}
      </View>

      <View style={{ flexDirection: 'row', paddingHorizontal: 16, marginBottom: 16 }}>
        <TouchableOpacity 
          onPress={() => setActiveTab('today')}
          style={{ 
            marginRight: 16,
            borderBottomWidth: 2,
            borderBottomColor: activeTab === 'today' ? '#007AFF' : 'transparent',
            paddingBottom: 8
          }}
        >
          <Text style={{ 
            fontSize: 16,
            fontWeight: activeTab === 'today' ? 'bold' : 'normal',
            color: activeTab === 'today' ? '#007AFF' : '#666'
          }}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setActiveTab('week')}
          style={{ 
            borderBottomWidth: 2,
            borderBottomColor: activeTab === 'week' ? '#007AFF' : 'transparent',
            paddingBottom: 8
          }}
        >
          <Text style={{ 
            fontSize: 16,
            fontWeight: activeTab === 'week' ? 'bold' : 'normal',
            color: activeTab === 'week' ? '#007AFF' : '#666'
          }}>
            This Week
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {activeTab === 'today' ? (
          <View style={{ paddingHorizontal: 16 }}>
            <FlatList
              data={todayMeals}
              renderItem={renderMealCard}
              keyExtractor={item => item.id.toString()}
              scrollEnabled={false}
            />
          </View>
        ) : (
          <View style={{ paddingLeft: 16 }}>
            <FlatList
              data={weeklyPlan}
              renderItem={renderWeeklyPlanItem}
              keyExtractor={item => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}

        <View style={{ marginTop: 24, paddingHorizontal: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#111517' }}>
              Recipe Library
            </Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#007AFF', marginRight: 4 }}>See all</Text>
              <ChevronRight size={20} color="#007AFF" />
            </TouchableOpacity>
          </View>
          {/* Recipe library content would go here */}
        </View>
      </ScrollView>

      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#111517', 
        padding: 16, 
        borderTopWidth: 1, 
        borderTopColor: '#2d3436' 
      }}>
        <TextInput
          placeholder="Ask me anything about meal planning"
          placeholderTextColor="#647987"
          style={{ 
            flex: 1, 
            color: 'white', 
            fontSize: 16, 
            marginRight: 8 
          }}
        />
        <TouchableOpacity>
          <MessageCircle size={24} color="#647987" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={{
          position: 'absolute',
          right: 16,
          bottom: 80, // Adjusted to account for the "Ask me anything" bar
          backgroundColor: '#007AFF',
          width: 56,
          height: 56,
          borderRadius: 28,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Plus size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

