import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  Animated,
  ActivityIndicator
} from 'react-native';
import { Send, Smile, Book, Calendar, Activity } from 'lucide-react-native';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const WelcomeMessages = [
  "Welcome to ParentifyAI! How can I assist you today?",
  "Hello! I'm here to help with any parenting questions or concerns.",
  "Hi there! What parenting topic would you like to explore today?",
];

export default function ExploreScreen() {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: WelcomeMessages[Math.floor(Math.random() * WelcomeMessages.length)], 
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const scrollViewRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const simulateTyping = async (response: string) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsTyping(false);
    setMessages(prev => [...prev, { 
      id: Date.now() + 1, 
      text: response, 
      isUser: false,
      timestamp: new Date()
    }]);
  };

  const generateResponse = (userInput: string) => {
    const responses = [
      `That's a great question about "${userInput}". Here's what I can tell you...`,
      `I understand you're interested in "${userInput}". Let me provide some insights...`,
      `"${userInput}" is an important topic for parents. Here's some helpful information...`,
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSearch = async () => {
    if (input.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    const response = generateResponse(input);
    simulateTyping(response);
  };

  const topics = [
    { title: "Parenting Tips", icon: Book, color: "#2196F3" },
    { title: "Child Development", icon: Activity, color: "#FF9800" },
    { title: "Meal Planning", icon: Calendar, color: "#4CAF50" },
  ];

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: '#F8F9FA' }}
    >
      <Animated.View 
        style={{ flex: 1, opacity: fadeAnim }}
      >
        <View style={{ padding: 16, paddingTop: 48, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#E9ECEF' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#111517', marginBottom: 16 }}>
            Explore Parenting Topics
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {topics.map((topic, index) => (
              <TouchableOpacity key={index} style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: topic.color, padding: 12, borderRadius: 12, marginBottom: 8 }}>
                  <topic.icon size={24} color="white" />
                </View>
                <Text style={{ color: '#111517', fontSize: 14 }}>{topic.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <ScrollView 
          ref={scrollViewRef}
          style={{ flex: 1, paddingHorizontal: 16 }}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map((message) => (
            <View 
              key={message.id} 
              style={{ 
                marginVertical: 8,
                alignSelf: message.isUser ? 'flex-end' : 'flex-start',
                backgroundColor: message.isUser ? '#0D6EFD' : '#F1F3F5',
                borderRadius: 16,
                padding: 12,
                maxWidth: '85%',
              }}
            >
              <Text 
                style={{
                  color: message.isUser ? 'white' : '#212529',
                  fontSize: 16,
                }}
              >
                {message.text}
              </Text>
            </View>
          ))}
          {isTyping && (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <ActivityIndicator color="#6C757D" size="small" />
              <Text style={{ marginLeft: 8, color: '#6C757D' }}>ParentifyAI is typing...</Text>
            </View>
          )}
        </ScrollView>

        <View style={{ paddingHorizontal: 16, paddingVertical: 12, backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#E9ECEF' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F9FA', borderRadius: 24, padding: 8, borderWidth: 1, borderColor: '#E9ECEF' }}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Ask ParentifyAI anything..."
              placeholderTextColor="#6C757D"
              style={{ flex: 1, color: '#212529', fontSize: 16, marginHorizontal: 8 }}
              onSubmitEditing={handleSearch}
              multiline
            />
            <TouchableOpacity 
              onPress={handleSearch}
              style={{ backgroundColor: input.trim() ? '#0D6EFD' : '#E9ECEF', padding: 8, borderRadius: 24 }}
            >
              <Send size={20} color={input.trim() ? "#fff" : "#6C757D"} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

