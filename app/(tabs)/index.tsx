import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { cssInterop } from 'nativewind';
import { Settings } from 'lucide-react-native';
import ArticleCard from '../../components/ArticleCard';
//import { SafeAreaView as NativeSafeAreaView } from 'react-native';

const StyledView = cssInterop(View, {
    className: 'style'
  });
  const StyledText = cssInterop(Text, {
    className: 'style'
  });
  const StyledScrollView = cssInterop(ScrollView, {
    className: 'style'
  });
  const StyledTouchableOpacity = cssInterop(TouchableOpacity, {
    className: 'style'
  });
  const StyledSafeAreaView = cssInterop(SafeAreaView, {
    className: 'style'
  });

export default function HomeScreen() {
  return (
    <StyledSafeAreaView className="flex-1 bg-white">
      <StyledScrollView>
        <StyledView className="p-4 pb-2">
          <StyledView className="h-12 items-end">
            <StyledTouchableOpacity className="w-12 items-center justify-center">
              <Settings size={24} color="#111517" />
            </StyledTouchableOpacity>
          </StyledView>
          <StyledText className="text-[#111517] text-2xl font-bold">
            Hi, welcome back
          </StyledText>
        </StyledView>
        
        <StyledView className="px-4 min-h-14 flex-row items-center">
          <StyledText className="text-[#111517] text-base flex-1">
            Explore a new theme: Stress less
          </StyledText>
        </StyledView>

        <StyledText className="text-[#111517] text-lg font-bold px-4 pt-4 pb-2">
          Your AI assistant
        </StyledText>

        <ArticleCard
          image="https://cdn.usegalileo.ai/sdxl10/71a2c1b0-9b2d-4c8c-89c6-87c43a8aff50.png"
          title="How to help your child sleep through the night"
          subtitle="AI guide · 3 min read"
        />

        <ArticleCard
          image="https://cdn.usegalileo.ai/stability/2058a638-3565-40f3-b254-e4e147ef6742.png"
          title="Get ready for daycare"
          subtitle="AI guide · 5 min read"
        />

        <StyledText className="text-[#111517] text-lg font-bold px-4 pt-4 pb-2">
          For you
        </StyledText>

        <ArticleCard
          image="https://cdn.usegalileo.ai/stability/b2128d10-7cf4-44d4-a4ba-691b67e42306.png"
          title="Find the perfect daycare"
          subtitle="AI guide · 3 min read"
        />

        <ArticleCard
          image="https://cdn.usegalileo.ai/sdxl10/596e489c-c041-4171-9c13-91dd3f44c848.png"
          title="Track your child's development"
          subtitle="AI guide · 2 min read"
        />

        <StyledText className="text-[#111517] text-lg font-bold px-4 pt-4 pb-2">
          Join the community
        </StyledText>

        <ArticleCard
          image="https://cdn.usegalileo.ai/stability/6a2b08d3-df84-4510-bb13-d6423d6aff5e.png"
          title="What's the best age for starting potty training?"
          subtitle="Parenting community · 6 replies"
          buttonText="Join the discussion"
        />
      </StyledScrollView>
    </StyledSafeAreaView>
  );
}