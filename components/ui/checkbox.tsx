import * as React from "react"
import { Pressable, View, StyleSheet, PressableProps, ViewStyle, StyleProp } from "react-native"

interface CheckboxProps extends Omit<PressableProps, 'onPress' | 'style'> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

const Checkbox = React.forwardRef<React.ElementRef<typeof Pressable>, CheckboxProps>(
  ({ checked, onCheckedChange, children, style, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        onPress={() => onCheckedChange?.(!checked)}
        style={({ pressed }) => [
          styles.container,
          checked && styles.checked,
          pressed && styles.pressed,
          style,
        ]}
        {...props}
      >
        <View style={[styles.checkbox, checked && styles.checkedBox]}>
          {checked && <View style={styles.checkmark} />}
        </View>
        {children}
      </Pressable>
    )
  }
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#111517',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    opacity: 0.8,
  },
  checkedBox: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: '#FFFFFF',
  },
  pressed: {
    opacity: 0.6,
  },
})

Checkbox.displayName = "Checkbox"

export { Checkbox }

