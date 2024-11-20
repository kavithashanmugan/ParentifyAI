import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function MarketplaceScreen() {
  const discussions = [
    {
      title: "What's the best age for starting potty training?",
      community: "Parenting community",
      replies: 6,
      image: "https://placekitten.com/300/200"
    }
  ];

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        {discussions.map((discussion, index) => (
          <View key={index} className="bg-[#e0f2f1] rounded-xl overflow-hidden mb-4">
            <Image
              source={{ uri: discussion.image }}
              className="w-full h-48"
            />
            <View className="p-4">
              <Text className="text-xl font-bold text-[#111517] mb-2">
                {discussion.title}
              </Text>
              <Text className="text-[#647987] mb-2">
                {discussion.community} • {discussion.replies} replies
              </Text>
              <TouchableOpacity className="bg-[#111517] rounded-lg py-2 px-4 self-start">
                <Text className="text-white font-medium">Join the discussion</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}