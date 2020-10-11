import React, { useState, useEffect } from "react"
import {
  Box,
  Button,
  Text,
  Heading,
  Stack,
  FormControl,
  Collapse,
  Input,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/core"
import { useFormState } from "react-use-form-state"
import to from "../../lib/to"
import checkStatus from "../../lib/checkStatus"
import CheckboxInput from "../CheckboxInput"

function SurveyForm({ setFormPage, onCloseRef }) {
  const [formState, { text, checkbox }] = useFormState()
  const [formFeedback, setFormFeedback] = useState()
  const [isLoading, setIsLoading] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isFormValid()) {
      return
    }

    const formData = formState.values

    window.localStorage.setItem("survey-reasons", formData.reasons.join(","))
    window.localStorage.setItem("survey-otherReasons", formData.otherReason)

    const selectedPlan = window.localStorage.getItem("selected-plan")
    const selectedPrice = window.localStorage.getItem("selected-price")

    if (selectedPlan) {
      formData.selectedPlan = selectedPlan
    }
    if (selectedPrice) {
      formData.selectedPrice = selectedPrice
    }

    // Empty "other" reason if it has a value but other has been unticked
    if (
      formData.reasons.indexOf("other") === -1 &&
      formData.otherReason.length
    ) {
      formData.otherReason = ""
    }

    setIsLoading(true)
    const [err, resp] = await to(
      fetch("/.netlify/functions/exit-survey", {
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

    if (resp?.updates?.updatedRange) {
      window.localStorage.setItem(
        "survey-sheets-range",
        resp.updates.updatedRange
      )
    }

    // Ignore errors. Ultimately, users don't care if this submits correctly or not

    // if (err) {
    // setFormFeedback("Something went wrong")
    // return
    // }

    setFormPage(1)
  }

  function isFormValid() {
    return (
      formState.validity.reasons &&
      ((formState.values.reasons.indexOf("other") > -1 &&
        formState.validity.otherReason) ||
        formState.values.reasons.indexOf("other") === -1)
    )
  }

  function validateCheckGroupRequired(value, values, e) {
    if (
      typeof values[e.target.name] === "undefined" ||
      values[e.target.name].length < 1
    ) {
      return "At least one option is required"
    }
  }

  function isFormControlInvalid(name) {
    return !formState.validity[name] && formState.touched[name]
  }

  return (
    <Stack spacing="5" py="4">
      <Stack spacing="5">
        <Heading size="xl">Before you go!</Heading>
        <Heading size="lg">Help make Feedbackable better</Heading>
        <Text as="p">
          <strong>We're currently building Feedbackable</strong> and we'd love
          your input on how to make it better!
        </Text>
        <Text as="p">
          Just quickly, would you mind telling us why you weren't interested in
          Feedbackable today?
        </Text>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Stack spacing="2">
          <FormControl
            isInvalid={isFormControlInvalid("reasons")}
            isDisabled={isLoading}
          >
            <Stack spacing="2">
              <CheckboxInput
                label={"Not relevant to me"}
                {...checkbox({
                  name: "reasons",
                  value: "not-relevant",
                  validate: validateCheckGroupRequired,
                })}
              />
              <CheckboxInput
                label={"I'm already using another solution"}
                {...checkbox({
                  name: "reasons",
                  value: "other-solution",
                  validate: validateCheckGroupRequired,
                })}
              />
              <CheckboxInput
                label={"Too expensive"}
                {...checkbox({
                  name: "reasons",
                  value: "expensive",
                  validate: validateCheckGroupRequired,
                })}
              />
              <CheckboxInput
                label={"Other..."}
                {...checkbox({
                  name: "reasons",
                  value: "other",
                  validate: validateCheckGroupRequired,
                })}
              />
              <FormErrorMessage>{formState.errors.reasons}</FormErrorMessage>
            </Stack>
          </FormControl>
          <Collapse
            isOpen={formState?.values?.reasons?.indexOf("other") !== -1}
            pl="10"
          >
            <FormControl
              isInvalid={isFormControlInvalid("otherReason")}
              isDisabled={isLoading}
            >
              <Input
                placeholder="Other reason... "
                isRequired={formState?.values?.reasons?.indexOf("other") !== -1}
                required={formState?.values?.reasons?.indexOf("other") !== -1}
                {...text("otherReason")}
              />
              <FormErrorMessage>
                {formState.errors.otherReason}
              </FormErrorMessage>
            </FormControl>
          </Collapse>
          <Text color="gray.500" size="sm" flex="0">
            Choose any that apply
          </Text>
          {formFeedback && (
            <Box>
              <Text color="red.500">{formFeedback}</Text>
            </Box>
          )}
          <Flex justifyContent="center">
            <Button
              isDisabled={!isFormValid()}
              variantColor="purple"
              type="submit"
              isLoading={isLoading}
              loadingText="Saving..."
              px="6"
            >
              Submit
            </Button>
          </Flex>
        </Stack>
      </form>
    </Stack>
  )
}

export default SurveyForm
