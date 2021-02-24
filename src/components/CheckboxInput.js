import React from "react"
import {
  FormControl,
  Box,
  VisuallyHidden,
  ControlBox,
  Icon,
} from "@chakra-ui/react"

function CheckboxInput({ label, ...props }) {
  return (
    <FormControl as="fieldset">
      <Box as="label" cursor="pointer">
        <VisuallyHidden as="input" type="checkbox" {...props} />
        <ControlBox
          borderWidth="1px"
          size="24px"
          rounded="sm"
          _checked={{
            bg: "pink.500",
            color: "white",
            borderColor: "pink.500",
          }}
          _focus={{
            borderColor: "pink.600",
            boxShadow: "outline",
          }}
        >
          <Icon name="check" size="16px" />
        </ControlBox>
        <Box as="span" verticalAlign="top" ml={3}>
          {label}
        </Box>
      </Box>
    </FormControl>
  )
}

export default CheckboxInput
