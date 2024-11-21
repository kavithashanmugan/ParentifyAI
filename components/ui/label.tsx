import * as React from "react"
import { Text, TextProps } from "react-native"

const Label = React.forwardRef<Text, TextProps>(({ style, ...props }, ref) => {
  return (
    <Text
      ref={ref}
      style={[
        {
          fontSize: 14,
          fontWeight: "500",
          color: "#111517",
        },
        style
      ]}
      {...props}
    />
  )
})

Label.displayName = "Label"

export { Label }

