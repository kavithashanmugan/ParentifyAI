import * as React from "react"
import { Pressable, View, Text, StyleSheet, PressableProps, ViewStyle, StyleProp } from "react-native"

interface RadioProps extends Omit<PressableProps, 'onPress' | 'style'> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  value: string
  id?: string
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

const Radio = React.forwardRef<React.ElementRef<typeof Pressable>, RadioProps>(
  ({ checked, onCheckedChange, value, id, children, style, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        onPress={() => onCheckedChange?.(true)}
        style={({ pressed }) => [
          styles.container,
          pressed && styles.pressed,
          style,
        ]}
        {...props}
      >
        <View style={[styles.radio, checked && styles.checked]}>
          {checked && <View style={styles.dot} />}
        </View>
        {children && <Text style={styles.label}>{children}</Text>}
      </Pressable>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#111517',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderColor: '#007AFF',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: '#111517',
  },
  pressed: {
    opacity: 0.7,
  },
})

Radio.displayName = "Radio"

export { Radio }

