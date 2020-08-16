import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

import Container from "../components/Container"
import { SimpleGrid, Text, Box, Flex, Button, Stack } from "@chakra-ui/core"
import Background from "../components/Background"
import Card from "../components/Card"

const PricingCard = ({ price, name, features, isFeatured = false }) => {
  return (
    <Box
      marginTop={isFeatured ? [0, null, "-1.5rem"] : 0}
      marginLeft={isFeatured ? [0, null, "-1rem"] : 0}
      marginRight={isFeatured ? [0, null, "-1rem"] : 0}
    >
      <Card
        px={isFeatured ? ["4", null, "6"] : "4"}
        py={isFeatured ? ["3", null, "8"] : "3"}
        bg={isFeatured ? "pink.50" : "gray.50"}
        borderColor={isFeatured ? "pink.300" : "gray.200"}
        maxWidth={["sm"]}
        mx="auto"
      >
        <Text
          fontSize={["4xl", null, "6xl"]}
          fontWeight="bold"
          textAlign="center"
        >
          {price}
        </Text>
        <Text fontSize="sm" textAlign="center" color="gray.600" mb="3">
          /month
        </Text>
        <Text fontSize="xl" textAlign="center">
          {name}
        </Text>
        <Stack spacing="3" mt="6">
          {features.map((feat, index) => (
            <Text key={index}>{feat}</Text>
          ))}
        </Stack>
        <Flex justifyContent="center" mt="6">
          <Button
            variantColor={isFeatured ? "pink" : "purple"}
            size={isFeatured ? "lg" : "md"}
            as={Link}
            to="/signup"
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
  return (
    <Layout>
      <SEO title="Pricing" />
      <Background display={["none", null, "block"]} />
      <Container py={[10, null, 20]}>
        <Text fontSize="4xl" color="purple.400" mb="6" fontWeight="medium">
          Collect feedback &amp; copy from clients, on time, every time.
        </Text>
        <Text fontSize="xl">
          No more back and forth emails, copy-pasting screenshots, asking which
          browser, clients getting stuck on incorrect copy. Get all your
          feedback and bug reports in one place, with all the information you
          need.
        </Text>
      </Container>
      <Container pb={[20, null, 32]}>
        <SimpleGrid columns={[1, null, 3]} spacing={[3, null, 10]}>
          <Box>
            <PricingCard
              price="$35"
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
              isFeatured
              price="$70"
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
              price="$120"
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
      </Container>
    </Layout>
  )
}

export default PricingPage
