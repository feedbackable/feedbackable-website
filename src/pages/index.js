import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import {
  Container,
  SimpleGrid,
  Text,
  Box,
  Flex,
  //Input,
  Button,
  //FormControl,
  //FormLabel,
  Stack,
  Grid,
} from "@chakra-ui/react"
import Background from "../components/Background"
import Card from "../components/Card"
import { MdAdd, MdShare } from "react-icons/md"
import { GoCommentDiscussion } from "react-icons/go"

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
            <Box mb="6">
              <Text fontSize="4xl" color="purple.400" fontWeight="medium">
                Good clients send screenshots.{" "}
              </Text>
              <Text fontSize="4xl" color="pink.600" fontWeight="bold">
                Great clients use Feedbackable
              </Text>
            </Box>

            <Text fontSize={["xl", null, "2xl"]}>
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
                  className="hero-cta-secondary"
                  data-click-event="hero-cta-secondary"
                >
                  Try it free
                </Button>
              </Box>
              <Box borderRadius="md" bg="white" p="2">
                <Button
                  as={Link}
                  to="/pricing"
                  variantColor="purple"
                  size="lg"
                  className="hero-cta-primary"
                  data-click-event="hero-cta-primary"
                >
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
                <Button
                  as={Link}
                  to="/pricing"
                  variantColor="pink"
                  size="lg"
                  className="hero-cta-alt"
                  data-click-event="hero-cta-alt"
                >
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
        <Box mb={[12, null, 32]}>
          <Text
            fontSize="4xl"
            color="purple.400"
            mb="6"
            fontWeight="medium"
            textAlign="center"
          >
            No more email chains, no complicated setup.
          </Text>
          <Text
            fontSize={["xl", null, "2xl"]}
            textAlign="center"
            color="gray.700"
          >
            Enter your site URL or upload your design, and start receiving
            feedback immediately.
          </Text>
        </Box>
        <Grid gridTemplateColumns={["100%", null, "1fr 4fr 1fr"]}>
          <Box position="relative" zIndex="2">
            <Card
              position="relative"
              p="3"
              pr={[null, null, "5"]}
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
              pr={[null, null, "5"]}
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
              pl={[null, null, "5"]}
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
              pl={[null, null, "5"]}
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
          <Card p="4" bg="white">
            <Text
              fontSize={["xl", null, "2xl"]}
              color="purple.400"
              mb="4"
              textAlign="center"
            >
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
                className="index-features-1"
                data-click-event="index-features-1"
              >
                View pricing
              </Button>
            </Box>
          </Card>
          <Card p="4" bg="white">
            <Text
              fontSize={["xl", null, "2xl"]}
              color="purple.400"
              mb="4"
              textAlign="center"
            >
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
                className="index-features-2"
                data-click-event="index-features-2"
              >
                View pricing
              </Button>
            </Box>
          </Card>
          <Card p="4" bg="white">
            <Text
              fontSize={["xl", null, "2xl"]}
              color="purple.400"
              mb="4"
              textAlign="center"
            >
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
                className="index-features-3"
                data-click-event="index-features-3"
              >
                View pricing
              </Button>
            </Box>
          </Card>
        </SimpleGrid>
      </Container>
      <Container py={[10, null, 20]}>
        <Text
          fontSize="4xl"
          color="purple.400"
          mb="20"
          fontWeight="medium"
          textAlign="center"
        >
          How it works: collect &amp; share design feedback easily
        </Text>
        <SimpleGrid columns={[1, null, 3]} spacing="10">
          <Card p="4" bg="white" borderColor="cyan.500">
            <Text fontSize="2xl" mb="6" display="flex" alignItems="center">
              <Box
                as="span"
                rounded="full"
                bg="cyan.400"
                width="3rem"
                minWidth="3rem"
                height="3rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="2xl"
                fontWeight="bold"
                mr="3"
              >
                <MdAdd />
              </Box>{" "}
              Add your URL or design
            </Text>
            <Text fontSize="lg">
              Enter your site URL, or upload your design.
            </Text>
          </Card>
          <Card p="4" bg="white" borderColor="cyan.600">
            <Text fontSize="2xl" mb="6" display="flex" alignItems="center">
              <Box
                as="span"
                rounded="full"
                bg="cyan.400"
                width="3rem"
                minWidth="3rem"
                height="3rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="2xl"
                fontWeight="bold"
                mr="3"
              >
                <MdShare />
              </Box>{" "}
              Share your Feedbackable URL or invite users
            </Text>
            <Text fontSize="lg">
              Share your collaborative Feedbackable URL, or invite users by
              email address.
            </Text>
          </Card>
          <Card p="4" bg="white" borderColor="cyan.700">
            <Text fontSize="2xl" mb="6" display="flex" alignItems="center">
              <Box
                as="span"
                rounded="full"
                bg="cyan.400"
                width="3rem"
                minWidth="3rem"
                height="3rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="2xl"
                fontWeight="bold"
                mr="3"
              >
                <GoCommentDiscussion />
              </Box>{" "}
              Collect design feedback
            </Text>
            <Text fontSize="lg">
              Collect feedback from clients, designers &amp; QA. Easily track
              all your feedback in one place.
            </Text>
          </Card>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default IndexPage
