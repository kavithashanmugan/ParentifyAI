import * as React from "react"
import { TextInput, TextInputProps, StyleSheet } from "react-native"

export interface InputProps extends TextInputProps {
  // Add any additional props here
}

const Input = React.forwardRef<TextInput, InputProps>(
  ({ style, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        {...props}
      />
    )
  }
)

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#111517',
  },
})

Input.displayName = "Input"

export { Input }

