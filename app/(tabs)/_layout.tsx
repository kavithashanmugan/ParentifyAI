import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { Tabs, useRouter } from 'expo-router';
import { Menu as MenuIcon, Home, Search, Bot, Calendar, User, Leaf, Home as DaycareIcon, AlertTriangle, Gift, Star } from 'lucide-react-native';

interface MenuProps {
  onItemSelected: (route: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onItemSelected }) => (
  <View style={styles.menu}>
    <TouchableOpacity onPress={() => onItemSelected('/')}>
      <Text style={styles.menuItem}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onItemSelected('/explore')}>
      <Text style={styles.menuItem}>Explore</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onItemSelected('/mealplan')}>
      <Text style={styles.menuItem}>MealPlan</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onItemSelected('/mindfulness')}>
      <Text style={styles.menuItem}>Mindfulness</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onItemSelected('/daycare')}>
      <Text style={styles.menuItem}>Daycare Finder</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onItemSelected('/profile')}>
      <Text style={styles.menuItem}>Profile</Text>
    </TouchableOpacity>
  </View>
);

export default function TabsLayout() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  const handleMenuItemSelect = (route: string) => {
    setOpen(false);
    router.push(route as any);
  };

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => <Menu onItemSelected={handleMenuItemSelect} />}
      drawerType="slide"
      drawerPosition="right"
      drawerStyle={{ width: width * 0.7 }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.menuButton}>
          <MenuIcon size={24} color="#111517" />
        </TouchableOpacity>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#FFB347',
            tabBarInactiveTintColor: '#111517',
            tabBarStyle: { backgroundColor: '#FFFFFF' },
            tabBarLabelStyle: { fontSize: 12 },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <Home size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: 'Explore',
              tabBarIcon: ({ color }) => <Bot size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="mealplan"
            options={{
              title: 'Meal Plan',
              tabBarIcon: ({ color }) => <Calendar size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="mindfulness"
            options={{
              title: 'Mindfulness',
              tabBarIcon: ({ color }) => <Leaf size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="daycare"
            options={{
              title: 'Daycare',
              tabBarIcon: ({ color }) => <DaycareIcon size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="behavioral"
            options={{
              title: 'Behavioral',
              tabBarIcon: ({ color }) => <AlertTriangle size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="milestones"
            options={{
              title: 'Milestones',
              tabBarIcon: ({ color }) => <Star size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="marketplace"
            options={{
              title: 'Marketplace',
              tabBarIcon: ({ color }) => <Gift size={24} color={color} />,
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ color }) => <User size={24} color={color} />,
            }}
          />
        </Tabs>
      </View>
    </Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    flex: 1,
    backgroundColor: '#FFB347',
    padding: 20,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
    color: '#111517',
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#FFB347',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    right: 10,
    zIndex: 1,
    borderRadius: 8,
  },
});

