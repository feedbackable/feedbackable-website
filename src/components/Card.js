import { Box } from "@chakra-ui/react"
import React from "react"

export default function Card({ children, ...props }) {
  return (
    <Box
      bg="gray.50"
      border="1px solid"
      borderColor="gray.200"
      rounded="lg"
      {...props}
    >
      {children}
    </Box>
  )
}
