import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Container from "../components/Container"
import { SimpleGrid, Text, Box, Flex, Button, Stack } from "@chakra-ui/core"
import Background from "../components/Background"
import Card from "../components/Card"

const PricingCard = ({ price, name, features }) => {
  return (
    <Card px="4" py="3">
      <Text fontSize="6xl" fontWeight="bold" textAlign="center">
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
      <Flex justifyContent="center">
        <Button variantColor="purple">Start a free trial</Button>
      </Flex>
    </Card>
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
      <Container pb={[10, null, 20]}>
        <SimpleGrid columns={[1, null, 3]} spacing="10">
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
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default PricingPage
