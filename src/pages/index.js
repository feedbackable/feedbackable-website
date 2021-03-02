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
  VStack,
  HStack,
  Grid,
  AspectRatio,
  Stack,
} from "@chakra-ui/react"
import Card from "../components/Card"
import { MdAdd, MdShare } from "react-icons/md"
import { GoCommentDiscussion } from "react-icons/go"
import HighlightText from "../components/HighlightText"
import FooterCTA from "../components/FooterCTA"
import {
  OutlineButtonStyle,
  SolidButtonStyle,
} from "../components/ButtonStyles"

import FeedbackableAppVideo from "../assets/feedbackable-app-video.webm"

const CardDot = ({ alignment, ...props }) => {
  return (
    <Box
      rounded="full"
      w="5"
      h="5"
      bg="purple.300"
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
    query IndexPageQuery {
      screenshot: file(name: { eq: "app-screenshot" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
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
      screenshotAddProject: file(name: { eq: "app-screenshot_add-project" }) {
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
      screenshotBoardFeedback: file(
        name: { eq: "app-screenshot_board-feedback" }
      ) {
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

      <VStack
        spacing={[10, null, 20, 40]}
        py={[10, null, 20, 40]}
        sx={{ "&>*": { minWidth: "100%" } }}
      >
        <section className="section-hero">
          <Container maxW="container.lg">
            <VStack spacing={[5, null, null, 8]}>
              <Box textAlign="center" as="h1">
                <Text
                  as="span"
                  fontSize={["4xl", null, "5xl"]}
                  fontWeight="medium"
                  color="gray.700"
                  display="block"
                >
                  Good clients send screenshots.{" "}
                </Text>

                <HighlightText
                  display="block"
                  fontSize={["4xl", "6xl"]}
                  fontWeight="bold"
                >
                  Great clients use Feedbackable.
                </HighlightText>
                {/* </Box> */}
              </Box>
              <Text fontSize={["xl", null, "2xl"]} textAlign="center">
                Get feedback & annotations from your team or client, directly on
                the website.
                <br />
                Say goodbye to email chains, messages &amp; word documents.
              </Text>
              <Stack
                spacing={[3, null, 6]}
                direction={["column", null, "row"]}
                minW="100%"
                justify="center"
              >
                <Box
                  borderRadius="md"
                  bg="white"
                  p="2"
                  minW={["100%", null, "auto"]}
                >
                  <Button
                    as={Link}
                    to="/signup"
                    className="hero-cta-primary"
                    data-click-event="hero-cta-primary"
                    w="100%"
                    {...SolidButtonStyle}
                  >
                    Try it free
                  </Button>
                </Box>
                <Box
                  borderRadius="md"
                  bg="white"
                  p="2"
                  minW={["100%", null, "auto"]}
                >
                  <Button
                    as={Link}
                    to="/pricing"
                    className="hero-cta-secondary"
                    data-click-event="hero-cta-secondary"
                    w="100%"
                    {...OutlineButtonStyle}
                  >
                    View pricing
                  </Button>
                </Box>
              </Stack>
            </VStack>
          </Container>
        </section>
        <section className="section-video">
          <Container maxW={["container.md", null, null, null, "container.lg"]}>
            <VStack spacing="8">
              <Text
                fontSize="4xl"
                fontWeight="medium"
                textAlign="center"
                as="h2"
              >
                Collect &amp; share design feedback easily
              </Text>
              <AspectRatio
                ratio={16 / 12}
                minW="100%"
                overflow="hidden"
                rounded="md"
              >
                <video autoPlay={true} muted={true} loop={true}>
                  <source src={FeedbackableAppVideo} type="video/webm" />
                </video>
              </AspectRatio>
              {/* <ReactPlayer playing url={["foo.webm", "foo.ogg"]} /> */}
              {/* <AspectRatio ratio={16 / 9} minW="100%">
                <Box bg="gray.100" rounded="lg" />
              </AspectRatio> */}
            </VStack>
          </Container>
        </section>
        <section className="section-add-feedback">
          <Container maxW={["container.md", null, null, null, "container.lg"]}>
            <VStack spacing="8">
              <Text
                fontSize="4xl"
                fontWeight="medium"
                textAlign="center"
                as="h2"
              >
                Say goodbye to email chains full of screenshots
              </Text>
              <Flex align="center" wrap="wrap" minW="100%">
                <Box
                  position="relative"
                  zIndex="1"
                  width={["100%", null, "66%"]}
                >
                  <Box rounded="lg" overflow="hidden" shadow="lg">
                    <Img
                      fluid={
                        staticData.screenshotAddFeedback.childImageSharp.fluid
                      }
                    />
                  </Box>
                </Box>
                <Box
                  position="relative"
                  zIndex="2"
                  width={["100%", null, "33%"]}
                >
                  <Card
                    position="relative"
                    p="3"
                    pl={[null, null, "5"]}
                    marginTop={[null, null, "-2rem", "4rem"]}
                    marginLeft={[null, null, "-3rem"]}
                  >
                    <Text fontWeight="bold" mb="3" fontSize="lg">
                      Super simple feedback
                    </Text>
                    <Text fontSize="lg">
                      It’s so easy, clients, designers & QA can leave feedback
                      with ease.
                      <br />
                      <br />
                      Screenshots and browser data are recorded so you don’t
                      have to waste time asking questions!
                    </Text>
                    <CardDot alignment="left" />
                  </Card>
                </Box>
              </Flex>
            </VStack>
          </Container>
        </section>
        <section className="section-add-project">
          <Container maxW={["container.md", null, null, null, "container.lg"]}>
            <VStack spacing="8">
              <Text
                fontSize="4xl"
                fontWeight="medium"
                textAlign="center"
                as="h2"
              >
                No complicated setup, start getting feedback instantly
              </Text>
              <Flex align="center" wrap="wrap" minW="100%">
                <Box
                  position="relative"
                  zIndex="1"
                  width={["100%", null, "66%"]}
                >
                  <Box rounded="lg" overflow="hidden" shadow="lg">
                    <Img
                      fluid={
                        staticData.screenshotAddProject.childImageSharp.fluid
                      }
                    />
                  </Box>
                </Box>
                <Box
                  position="relative"
                  zIndex="2"
                  width={["100%", null, "33%"]}
                >
                  <Card
                    position="relative"
                    p="3"
                    pl={[null, null, "5"]}
                    marginTop={[null, null, "-2rem", "4rem"]}
                    marginLeft={[null, null, "-3rem"]}
                  >
                    <Text fontWeight="bold" mb="3" fontSize="lg">
                      Get started in seconds
                    </Text>
                    <Text fontSize="lg">
                      No code snippets or browser extensions. Just start getting
                      feedback on your live site, dev site, staging site,
                      anywhere!
                    </Text>
                    <CardDot alignment="left" />
                  </Card>
                </Box>
              </Flex>
            </VStack>
          </Container>
        </section>
        <section className="section-board">
          <Container maxW={["container.md", null, null, null, "container.lg"]}>
            <VStack spacing="8">
              <Box>
                <Text
                  fontSize="4xl"
                  fontWeight="medium"
                  textAlign="center"
                  as="h2"
                >
                  Dedicated feedback board
                </Text>
                <Text fontSize="2xl" color="gray.500" textAlign="center">
                  *Integrations coming soon
                </Text>
              </Box>

              <Flex align="center" wrap="wrap" minW="100%">
                <Box
                  position="relative"
                  zIndex="1"
                  width={["100%", null, "66%"]}
                >
                  <Box rounded="lg" overflow="hidden" shadow="lg">
                    <Img
                      fluid={staticData.screenshotBoard.childImageSharp.fluid}
                    />
                  </Box>
                </Box>
                <Box
                  position="relative"
                  zIndex="2"
                  width={["100%", null, "33%"]}
                >
                  <Card
                    position="relative"
                    p="3"
                    pl={[null, null, "5"]}
                    marginTop={[null, null, "-2rem", "4rem"]}
                    marginLeft={[null, null, "-3rem"]}
                  >
                    <Text fontWeight="bold" mb="3" fontSize="lg">
                      All your feedback: one place
                    </Text>
                    <Text fontSize="lg">
                      Keep track of all your bugs and feedback in one place!
                      Organise your board how you want.
                    </Text>
                    <CardDot alignment="left" />
                  </Card>
                </Box>
              </Flex>
            </VStack>
          </Container>
        </section>

        <section className="section-board-feedback">
          <Container maxW={["container.md", null, null, null, "container.lg"]}>
            <VStack spacing="8">
              <Text
                fontSize="4xl"
                fontWeight="medium"
                textAlign="center"
                as="h2"
              >
                Visual feedback with annotations
              </Text>

              <Flex align="center" wrap="wrap" minW="100%">
                <Box
                  position="relative"
                  zIndex="1"
                  width={["100%", null, "66%"]}
                >
                  <Box rounded="lg" overflow="hidden" shadow="lg">
                    <Img
                      fluid={
                        staticData.screenshotBoardFeedback.childImageSharp.fluid
                      }
                    />
                  </Box>
                </Box>
                <Box
                  position="relative"
                  zIndex="2"
                  width={["100%", null, "33%"]}
                >
                  <Card
                    position="relative"
                    p="3"
                    pl={[null, null, "5"]}
                    marginTop={[null, null, "-2rem", "4rem"]}
                    marginLeft={[null, null, "-3rem"]}
                  >
                    <Text fontWeight="bold" mb="3" fontSize="lg">
                      Keep the whole team on the same page
                    </Text>
                    <Text fontSize="lg">
                      Say goodbye to email chains, word docs and messages. With
                      Feedbackable, your whole team can see the feedback, and
                      clients can even add items!
                    </Text>
                    <CardDot alignment="left" />
                  </Card>
                </Box>
              </Flex>
            </VStack>
          </Container>
        </section>
        <section className="section-who-for">
          <Container maxW={["container.md", null, null, null, "container.lg"]}>
            <VStack spacing="8">
              <Text
                fontSize="4xl"
                fontWeight="medium"
                textAlign="center"
                as="h2"
              >
                Feedbackable is for...
              </Text>
              <Text fontSize="lg" textAlign="center">
                Feedbackable is designed for anyone who builds, develops,
                designs or maintains websites or apps. Feedbackable is designed
                to give you a tool to easily collect, organise &amp; manage
                feedback from your clients, team and stakeholders.
              </Text>
              <SimpleGrid columns={[1, null, null, 2]} minW="100%" gap="4">
                <Stack spacing="6">
                  <FeedbackableForCard
                    title="Web development agencies"
                    content="Quit receiving Word documents full of screenshots and
                        unactionable feedback."
                  />
                  <FeedbackableForCard
                    title="New website builds"
                    content="Make QA and user testing easier on new website builds.
                        Manage stakeholder expectations and feedback easily."
                  />
                </Stack>
                <Stack spacing="6">
                  <FeedbackableForCard
                    title="Marketing agencies"
                    content="Making changes to landing pages is much easier with organised and
          streamlined visual feedback."
                  />
                  <FeedbackableForCard
                    title="Digital teams"
                    content="Keep your whole team on the same page. Manage feedback from all stakeholders in one location."
                  />
                </Stack>
              </SimpleGrid>
            </VStack>
          </Container>
        </section>
        <section className="">
          <Container maxW={["container.md", null, null, null, "container.lg"]}>
            <VStack spacing="8">
              <SimpleGrid columns={[1, null, 3]} spacing="10">
                <Box>
                  <Text
                    fontSize={["xl", null, "2xl"]}
                    mb="4"
                    textAlign="center"
                  >
                    Organised
                  </Text>
                  <Text fontSize="lg">
                    All your feedback and bug reports in one place. Stop chasing
                    emails, scribbled notes, text documents for the right
                    feedback or piece of copy. Organise all your feedback in one
                    board. *Coming soon: integrations!
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize={["xl", null, "2xl"]}
                    mb="4"
                    textAlign="center"
                  >
                    Simple
                  </Text>
                  <Text fontSize="lg">
                    Zero click install! Simply enter your dev/staging/live site
                    URL in the app and start collecting and dealing with
                    feedback and bug reports in seconds. No code snippets, no
                    browser extensions.
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize={["xl", null, "2xl"]}
                    mb="4"
                    textAlign="center"
                  >
                    Collaborative
                  </Text>
                  <Text fontSize="lg">
                    Work collaboratively with your development & design teams,
                    with private projects. Need feedback or bug reports from
                    clients or even users? Collect feedback from unlimited
                    guests.
                  </Text>
                </Box>
              </SimpleGrid>
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

export default IndexPage

function FeedbackableForCard({ title = "", content = "" }) {
  return (
    <Box rounded="lg" shadow="lg" p="6" position="relative" overflow="hidden">
      <Box
        position="absolute"
        left="0"
        top="0"
        bg="purple.500"
        w="4rem"
        h="4rem"
      />
      <Box
        position="absolute"
        left="0"
        top="0"
        w="8rem"
        h="8rem"
        rounded="full"
        top="0"
        left="0"
        bg="white"
      />
      <VStack spacing="6" align="start" position="relative">
        <Text fontWeight="bold" fontSize="2xl">
          {title}
        </Text>
        <Text fontSize="lg">{content}</Text>
      </VStack>
    </Box>
  )
}
