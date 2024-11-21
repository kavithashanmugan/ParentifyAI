import * as React from "react"
import { Pressable, Text, StyleSheet, PressableProps, ViewStyle, TextStyle, StyleProp } from "react-native"

interface ButtonProps extends Omit<PressableProps, 'style'> {
  variant?: "default" | "outline"
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ style, textStyle, variant = "default", children, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        style={({ pressed }) => [
          styles.button,
          variant === "outline" && styles.outlineButton,
          pressed && styles.pressed,
          style,
        ]}
        {...props}
      >
        <Text
          style={[
            styles.text,
            variant === "outline" && styles.outlineText,
            textStyle,
          ]}
        >
          {children}
        </Text>
      </Pressable>
    )
  }
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF6347',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  outlineText: {
    color: '#FF6347',
  },
  pressed: {
    opacity: 0.8,
  },
})

Button.displayName = "Button"

export { Button }

