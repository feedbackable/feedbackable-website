export const LinkButtonStyle = {
  size: "lg",
  fontSize: "md",
  variant: "ghost",
  color: "black",

  py: "2",
  transition:
    "color .2s ease,background-color .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease",
  _hover: {
    textDecoration: "none",
    transform: "translateY(-2px)",
  },
}

export const OutlineButtonStyle = {
  size: "lg",
  minWidth: "120px",
  fontSize: "md",
  shadow: "lg",
  variant: "outline",
  boxShadow:
    "inset 0 0 0 2px black, 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
  transition:
    "color .2s ease,background-color .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease",
  _hover: {
    textDecoration: "none",
    transform: "translateY(-2px)",
  },
}

export const OutlinePurpleButtonStyle = {
  size: "lg",
  minWidth: "120px",
  fontSize: "md",
  shadow: "lg",
  variant: "outline",
  color: "purple.500",
  boxShadow:
    "inset 0 0 0 2px #943BDC, 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
  transition:
    "color .2s ease,background-color .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease",
  _hover: {
    textDecoration: "none",
    transform: "translateY(-2px)",
  },
}

export const SolidButtonStyle = {
  size: "lg",
  minWidth: "120px",
  fontSize: "md",
  shadow: "lg",
  colorScheme: "purple",
  bgGradient: "linear(to-r, purple.500, purple.600)",
  boxShadow:
    "0 2px 4px 0 rgb(136 144 195 / 20%), 0 5px 15px 0 rgb(37 44 97 / 15%)",
  transition:
    "color .2s ease,background-color .2s ease,border-color .2s ease,box-shadow .2s ease,transform .2s ease",
  _hover: {
    textDecoration: "none",
    transform: "translateY(-2px)",
  },
}
