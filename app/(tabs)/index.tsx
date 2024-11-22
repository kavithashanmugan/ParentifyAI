import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const sections = [
    {
      title: 'Daycare Services',
      description: 'Explore trusted daycare options tailored to your needs.',
      image: 'https://cdn.usegalileo.ai/sdxl10/841a0466-38fb-4d87-b074-7de27df69130.png',
      link: '/daycare',
    },
    {
      title: 'Child Behavior',
      description: 'Discover tips and tools to nurture positive behavior in your child.',
      image: 'https://cdn.usegalileo.ai/sdxl10/e9f8c712-9beb-45e4-859a-db3221926481.png',
      link: '/behavioral',
    },
    {
      title: 'Child Milestones',
      description: 'Track and celebrate your child growth and developmental achievements.',
      image: 'https://cdn.usegalileo.ai/sdxl10/1abeffb9-5a85-4dfa-9915-98350032fc67.png',
      link: '/milestones',
    },
    {
      title: 'Marketplace',
      description: 'Shop products and services curated for parenting and childcare.',
      image: 'https://cdn.usegalileo.ai/sdxl10/d3d11315-55f1-4f1c-97b1-e1e29f9f11e6.png',
      link: '/marketplace',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={{ uri: 'https://cdn.usegalileo.ai/sdxl10/63d6ef14-4981-47e3-9b66-b836f7bc26e6.png' }}
          style={styles.headerImage}
          imageStyle={styles.headerImageStyle}
        >
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Parenting</Text>
          </View>
        </ImageBackground>

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Welcome Back!</Text>
          <Text style={styles.welcomeSubtitle}>
            Discover resources and tools to support your parenting journey.
          </Text>
        </View>

        {sections.map((section, index) => (
          <Link key={index} href={section.link as any} asChild>
            <TouchableOpacity style={styles.sectionContainer}>
              <ImageBackground
                source={{ uri: section.image }}
                style={styles.sectionImage}
                imageStyle={styles.sectionImageStyle}
              >
                <View style={styles.sectionContent}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                  <Text style={styles.sectionDescription}>{section.description}</Text>
                  <View style={styles.learnMoreButton}>
                    <Text style={styles.learnMoreText}>Learn More</Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ask me anything"
          placeholderTextColor="#647987"
          style={styles.input}
        />
        <TouchableOpacity>
          <Text style={styles.askButton}>Ask</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  scrollView: {
    flex: 1,
  },
  headerImage: {
    height: 320,
    justifyContent: 'flex-end',
  },
  headerImageStyle: {
    borderRadius: 0,
  },
  headerTextContainer: {
    padding: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 34,
  },
  welcomeContainer: {
    padding: 16,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141C24',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#3F5374',
  },
  sectionContainer: {
    padding: 16,
  },
  sectionImage: {
    height: 200,
    justifyContent: 'flex-end',
  },
  sectionImageStyle: {
    borderRadius: 8,
  },
  sectionContent: {
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#141C24',
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#3F5374',
    marginBottom: 8,
  },
  learnMoreButton: {
    backgroundColor: '#FF6347',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  learnMoreText: {
    color: 'white',
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111517',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#2d3436',
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    marginRight: 8,
  },
  askButton: {
    color: '#647987',
    fontSize: 18,
  },
});

