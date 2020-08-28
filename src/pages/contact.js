import React, { useState, useEffect } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Container from "../components/Container"
import { Text, Box, Heading, Stack } from "@chakra-ui/core"
import Background from "../components/Background"
import Card from "../components/Card"

const ContactPage = () => {
  const emailAddress = "c2ViQGZlZWRiYWNrYWJsZS5pbw=="
  const [renderedEmail, setRenderedEmail] = useState("")

  useEffect(() => {
    setRenderedEmail(atob(emailAddress))
  }, [])

  return (
    <Layout>
      <SEO title="Contact" />
      <Background display={["none", null, "block"]} />
      <Container py={[10, null, 10]}>
        <Text fontSize="4xl" color="purple.400" mb="6" fontWeight="medium">
          The feedback tool for web &amp; content
        </Text>
      </Container>
      <Container pb={[20, null, 32]}>
        <Box mx="auto" maxW="2xl">
          <Card px="6" py="8">
            <Stack spacing="3">
              <Heading size="xl">Contact</Heading>
              <Text fontSize="xl">
                Got an enquiry? Want to know about our early adopter program?
              </Text>
              <Text fontSize="xl" fontWeight="bold">
                Send me an email:
              </Text>
              <Text color="purple.400" fontFamily="base" fontSize="2xl">
                <a
                  href={`mailto:${renderedEmail}`}
                  data-subject="Hey Seb, I was checking out Feedbackable.io and..."
                >
                  {renderedEmail}
                </a>
              </Text>
            </Stack>
          </Card>
        </Box>
      </Container>
    </Layout>
  )
}

export default ContactPage
