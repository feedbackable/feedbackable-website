import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, CSSReset, LightMode, Box } from "@chakra-ui/core"
import customTheme from "../theme"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <LightMode>
          <Header />
          <Box as="main" position="relative" overflow="hidden">
            {children}
          </Box>
          <Footer />
        </LightMode>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
