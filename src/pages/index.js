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
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Grid,
} from "@chakra-ui/core"
import Background from "../components/Background"
import Card from "../components/Card"

const CardDot = ({ alignment, ...props }) => {
  return (
    <Box
      rounded="full"
      w="5"
      h="5"
      bg="pink.300"
      position="absolute"
      left={alignment === "left" ? "-0.625rem" : null}
      right={alignment === "right" ? "-0.625rem" : null}
      border="1px solid white"
      top="12"
      display={["none", null, "block"]}
      {...props}
    />
  )
}

const IndexPage = () => {
  const staticData = useStaticQuery(graphql`
    query MyQuery {
      screenshot: file(name: { eq: "app-screenshot" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Feedbackable.io | The feedback tool for web & content"
        overrideTitleTemplate="true"
      />
      <Background display={["none", null, "block"]} />
      <Container py={[10, null, 20]}>
        <SimpleGrid columns={[1, null, 2]} spacing="10">
          <Box>
            <Text fontSize="4xl" color="purple.400" mb="6" fontWeight="medium">
              The feedback tool for web &amp; content
            </Text>
            <Text fontSize="xl">
              Get feedback & annotations from your team or client, directly on
              the website. Say goodbye to email chains, messages &amp; word
              documents.
            </Text>
            <Stack isInline mt="6">
              <Box borderRadius="md" bg="white" p="2">
                <Button
                  as={Link}
                  to="/pricing"
                  variant="outline"
                  variantColor="purple"
                  size="lg"
                >
                  Try it free
                </Button>
              </Box>
              <Box borderRadius="md" bg="white" p="2">
                <Button as={Link} to="/pricing" variantColor="purple" size="lg">
                  View pricing
                </Button>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Card maxW="md" mx="auto" px="4" py="6">
              <Text fontWeight="bold" fontSize="4xl" textAlign="center" mb="6">
                Pricing &amp; plans
              </Text>
              <Text mb="6" fontSize="lg" textAlign="center">
                Choose a plan to fit your needs
              </Text>
              <Flex justifyContent="center">
                <Button as={Link} to="/pricing" variantColor="pink" size="lg">
                  View pricing
                </Button>
              </Flex>

              {/*<form action="/pricing" method="GET">
                <Flex align="flex-end">
                  <FormControl flex="1" mr="3">
                    <FormLabel htmlFor="url">Your website URL</FormLabel>
                    <Input
                      id="url"
                      type="text"
                      name="url"
                      size="lg"
                      placeholder="example.com"
                    />
                  </FormControl>
                  <Button variantColor="purple" size="lg" type="submit">
                    Try free
                  </Button>
                </Flex>
              </form>*/}
            </Card>
          </Box>
        </SimpleGrid>
      </Container>
      <Container py={[10, null, 20]}>
        <Grid gridTemplateColumns={["100%", null, "1fr 4fr 1fr"]}>
          <Box position="relative" zIndex="2">
            <Card
              position="relative"
              p="3"
              marginTop={[null, null, "-2rem", "4rem"]}
              marginRight={[null, null, "-1rem"]}
            >
              <Text fontWeight="bold" mb="3">
                Get started in seconds
              </Text>
              <Text>
                No code snippets or browser extensions. Just start getting
                feedback on your live site, dev site, staging site, anywhere!
              </Text>
              <CardDot alignment="right" />
            </Card>
            <Card
              position="relative"
              p="3"
              marginRight={[null, null, "-2rem"]}
              marginTop={[null, null, "1rem", "8rem"]}
            >
              <Text fontWeight="bold" mb="3">
                Dedicated feedback board
              </Text>
              <Text>
                Keep track of all your bugs and feedback in one place! Organise
                your board how you want.
              </Text>
              <CardDot alignment="right" />
            </Card>
          </Box>
          <Box position="relative" zIndex="1">
            <Box
              rounded="lg"
              overflow="hidden"
              border="1px solid"
              borderColor="pink.300"
            >
              <Img fluid={staticData.screenshot.childImageSharp.fluid} />
            </Box>
          </Box>
          <Box position="relative" zIndex="2">
            <Card
              position="relative"
              p="3"
              marginLeft={[null, null, "-2rem"]}
              marginTop={[null, null, "-4rem", "2rem"]}
            >
              <Text fontWeight="bold" mb="3">
                Super simple feedback
              </Text>
              <Text>
                It’s so easy, clients, designers & QA can leave feedback with
                ease. Screenshots and browser data are recorded so you don’t
                have to waste time asking questions!
              </Text>
              <CardDot alignment="left" />
            </Card>
            <Card
              position="relative"
              p="3"
              marginTop={[null, null, "2rem", "6rem"]}
              marginLeft={[null, null, "-4rem"]}
            >
              <Text fontWeight="bold" mb="3">
                Keep the whole team on the same page
              </Text>
              <Text>
                Say goodbye to email chains, word docs and messages. With
                Feedbackable, your whole team can see the feedback, and clients
                can even add items!
              </Text>
              <CardDot alignment="left" />
            </Card>
          </Box>
        </Grid>
      </Container>
      <Container py={[10, null, 20]}>
        <SimpleGrid columns={[1, null, 3]} spacing="10">
          <Box>
            <Text fontSize="xl" color="purple.400" mb="4" textAlign="center">
              Organised
            </Text>
            <Text>
              All your feedback and bug reports in one place. Stop chasing
              emails, scribbled notes, text documents for the right feedback or
              piece of copy. Organise all your feedback in one board. *Coming
              soon: integrations!
            </Text>
            <Box mt="3">
              <Button
                as={Link}
                to="/pricing"
                variant="link"
                variantColor="purple"
                fontWeight="normal"
              >
                View pricing
              </Button>
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" color="purple.400" mb="4" textAlign="center">
              Simple
            </Text>
            <Text>
              Zero click install! Simply enter your dev/staging/live site URL in
              the app and start collecting and dealing with feedback and bug
              reports in seconds. No code snippets, no browser extensions.
            </Text>
            <Box mt="3">
              <Button
                as={Link}
                to="/pricing"
                variant="link"
                variantColor="purple"
                fontWeight="normal"
              >
                View pricing
              </Button>
            </Box>
          </Box>
          <Box>
            <Text fontSize="xl" color="purple.400" mb="4" textAlign="center">
              Collaborative
            </Text>
            <Text>
              Work collaboratively with your development & design teams, with
              private projects. Need feedback or bug reports from clients or
              even users? Collect feedback from unlimited guests.
            </Text>
            <Box mt="3">
              <Button
                as={Link}
                to="/pricing"
                variant="link"
                variantColor="purple"
                fontWeight="normal"
              >
                View pricing
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default IndexPage
