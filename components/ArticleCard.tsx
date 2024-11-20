import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { cssInterop } from 'nativewind';

// const StyledView = styled(View);
// const StyledText = styled(Text);
// const StyledTouchableOpacity = styled(TouchableOpacity);
// const StyledImageBackground = styled(ImageBackground);


const StyledView = cssInterop(View, {
    className: 'style'
  });
  const StyledText = cssInterop(Text, {
    className: 'style'
  });
  const StyledImageBackground = cssInterop(ImageBackground, {
    className: 'style'
  });
  const StyledTouchableOpacity = cssInterop(TouchableOpacity, {
    className: 'style'
  });

interface ArticleCardProps {
  image: string;
  title: string;
  subtitle: string;
  buttonText?: string;
}

export default function ArticleCard({ 
  image, 
  title, 
  subtitle, 
  buttonText = "Read now" 
}: ArticleCardProps) {
  return (
    <StyledView className="p-4">
      <StyledImageBackground
        source={{ uri: image }}
        className="rounded-xl overflow-hidden"
        imageStyle={{ borderRadius: 12 }}
      >
        <StyledView className="pt-[132px] bg-black/40">
          <StyledView className="p-4 flex-row items-end justify-between">
            <StyledView className="flex-1 pr-4">
              <StyledText className="text-white text-2xl font-bold leading-tight max-w-[440px]">{title}</StyledText>
              <StyledText className="text-white text-base font-medium leading-normal">{subtitle}</StyledText>
            </StyledView>
            <StyledTouchableOpacity className="bg-[#47a6e6] rounded-xl px-4 h-10 justify-center">
              <StyledText className="text-[#111517] text-sm font-bold leading-normal tracking-[0.015em]">{buttonText}</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledImageBackground>
    </StyledView>
  );
}