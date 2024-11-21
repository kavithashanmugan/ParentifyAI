import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Send } from 'lucide-react-native';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const MessageScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello! How can I help you today?', isUser: false },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newUserMessage: Message = { id: messages.length + 1, text: message, isUser: true };
      setMessages(prevMessages => [...prevMessages, newUserMessage]);
      setMessage('');
      // Simulate a response from the daycare
      setTimeout(() => {
        const newDaycareMessage: Message = {
          id: messages.length + 2,
          text: 'Thank you for your message. We\'ll get back to you shortly.',
          isUser: false
        };
        setMessages(prevMessages => [...prevMessages, newDaycareMessage]);
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#111517" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Happy Kids Daycare</Text>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
        keyboardVerticalOffset={100}
      >
        <ScrollView style={styles.messagesContainer}>
          {messages.map(msg => (
            <View key={msg.id} style={[styles.messageBubble, msg.isUser ? styles.userMessage : styles.daycareMessage]}>
              <Text style={styles.messageText}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message…"
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Send size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F3F4',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111517',
    marginLeft: 16,
  },
  content: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFB347',
  },
  daycareMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F0F3F4',
  },
  messageText: {
    fontSize: 16,
    color: '#111517',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F3F4',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#F0F3F4',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFB347',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MessageScreen;

