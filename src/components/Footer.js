import React from "react"
import { Box, Flex, Text } from "@chakra-ui/core"
import { Link } from "gatsby"
import Container from "./Container"

export default function Footer() {
  return (
    <Box bg="pink.900" color="white" p="4">
      <Container>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Box>
            <Link to="/">Feedbackable.io</Link>
          </Box>
          <Box>
            <Text fontSize="sm">
              Made with{" "}
              <span role="img" aria-label="love heart emoji">
                ❤️
              </span>{" "}
              by{" "}
              <Text
                as="a"
                color="aqua.200"
                href="https://twitter.com/baffledbasti"
              >
                Seb Toombs
              </Text>{" "}
              in{" "}
              <span role="img" aria-label="Australian flag emoji">
                🇦🇺
              </span>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
