import React from 'react';
import { Box } from "@chakra-ui/react"
import BackgroundSVG from "../images/background.svg"

const Background = props => {
  return (
    <Box
      zIndex="-1"
      position="absolute"
      width="100%"
      paddingBottom="100%"
      overflow="hidden"
      opacity="0.5"
      sx={{
        img: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        },
      }}
      {...props}
    >
      <img src={BackgroundSVG} alt="" />
    </Box>
  )
}
export default Background
