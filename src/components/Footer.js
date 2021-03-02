import React from "react"
import {
  Box,
  Flex,
  Text,
  Stack,
  Container,
  SimpleGrid,
  List,
  ListItem,
  Badge,
} from "@chakra-ui/react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer>
      <Box pb={[10, null, 20, 40]}>
        <Container>
          <Flex>
            <Box w={["16.66%"]}>
              <Box>
                <Link to="/" className="header-brand">
                  <Flex as="span" align="center">
                    <Box as="span" pr="4">
                      <svg
                        width="2.5rem"
                        viewBox="0 0 303 303"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M152 40C98.5254 40 54.9464 82.3325 53 135.287V167.713C54.9464 220.668 98.5254 263 152 263H251V167.713V135.287C249.054 82.3325 205.475 40 152 40Z"
                          fill="#943BDC"
                        />
                        <path
                          d="M152.111 86C120.182 86 94.1621 111.224 93 142.778V144.772H112.325V143.475C113.105 122.263 130.563 105.307 151.985 105.307C173.407 105.307 190.865 122.263 191.645 143.475V222H226V202.977H211.222V142.778C210.06 111.224 184.04 86 152.111 86Z"
                          fill="#F0F8FE"
                        />
                        <path
                          d="M168 163.5C168 172.613 160.613 180 151.5 180C142.387 180 135 172.613 135 163.5C135 154.387 142.387 147 151.5 147C160.613 147 168 154.387 168 163.5Z"
                          fill="#F0F8FE"
                        />
                      </svg>
                    </Box>
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      letterSpacing="0.05rem;"
                      as="span"
                    >
                      Feedbackable
                    </Text>
                  </Flex>
                </Link>
              </Box>
            </Box>
            <Box w={["83.33%"]}>
              <SimpleGrid columns={[3]}>
                <Box>
                  <Text as="h4" fontWeight="bold" mb="3">
                    Product
                  </Text>
                  <List spacing="3" color="gray.600">
                    <ListItem display="flex" alignItems="center">
                      <Box
                        as={Link}
                        to="/signup"
                        _hover={{ color: "purple.500" }}
                      >
                        Try Feedbackable.io{" "}
                        <Badge colorScheme="green">Free</Badge>
                      </Box>
                    </ListItem>
                    <ListItem>
                      <Box
                        as={Link}
                        to="/pricing"
                        _hover={{ color: "purple.500" }}
                      >
                        Pricing
                      </Box>
                    </ListItem>
                  </List>
                </Box>
                <Box>
                  <Text as="h4" fontWeight="bold" mb="3">
                    Company
                  </Text>
                  <List spacing="3" color="gray.600">
                    <ListItem>
                      <Box
                        as={Link}
                        to="/terms-of-service"
                        _hover={{ color: "purple.500" }}
                      >
                        Terms of Service
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </SimpleGrid>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box bg="gray.700" color="white" p="4">
        <Container>
          <Flex justifyContent="space-between" flexWrap="wrap">
            <Box>
              <Stack isInline spacing="5">
                <Box>
                  <Link to="/">
                    &copy; {new Date().getFullYear()} Feedbackable.io
                  </Link>
                </Box>
                <Box>
                  <Text as={Link} to="/contact" textDecoration="underline">
                    Contact
                  </Text>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Text fontSize="sm">
                Made with{" "}
                <Text as="span" role="img" aria-label="love heart emoji" mr="2">
                  ❤️
                </Text>{" "}
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
    </footer>
  )
}
