import React, { useState } from "react"
import {
  Stack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Flex,
  Input,
  Button,
  FormHelperText,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react"
import { useFormState } from "react-use-form-state"
import to from "../../lib/to"
import checkStatus from "../../lib/checkStatus"

function EmailForm({ setFormPage }) {
  const [formState, { email, text }] = useFormState()
  const [formFeedback, setFormFeedback] = useState()
  const [isLoading, setIsLoading] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isFormValid()) {
      return
    }
    setFormFeedback("")

    const formData = formState.values

    formData.range = window.localStorage.getItem("survey-sheets-range")

    setIsLoading(true)
    const [err, resp] = await to(
      fetch("/.netlify/functions/exit-email", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(checkStatus)
        .then(r => r.json())
    )
    setIsLoading(false)

    if (err) {
      setFormFeedback("Something went wrong.")
      return
    }

    setFormPage(2)
  }

  function isFormValid() {
    return formState.validity.name && formState.validity.email
  }

  function isFormControlInvalid(name) {
    return !formState.validity[name] && formState.touched[name]
  }

  return (
    <Stack spacing="5" py="4">
      <Heading size="xl">Thank you!</Heading>
      <Text>Your feedback will help make Feedbackable better!</Text>
      <Text>
        In exchange for a <strong>Free $25 Amazon Gift Card</strong>, would you
        be interested in letting us give you a short (30 minute or less) call to
        help us shape our app?
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing="2">
          <FormControl
            isInvalid={isFormControlInvalid("name")}
            isDisabled={isLoading}
          >
            <FormLabel htmlFor="name">Your name</FormLabel>

            <Input
              flexGrow="1"
              mr="2"
              fontFamily="base"
              isRequired={true}
              required={true}
              {...text("name")}
            />

            <FormErrorMessage>{formState.errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={isFormControlInvalid("email")}
            isDisabled={isLoading}
          >
            <FormLabel htmlFor="email">Your email</FormLabel>

            <Input
              fontFamily="base"
              isRequired={true}
              required={true}
              {...email("email")}
            />

            <FormHelperText>
              We will <em>never</em> sell or distribute your email address. We
              will <em>only</em> use your email to get your help guiding our
              app.
            </FormHelperText>
            <FormErrorMessage>{formState.errors.email}</FormErrorMessage>
          </FormControl>
          {formFeedback && (
            <Box>
              <Text color="red.500">{formFeedback}</Text>
            </Box>
          )}
        </Stack>
        <Flex justifyContent="center" mt="5">
          <Button
            variantColor="purple"
            type="submit"
            isLoading={isLoading}
            loadingText="Saving..."
            px="6"
            isDisabled={!isFormValid()}
          >
            I'd like to help!
          </Button>
        </Flex>
        <Box mt="5">
          <Text fontSize="sm" color="gray.500" flex="0">
            Gift cards will only be made available to participants who are
            selected to take part in a call of approx. 30 minutes.
          </Text>
        </Box>
      </form>
    </Stack>
  )
}

export default EmailForm
