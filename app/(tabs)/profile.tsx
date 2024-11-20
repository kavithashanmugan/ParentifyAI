import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Settings } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="p-4 pt-12 flex-row justify-between items-center">
        <Text className="text-2xl font-bold">Profile</Text>
        <TouchableOpacity>
          <Settings size={24} color="#111517" />
        </TouchableOpacity>
      </View>
      
      <ScrollView className="flex-1 p-4">
        <View className="bg-[#f0f3f4] rounded-xl p-4 mb-4">
          <Text className="text-lg font-bold mb-2">Account Settings</Text>
          <Text className="text-[#647987]">Manage your account preferences</Text>
        </View>
        
        <View className="bg-[#f0f3f4] rounded-xl p-4">
          <Text className="text-lg font-bold mb-2">Help & Support</Text>
          <Text className="text-[#647987]">Get help with ParentifyAI</Text>
        </View>
      </ScrollView>
    </View>
  );
}