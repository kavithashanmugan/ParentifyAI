import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/role-selection');
  };

  const handleSignIn = () => {
    router.push('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/Parentify.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Where parents are alive, families thrive.
          </Text>

          <Text style={styles.subtitle}>
            Get personalized guidance for parenthood.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignIn} style={[styles.button, styles.outlineButton]}>
            <Text style={[styles.buttonText1, styles.outlineButtonText]}>Already a user? Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.termsText}>
          By continuing, you agree to the Terms and Privacy Policy. We'll send you a text with a
          verification code.
        </Text>

        <View style={styles.footerLogoContainer}>
          <Image
            source={{
              uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ParentifyAI-eqW8ogN148ixkr7vflqCiNjWSc9KRo.png',
            }}
            style={styles.footerLogo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.copyrightText}>
          ©2024 Parentify AI. All rights reserved.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  logo: {
    width: 280,
    height: 180,
    borderRadius: 8,
    marginBottom: 16,
  },
  textContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111517',
    textAlign: 'center',
    fontFamily: 'Poppins',
    lineHeight: 36,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#111517',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#FF6347', // Orange color
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF6347',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  outlineButtonText: {
    color: '#FF6347',
  },
  termsText: {
    marginTop: 16,
    fontSize: 14,
    color: '#647987',
    textAlign: 'center',
    fontFamily: 'Roboto',
    paddingHorizontal: 10,
  },
  footerLogoContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  footerLogo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  copyrightText: {
    fontSize: 12,
    color: '#647987',
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginBottom: 24,
  },
});

