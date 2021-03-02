import { Box } from "@chakra-ui/react"
import React from "react"

export default function Card({ children, ...props }) {
  return (
    <Box
      bg="white"
      shadow="xl"
      boxShadow="0 10px 35px -5px rgb(0 0 0 / 10%), 0 0px 20px -5px rgb(0 0 0 / 4%)"
      rounded="lg"
      {...props}
    >
      {children}
    </Box>
  )
}
