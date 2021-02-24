import React, { useState, useCallback } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import {
  Container,
  Text,
  Box,
  Flex,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react"
import Background from "../components/Background"
import Card from "../components/Card"

import to from "../lib/to"
import checkStatus from "../lib/checkStatus"

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
  })
  const [formFeedback, setFormFeedback] = useState({
    email: "",
    global: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [formComplete, setFormComplete] = useState(false)

  const handleChange = useCallback(
    e => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    },
    [formData]
  )

  const handleSubmit = async e => {
    e.preventDefault()

    if (isLoading) return

    if (!formData.email) {
      setFormFeedback({ email: "Please enter your email" })
      return
    }

    setIsLoading(true)
    setError(false)
    setFormFeedback({ email: "", global: "" })

    const [err, resp] = await to(
      fetch("/.netlify/functions/signup", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(checkStatus)
    )

    setIsLoading(false)

    if (err) {
      console.error(err)
      setError(err)
      setFormFeedback({
        email: "",
        global:
          "Something went wrong. We're really sorry, and this is most likely our fault.",
      })
      return
    }

    setFormComplete(true)
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "subscribe",
        conversionValue: window.localStorage.getItem("selected-price"),
      })
    }
  }

  return (
    <Layout>
      <SEO title="Signup" />
      <Background display={["none", null, "block"]} />
      <Container py={[10, null, 10]}>
        <Text fontSize="4xl" color="purple.400" mb="6" fontWeight="medium">
          The feedback tool for web &amp; content
        </Text>
      </Container>
      <Container pb={[20, null, 32]}>
        <Box mx="auto" maxW="2xl">
          <Card px="6" py="8">
            {formComplete ? (
              <>
                <Text fontWeight="bold" fontSize="2xl" mb="6">
                  Thank you!
                </Text>
                <Text fontSize="lg">
                  As a young startup, all we can say is{" "}
                  <strong>thank you</strong> from the bottom of our hearts. We
                  really hope we can make a difference to your workflows soon!
                </Text>
              </>
            ) : (
              <>
                <Text fontWeight="bold" fontSize="2xl" mb="6">
                  Hi! You’ve caught us before we were ready.
                </Text>
                <Text mb="6" fontSize="lg">
                  Feedbackable is still under construction. We’re working hard
                  to finish it up, and it should be ready to help you with your
                  projects soon. Enter your email below to to request early
                  access, and we’ll let you know when it’s ready!
                </Text>
                <form onSubmit={handleSubmit}>
                  <FormControl
                    isInvalid={!!formFeedback.email}
                    isDisabled={isLoading}
                  >
                    <FormLabel htmlFor="email">Your email</FormLabel>
                    <Flex>
                      <Input
                        flexGrow="1"
                        id="email"
                        type="email"
                        name="email"
                        size="lg"
                        placeholder="hi@example.com"
                        mr="2"
                        value={formData.email}
                        onChange={handleChange}
                        fontFamily="base"
                      />

                      <Button
                        variantColor="purple"
                        size="lg"
                        type="submit"
                        isLoading={isLoading}
                        loadingText="Requesting"
                      >
                        Request access
                      </Button>
                    </Flex>
                    <FormHelperText>
                      We will <em>never</em> sell or distribute your email
                      address. We will <em>only</em> use your email to let you
                      know when Feedbackable.io is ready for you!
                    </FormHelperText>
                    <FormErrorMessage>{formFeedback.email}</FormErrorMessage>
                  </FormControl>
                  {formFeedback.global && (
                    <Text color="red.500" mt="3">
                      {formFeedback.global}
                    </Text>
                  )}
                </form>
              </>
            )}
          </Card>
        </Box>
      </Container>
    </Layout>
  )
}

export default SignupPage
