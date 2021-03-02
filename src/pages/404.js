import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Card from "../components/Card"
import { Text, Container } from "@chakra-ui/react"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container py={[10, null, 20]}>
      <Card p="6" maxW="2xl" mx="auto">
        <Text as="h1" fontSize="3xl" mb="6">
          Not found
        </Text>
        <Text>
          The page you were looking for doesn't live here. If this is our fault,
          we are extremely sorry!
        </Text>
      </Card>
    </Container>
  </Layout>
)

export default NotFoundPage
