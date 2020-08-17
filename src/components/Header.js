import React from "react"
import { Box, Flex, Text, Stack, Button } from "@chakra-ui/core"
import { Link } from "gatsby"
import Container from "./Container"

const Header = () => (
  <Box as="header" py="4">
    <Container>
      <Flex
        align="center"
        justifyContent={["space-between", null, "flex-start"]}
      >
        <Box>
          <Link to="/" className="header-brand">
            <Flex as="span" align="center">
              <Box as="span" pr="4">
                <svg
                  width="2rem"
                  viewBox="0 0 55 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5 0C12.6459 0 0.540656 11.759 0 26.4686V35.4758C0.540656 50.1854 12.6459 61.9444 27.5 61.9444H55V35.4758V26.4686C54.4593 11.759 42.3541 0 27.5 0Z"
                    fill="#DA49B4"
                  />
                  <path
                    d="M27.5308 12.7778C18.6617 12.7778 11.4339 19.7846 11.1111 28.5494V29.1035H16.4791V28.7431C16.6957 22.851 21.5451 18.1409 27.4958 18.1409C33.4464 18.1409 38.2958 22.851 38.5124 28.7431V50.5556H48.0555V45.2715H43.9506V28.5494C43.6278 19.7846 36.3999 12.7778 27.5308 12.7778Z"
                    fill="#F0F8FE"
                  />
                  <path
                    d="M31.9445 34.3055C31.9445 36.8368 29.8925 38.8888 27.3612 38.8888C24.8299 38.8888 22.7778 36.8368 22.7778 34.3055C22.7778 31.7742 24.8299 29.7222 27.3612 29.7222C29.8925 29.7222 31.9445 31.7742 31.9445 34.3055Z"
                    fill="#F0F8FE"
                  />
                </svg>
              </Box>
              <Text
                fontSize="3xl"
                color="purple.400"
                fontWeight="bold"
                letterSpacing="0.05rem;"
                as="span"
              >
                Feedbackable
              </Text>
            </Flex>
          </Link>
        </Box>
        <Box ml={[null, null, "20"]}>
          <Stack isInline>
            <Button
              as={Link}
              to="/pricing"
              variant="link"
              variantColor="purple"
              fontWeight="normal"
              className="header-pricing"
              data-click-event="header-pricing"
            >
              Pricing
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default Header
