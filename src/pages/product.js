import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import {
  SimpleGrid,
  Text,
  Box,
  Flex,
  Button,
  Stack,
  Container,
  VStack,
  Collapse,
  IconButton,
  Center,
  Switch,
  OrderedList,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react"

import FooterCTA from "../components/FooterCTA"

const ProductPage = () => {
  const staticData = useStaticQuery(graphql`
    query ProductPageQuery {
      screenshotRegister: file(name: { eq: "app-screenshot_register" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshotDashboard: file(name: { eq: "app-screenshot_dashboard" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshotAddFeedback: file(name: { eq: "app-screenshot_add-feedback" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      screenshotBoard: file(name: { eq: "app-screenshot_board" }) {
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
      <SEO title="Features" />
      <VStack
        spacing={[10, null, 20, 40]}
        py={[10, null, 20, 40]}
        sx={{ "&>*": { minWidth: "100%" } }}
      >
        <section className="section-title">
          <Container maxW="container.lg">
            <VStack spacing={[5, null, null, 8]}>
              <Box textAlign="center" as="h1">
                <Text
                  as="span"
                  fontSize={["4xl", null, "5xl"]}
                  fontWeight="bold"
                  display="block"
                >
                  Deliver projects faster, with fewer headaches
                </Text>
                <Text fontSize="3xl">
                  Collect, manage &amp; action website feedback in one location
                </Text>
              </Box>
            </VStack>
          </Container>
        </section>
        <section className="section-how-it-works">
          <Container maxW="container.lg">
            <VStack spacing={8}>
              <Text
                fontSize="4xl"
                fontWeight="medium"
                textAlign="center"
                as="h2"
              >
                How it works
              </Text>
              <VStack
                minW="100%"
                spacing="8"
                position="relative"
                _before={{
                  content: '""',
                  display: "block",
                  position: "absolute",
                  left: ["5", null, null, "50%"],
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  bg: "gray.100",
                }}
              >
                <HowItWorksItem
                  title={"Sign up"}
                  index={0}
                  image={
                    <Img
                      fluid={
                        staticData.screenshotRegister.childImageSharp.fluid
                      }
                    />
                  }
                >
                  Sign up for a free 14 day trial of Feedbackable.
                </HowItWorksItem>
                <HowItWorksItem
                  title={"Add your project"}
                  index={1}
                  image={
                    <Img
                      fluid={
                        staticData.screenshotDashboard.childImageSharp.fluid
                      }
                    />
                  }
                >
                  Click "add project" from your dashboard, enter your site URL
                  or upload your project file.
                </HowItWorksItem>
                <HowItWorksItem
                  title={"Start collecting feedback"}
                  index={2}
                  image={
                    <Img
                      fluid={
                        staticData.screenshotAddFeedback.childImageSharp.fluid
                      }
                    />
                  }
                >
                  <VStack spacing="3" align="start">
                    <Text>Start collecting feedback immediately.</Text>
                    <Text>
                      Share your project URL with team members or clients and
                      start getting feedback.
                    </Text>
                  </VStack>
                </HowItWorksItem>
                <HowItWorksItem
                  title="Organise &amp; manage feedback"
                  index={3}
                  image={
                    <Img
                      fluid={staticData.screenshotBoard.childImageSharp.fluid}
                    />
                  }
                >
                  See all your feedback in one place in real time. Organise and
                  prioritise feedback, with relevant screenshots &amp; browser
                  data.
                </HowItWorksItem>
                <Center position="relative">
                  <Box
                    as="span"
                    role="img"
                    aria-label="hugging face"
                    fontSize="4xl"
                    mb="-4"
                  >
                    🤗
                  </Box>
                </Center>
              </VStack>
            </VStack>
          </Container>
        </section>
        <section className="section-final-cta">
          <FooterCTA />
        </section>
      </VStack>
    </Layout>
  )
}

export default ProductPage

function HowItWorksItem({ title, children, index, image = null }) {
  const isAlt = index % 2 === 0

  return (
    <Box position="relative" minW="100%">
      <Box maxW={["xl", null, null, "100%"]} mx="auto">
        <Flex
          position="absolute"
          left={[0, null, null, "50%"]}
          height="10"
          minW="10"
          rounded="full"
          transform={["none", null, null, "translateX(-50%)"]}
          border="1px solid transparent"
          borderColor="gray.100"
          color="white"
          justifyContent="center"
          alignItems="center"
          p="2"
          bg="white"
          fontWeight="bold"
          bgGradient="linear(to-r, purple.500, purple.600)"
          shadow="lg"
        >
          {index + 1}
        </Flex>
        <Flex flexWrap="wrap" direction={isAlt ? "row-reverse" : "row"}>
          <Box
            w={["100%", null, null, "50%"]}
            pl={isAlt ? [14, null, null, 12] : [14, null, null, 0]}
            pr={!isAlt ? [0, null, null, 12] : null}
          >
            <VStack
              alignItems={
                isAlt ? "flex-start" : ["flex-start", null, null, "flex-end"]
              }
              textAlign={isAlt ? "left" : ["left", null, null, "right"]}
            >
              <Text fontSize="3xl">{title}</Text>
              <Box>{children}</Box>
            </VStack>
          </Box>
          <Box
            w={["100%", null, null, "50%"]}
            pr={isAlt ? [0, null, null, 12] : null}
            pl={!isAlt ? [14, null, null, 12] : [14, null, null, 0]}
            py="10"
          >
            {!!image ? (
              image
            ) : (
              <AspectRatio ratio={16 / 9}>
                <Box bg="gray.200" />
              </AspectRatio>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
