import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Search, Settings } from 'lucide-react-native';

export default function ExploreScreen() {
  return (
    <View className="flex-1 bg-[#111517]">
      <View className="p-4 pt-12 flex-row justify-between items-center">
        <Text className="text-white text-xl font-bold">
          What would you like to learn about?
        </Text>
        <TouchableOpacity>
          <Settings size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View className="px-4 py-2">
        <View className="flex-row items-center bg-[#1e2527] rounded-lg p-3">
          <Search size={20} color="#647987" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#647987"
            className="flex-1 ml-2 text-white"
          />
        </View>
      </View>

      <ScrollView className="flex-1 p-4">
        <View className="bg-[#1e2527] rounded-lg p-4 mb-4">
          <View className="flex-row items-center mb-2">
            <Image
              source={{ uri: "https://placekitten.com/40/40" }}
              className="w-10 h-10 rounded-full"
            />
            <Text className="text-white ml-3">How can I help you today?</Text>
          </View>
          <View className="bg-[#2d3436] rounded-lg p-3">
            <Text className="text-[#647987]">Ask a question...</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}