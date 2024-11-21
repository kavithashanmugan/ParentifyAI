import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, SafeAreaView, TextInput } from 'react-native';
import { Settings, MessageCircle } from 'lucide-react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const articles = [
    {
      title: "How to help your child sleep through the night",
      type: "AI guide",
      duration: "3 min read",
      image: "https://cdn.usegalileo.ai/sdxl10/71a2c1b0-9b2d-4c8c-89c6-87c43a8aff50.png"
    },
    {
      title: "Get ready for daycare",
      type: "AI guide",
      duration: "5 min read",
      image: "https://cdn.usegalileo.ai/stability/2058a638-3565-40f3-b254-e4e147ef6742.png"
    },
    {
      title: "Find the perfect daycare",
      type: "AI guide",
      duration: "3 min read",
      image: "https://cdn.usegalileo.ai/stability/b2128d10-7cf4-44d4-a4ba-691b67e42306.png"
    },
    {
      title: "Track your child's development",
      type: "AI guide",
      duration: "2 min read",
      image: "https://cdn.usegalileo.ai/sdxl10/596e489c-c041-4171-9c13-91dd3f44c848.png"
    },
    {
      title: "What's the best age for starting potty training?",
      type: "Parenting community",
      duration: "6 replies",
      image: "https://cdn.usegalileo.ai/stability/6a2b08d3-df84-4510-bb13-d6423d6aff50.png"
    }
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFAF0' }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16, paddingTop: 8 }}>
          {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity>
              <Settings size={24} color="#111517" />
            </TouchableOpacity>
          </View> */}
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#111517', marginTop: 16, marginBottom: 8 }}>
            Hi, welcome back
          </Text>
        </View>

        {articles.map((article, index) => (
          <View key={index} style={{ padding: 16 }}>
            <ImageBackground
              source={{ uri: article.image }}
              style={{ height: 200, borderRadius: 12, overflow: 'hidden' }}
              imageStyle={{ borderRadius: 12 }}
            >
              <View style={{ 
                flex: 1, 
                justifyContent: 'flex-end', 
                padding: 16,
                backgroundColor: 'rgba(0,0,0,0.4)'
              }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                  {article.title}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                  <Text style={{ color: 'white' }}>
                    {article.type} · {article.duration}
                  </Text>
                  <TouchableOpacity 
                    style={{ 
                      backgroundColor: '#FF6347', 
                      paddingHorizontal: 16, 
                      paddingVertical: 8, 
                      borderRadius: 8 
                    }}
                  >
                    <Text style={{ color: '#111517', fontWeight: '500' }}>Read now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
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
          placeholder="Ask me anything"
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
    </SafeAreaView>
  );
}