import React from "react";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./src/theme";

export { wrapRootElement } from "./gatsby-browser";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript
      key="chakra-ui-no-flash"
      initialColorMode={theme.config.initialColorMode}
    />,
  ]);
};
