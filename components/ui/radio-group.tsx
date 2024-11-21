import * as React from "react"
import { View, StyleSheet, ViewProps } from "react-native"
import { Radio } from "./radio"

interface RadioGroupProps extends ViewProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

interface RadioGroupItemProps {
  value: string
  id?: string
}

const RadioGroupContext = React.createContext<{
  value?: string
  onValueChange?: (value: string) => void
} | null>(null)

export const RadioGroup: React.FC<RadioGroupProps> = ({ value, onValueChange, children, style, ...props }) => {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <View style={[styles.group, style]} {...props}>
        {children}
      </View>
    </RadioGroupContext.Provider>
  )
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({ value, id }) => {
  const group = React.useContext(RadioGroupContext)

  if (!group) {
    throw new Error('RadioGroupItem must be used within a RadioGroup')
  }

  return (
    <Radio
      checked={group.value === value}
      onCheckedChange={() => group.onValueChange?.(value)}
      value={value}
      id={id}
    />
  )
}

const styles = StyleSheet.create({
  group: {
    flexDirection: 'column',
  },
})

