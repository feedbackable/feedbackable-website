import React from "react"
import { Text, Box } from "@chakra-ui/react"
function HighlightText({
  children,
  angle = "-0.5",
  highlightColor = "purple.500",
  ...props
}) {
  return (
    <Text
      as="span"
      lineHeight="shorter"
      color="white"
      position="relative"
      {...props}
    >
      <Box
        as="span"
        bg={highlightColor}
        transformOrigin="center"
        transform={`rotate(${angle}deg)`}
        display={[null, null, null, "inline-block"]}
      >
        <Box
          as="span"
          transformOrigin="center"
          transform={`rotate(${angle * -1}deg)`}
          display={[null, null, null, "inline-block"]}
        >
          {children}
        </Box>
      </Box>
    </Text>
  )
}
export default HighlightText
