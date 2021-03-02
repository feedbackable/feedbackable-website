import React from "react"
import { Link } from "gatsby"
import { Box, Text, VStack, Container, Button } from "@chakra-ui/react"

function FooterCTA() {
  return (
    <Box bg="purple.500" color="white" py={[12, null, 20]}>
      <Container maxW={["container.md", null, null, null, "container.lg"]}>
        <VStack spacing={[6, null, 8]} textAlign="center">
          <Text fontSize={["3xl", null, "5xl"]} fontWeight="medium">
            Get on the same page as your clients
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            Stop wasting time deciphering unactionable feedback.
          </Text>
          <Box>
            <Button
              variant="solid"
              bg="white"
              color="purple.500"
              size="lg"
              as={Link}
              to={"/signup"}
            >
              Try free for 14 days
            </Button>
          </Box>
          <Text>Get feedback on a live website or design in seconds</Text>
        </VStack>
      </Container>
    </Box>
  )
}
export default FooterCTA
