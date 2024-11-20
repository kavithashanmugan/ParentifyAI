import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { cssInterop } from 'nativewind';
import { SafeAreaView as NativeSafeAreaView } from 'react-native';

const StyledView = cssInterop(View, {
  className: 'style'
});
const StyledText = cssInterop(Text, {
  className: 'style'
});
const StyledImage = cssInterop(Image, {
  className: 'style'
});
const StyledTouchableOpacity = cssInterop(TouchableOpacity, {
  className: 'style'
});
const SafeAreaView = cssInterop(NativeSafeAreaView, {
  className: 'style'
});
//const StyledView = styled(View);
// const StyledText = styled(Text);
// const StyledImage = styled(Image);
// const StyledTouchableOpacity = styled(TouchableOpacity);
// const SafeAreaView = styled(NativeSafeAreaView);

export default function Welcome() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StyledView className="flex-1 px-4">
        <StyledImage
          source={{
            uri: 'https://cdn.usegalileo.ai/sdxl10/d8e0a9c6-4506-4aaa-b4a6-1d7ef25385e6.png',
          }}
          className="w-full aspect-[4/3] rounded-lg mt-4"
          resizeMode="cover"
        />

        <StyledView className="mt-6">
          <StyledText className="text-[32px] font-bold text-[#111517] leading-[1.2] tracking-[-0.01em]">
            Where parents are alive, families thrive.
          </StyledText>

          <StyledText className="mt-2 text-base text-[#111517]">
            Get personalized guidance for parenthood.
          </StyledText>
        </StyledView>

        <StyledTouchableOpacity
          className="mt-6 bg-[#f0f3f4] rounded-xl h-10 justify-center items-center"
          onPress={() => router.push('/(tabs)')}
        >
          <StyledText className="text-[#111517] font-bold text-sm">Sign up</StyledText>
        </StyledTouchableOpacity>

        <StyledText className="mt-3 text-sm text-[#647987] text-center">
          By continuing, you agree to the Terms and Privacy Policy. We'll send you a text with a
          verification code.
        </StyledText>

        <StyledView className="flex-1" />

        <StyledText className="text-sm text-[#647987] text-center mb-8">
          © 2022 Parenting AI. All rights reserved.
        </StyledText>
      </StyledView>
    </SafeAreaView>
  );
}
