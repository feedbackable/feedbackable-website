import React, { useMemo, useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

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
} from "@chakra-ui/react"
import Card from "../components/Card"
import HighlightText from "../components/HighlightText"
import {
  SolidButtonStyle,
  OutlinePurpleButtonStyle,
} from "../components/ButtonStyles"
import { BiChevronUp, BiChevronDown } from "react-icons/bi"
import FooterCTA from "../components/FooterCTA"

const pricing = {
  solo: {
    monthly: 35,
    annual: 30,
  },
  studio: {
    monthly: 70,
    annual: 60,
  },
  agency: {
    monthly: 120,
    annual: 100,
  },
}

const PricingCard = ({
  slug,
  showAnnual = false,
  name,
  features,
  isFeatured = false,
}) => {
  const displayPrice = useMemo(() => {
    const price = showAnnual ? pricing[slug].annual : pricing[slug].monthly
    return price
  }, [slug, showAnnual])

  return (
    <Box
      marginTop={isFeatured ? [0, null, "-1.5rem"] : 0}
      marginLeft={isFeatured ? [0, null, "-1rem"] : 0}
      marginRight={isFeatured ? [0, null, "-1rem"] : 0}
    >
      <Card
        px={isFeatured ? ["4", null, "6"] : "4"}
        py={isFeatured ? ["6", null, "10"] : "6"}
        border="3px solid transparent"
        borderColor={isFeatured ? "purple.500" : null}
        maxWidth={["sm"]}
        mx="auto"
      >
        <Text fontSize="2xl" textAlign="center" fontWeight="bold">
          {name}
        </Text>
        <Text
          fontSize={["4xl", null, "6xl"]}
          fontWeight="bold"
          textAlign="center"
          display="flex"
          justifyContent="center"
        >
          <Text
            as="span"
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            mt="4"
            mr="4"
          >
            $
          </Text>
          {displayPrice}
          <Text
            textAlign="center"
            color="gray.400"
            mb="3"
            fontWeight="bold"
            fontSize="md"
            alignSelf="flex-end"
            mt="-3"
            ml="4"
            mr="-10"
            as="span"
          >
            /month
          </Text>
        </Text>
        {showAnnual && (
          <Text>${pricing[slug].annual * 12} annually (2 months for free)</Text>
        )}

        <Stack spacing="3" mt="6">
          {features.map((feat, index) => (
            <Text key={index}>{feat}</Text>
          ))}
        </Stack>
        <Flex justifyContent="center" mt="6">
          <Button
            {...(!isFeatured && OutlinePurpleButtonStyle)}
            {...(isFeatured && SolidButtonStyle)}
            as={Link}
            to={`/signup?plan=${slug}&billing=${
              showAnnual ? "yearly" : "monthly"
            }`}
            className={`select-plan-${name.toLowerCase()}`}
            data-click-event={`select-plan-${name.toLowerCase()}`}
            onClick={() => {
              window.localStorage.setItem("selected-plan", name)
              window.localStorage.setItem("selected-price", displayPrice)
            }}
          >
            Start a free trial
          </Button>
        </Flex>
        <Text fontSize="sm" color="gray.600" textAlign="center" mt="6">
          Free for 14 days. No credit card required.
        </Text>
      </Card>
    </Box>
  )
}

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <Layout>
      <SEO title="Pricing" />
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
                  color="purple.500"
                  display="block"
                >
                  Start saving time today.
                </Text>
                <Text as="span" fontSize={["3xl", null, "4xl"]} display="block">
                  Collect actionable feedback on time, every time.
                </Text>
              </Box>
              <Text fontSize="2xl" textAlign={["center"]}>
                <Text as="span" display={["block", null, "inline"]}>
                  Free 14 day trial -{" "}
                </Text>
                <HighlightText angle="0" display={["block", null, "inline"]}>
                  No credit card required
                </HighlightText>
              </Text>
              <Text fontSize="xl">
                Stop letting client feedback drive you mad. Say goodbye to email
                chains and unactionable feedback. Get started today and start
                collecting feedback in 30 seconds. No installation, no browser
                extensions or code snippets.
              </Text>
            </VStack>
          </Container>
        </section>
        <section className="section-pricing">
          <Container maxW="container.lg">
            <Center mb="12">
              <SimpleGrid columns="3">
                <Text
                  fontSize="lg"
                  color={isAnnual ? "black" : "purple.500"}
                  textAlign="right"
                >
                  Monthly
                </Text>
                <Flex px="3" justifyContent="center">
                  <Switch
                    colorScheme="purple"
                    size="lg"
                    defaultChecked={isAnnual}
                    onChange={e => setIsAnnual(e.target.checked)}
                  />
                </Flex>
                <Text fontSize="lg" color={isAnnual ? "purple.500" : "black"}>
                  Yearly{" "}
                  <Text as="span" fontSize="sm">
                    (save up to 16%)
                  </Text>
                </Text>
              </SimpleGrid>
            </Center>
            <SimpleGrid
              columns={[1, null, 3]}
              spacing={[3, null, 10]}
              mt="1.5rem"
            >
              <Box>
                <PricingCard
                  showAnnual={isAnnual}
                  slug="solo"
                  name="Solo"
                  features={[
                    "1 Team Member",
                    "10 Projects",
                    "Unlimited guests",
                    "Screenshots",
                    "10 GB Storage",
                  ]}
                />
              </Box>
              <Box>
                <PricingCard
                  showAnnual={isAnnual}
                  slug="studio"
                  isFeatured
                  name="Standard"
                  features={[
                    "5 Team Members",
                    "25 Projects",
                    "Unlimited guests",
                    "Screenshots",
                    "20 GB Storage",
                  ]}
                />
              </Box>
              <Box>
                <PricingCard
                  showAnnual={isAnnual}
                  slug="agency"
                  name="Agency"
                  features={[
                    "25 Team Members",
                    "Unlimited Projects",
                    "Unlimited guests",
                    "Screenshots",
                    "50 GB Storage",
                  ]}
                />
              </Box>
            </SimpleGrid>
            <Box mt={[3, null, 10]}>
              <Box maxW="2xl" mx="auto">
                <Card p="6">
                  <VStack spacing="4">
                    <Text fontSize="2xl" textAlign="center" fontWeight="bold">
                      Enterprise
                    </Text>
                    <Text fontSize="xl" textAlign="center">
                      Need more users? Custom billing?
                    </Text>
                    <Text textAlign="center" fontSize="lg">
                      If you need a plan with something more, contact us to get
                      a plan just for you.
                    </Text>
                    <Flex justify="center">
                      <Button
                        as="a"
                        href="mailto:seb@feedbackable.io"
                        {...SolidButtonStyle}
                      >
                        Contact us
                      </Button>
                    </Flex>
                  </VStack>
                </Card>
              </Box>
            </Box>
          </Container>
        </section>
        <section className="section-faqs">
          <Container maxW={["container.md", null, null, null, "container.lg"]}>
            <VStack spacing="8">
              <Text
                fontSize="4xl"
                fontWeight="medium"
                textAlign="center"
                as="h2"
              >
                FAQs
              </Text>
              <VStack
                spacing="6"
                w="100%"
                maxW="2xl"
                sx={{ "&>*": { minW: "100%" } }}
                as="ul"
                listStyleType="none"
              >
                <FAQ title="How do I install Feedbackable?">
                  <VStack spacing="3" alignItems="flex-start">
                    <Text>
                      <strong>You don't!</strong> There's nothing to install to
                      use Feedbackable.
                    </Text>
                    <Text>
                      Getting started with Feedbackable is as simple as:
                    </Text>
                    <OrderedList listStylePos="inside">
                      <ListItem>Sign up for Feedbackable</ListItem>
                      <ListItem>Add your project</ListItem>
                      <ListItem>Start collecting feedback!</ListItem>
                    </OrderedList>
                  </VStack>
                </FAQ>
                <FAQ title="Do you offer yearly discounts?">
                  <VStack spacing="3" alignItems="flex-start">
                    <Text>
                      <strong>Yep!</strong>
                    </Text>
                    <Text>
                      Simply choose yearly pricing above to receive up to 16%
                      off your plan price, which is 2 months free!
                    </Text>
                  </VStack>
                </FAQ>
                <FAQ title="What integrations do you offer?">
                  <VStack spacing="3" alignItems="flex-start">
                    <Text>
                      Currently, we don't have any third party integrations.
                    </Text>
                    <Text>
                      We're planning on offering integrations such as Trello,
                      Jira &amp; Asana. If there's an integration you really
                      need, please reach out to us and we'll let you know more
                      about our roadmap.
                    </Text>
                  </VStack>
                </FAQ>
                <FAQ title="What's a team member?">
                  <VStack spacing="3" alignItems="flex-start">
                    <Text>
                      A team member is a user on your team. Team members have
                      access to add &amp; manage feedback on a project. Team
                      members can add, remove &amp; manage projects
                    </Text>
                  </VStack>
                </FAQ>
                <FAQ title="What's a guest?">
                  <VStack spacing="3" alignItems="flex-start">
                    <Text>
                      A guest is any anonymous user who can add feedback to your
                      project. Guests can add tasks, and view the tasks they
                      have added, but have no access to other's tasks, feedback
                      or the board.
                    </Text>
                  </VStack>
                </FAQ>
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

export default PricingPage

function FAQ({ title, children }) {
  const [isOpen, setIsOpen] = useState()

  return (
    <Box
      as="li"
      border="3px solid transparent"
      borderColor="gray.300"
      rounded="md"
      bg="white"
    >
      <Box
        as="button"
        px="6"
        py="4"
        color="purple.500"
        w="100%"
        fontSize="lg"
        fontWeight="bold"
        textAlign="left"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        rounded="md"
        _focus={{
          boxShadow: "outline",
          outline: "2px solid transparent",
          outlineOffset: "2px",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Box as="span" mr="3">
          {title}
        </Box>
        <Box>
          <IconButton
            variant="ghost"
            icon={isOpen ? <BiChevronUp /> : <BiChevronDown />}
            fontSize="4xl"
            as="span"
          />
        </Box>
      </Box>
      <Collapse in={isOpen}>
        <Box px="6" py="4" pb="10" fontSize="lg" lineHeight="tall">
          {children}
        </Box>
      </Collapse>
    </Box>
  )
}
