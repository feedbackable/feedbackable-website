/** @jsx jsx */
import { jsx } from "@emotion/core"

import { Box } from "@chakra-ui/core"
import BackgroundSVG from "../images/background.svg"

const Background = props => {
  return (
    <Box
      zIndex="-1"
      position="absolute"
      width="100%"
      paddingBottom="100%"
      overflow="hidden"
      css={{
        svg: {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        },
      }}
      {...props}
    >
      <BackgroundSVG />
    </Box>
  )
}
export default Background
