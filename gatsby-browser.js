/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// import "mailgo/dist/mailgo.min.js"

import React from "react";
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  GlobalStyle,
  PortalManager,
  ColorModeScript,
} from "@chakra-ui/react";
import theme from "./src/theme";

function WrapRootElement(
  { element },
  { isResettingCSS = true, isUsingColorMode = true, portalZIndex = 40 }
) {
  const content = (
    <>
      {isResettingCSS && <CSSReset />}
      <GlobalStyle />
      <PortalManager zIndex={portalZIndex}>{element}</PortalManager>
    </>
  );

  return (
    
      
        <ThemeProvider theme={theme}>
          {isUsingColorMode ? (
            <ColorModeProvider options={theme.config}>
              <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
              />
              {content}
            </ColorModeProvider>
          ) : (
            content
          )}
        </ThemeProvider>
      
    
  );
}

export const wrapRootElement = WrapRootElement;

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location;
  // list of routes for the scroll-to-top-hook

  // if the new route is part of the list above, scroll to top (0, 0)

  window.scrollTo(0, 0);

  return false;
};
