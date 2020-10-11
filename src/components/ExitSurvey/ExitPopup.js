import React, { useState, useEffect, useRef } from "react"
import ExitIntent from "../../lib/exitIntent"
import SurveyForm from "./SurveyForm"
import EmailForm from "./EmailForm"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/core"

function ExitPopup() {
  const [formPage, setFormPage] = useState(0)

  const [isOpen, setIsOpen] = useState(false)

  function onOpen() {
    setIsOpen(true)
  }

  function onClose() {
    setFormPage(0)
    setIsOpen(false)
    exitRef.current.setHasInteracted(true)
  }

  const exitRef = useRef()
  useEffect(() => {
    exitRef.current = new ExitIntent({
      id: "exit-survey",
      onExitIntent: onOpen,
    })
    return () => {
      exitRef.current.remove()
    }
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          {formPage === 0 && <SurveyForm setFormPage={setFormPage} />}
          {formPage === 1 && <EmailForm setFormPage={setFormPage} />}
          {formPage === 2 && (
            <Stack spacing="5" py="4">
              <Heading size="xl">Thank you!</Heading>
              <Text>
                We'll be in touch via email if we'd like to get your input on
                how to make Feedbackable better.
              </Text>
            </Stack>
          )}
        </ModalBody>

        <ModalFooter>
          <Button variantColor="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ExitPopup
