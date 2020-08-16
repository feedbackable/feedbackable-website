import { Box } from "@chakra-ui/core"
import React from "react"

export default function Container({ children, ...props }) {
  return (
    <Box
      maxW={[
        "containers.sm",
        "containers.md",
        "containers.lg",
        "containers.xl",
      ]}
      mx="auto"
      px={[3, 4, 6]}
      {...props}
    >
      {children}
    </Box>
  )
}
