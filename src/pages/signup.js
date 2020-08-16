import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Container from "../components/Container"
import {
  SimpleGrid,
  Text,
  Box,
  Flex,
  Button,
  Stack,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/core"
import Background from "../components/Background"
import Card from "../components/Card"

const SignupPage = () => {
  return (
    <Layout>
      <SEO title="Signup" />
      <Background display={["none", null, "block"]} />
      <Container py={[10, null, 20]}>
        <Text fontSize="4xl" color="purple.400" mb="6" fontWeight="medium">
          The feedback tool for web &amp; content
        </Text>
      </Container>
      <Container pb={[20, null, 32]}>
        <Box mx="auto" maxW="2xl">
          <Card px="6" py="8">
            <Text fontWeight="bold" fontSize="2xl" mb="6">
              Hi! You’ve caught us before we were ready.
            </Text>
            <Text mb="6" fontSize="lg">
              Feedbackable is still under construction. We’re working hard to
              finish it up, and it should be ready to help you with your
              projects soon. Enter your email below to to request early access,
              and we’ll let you know when it’s ready!
            </Text>
            <Flex align="flex-end">
              <FormControl flex="1" mr="3">
                <FormLabel htmlFor="url">Your email</FormLabel>
                <Input
                  id="url"
                  type="text"
                  name="url"
                  size="lg"
                  placeholder="hi@example.com"
                />
              </FormControl>
              <Button variantColor="purple" size="lg">
                Request access
              </Button>
            </Flex>
          </Card>
        </Box>
      </Container>
    </Layout>
  )
}

export default SignupPage
