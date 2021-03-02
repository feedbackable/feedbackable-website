import React, { useEffect, useState } from "react"
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  Container,
  IconButton,
  useTheme,
  Portal,
  Fade,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { MdClose } from "react-icons/md"
import useViewportWidth from "../hooks/useViewportWidth"
import { AiOutlineMenu } from "react-icons/ai"
import {
  LinkButtonStyle,
  SolidButtonStyle,
  OutlineButtonStyle,
} from "./ButtonStyles"

const menuItems = [
  {
    title: "How it works",
    href: "/product",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
]

const callToActions = [
  {
    title: "Learn more",
    href: "/product",
    variant: "outline",
  },
  {
    title: "Sign up",
    href: "/signup",
    variant: "solid",
  },
  {
    title: "Login",
    href: "https://feedbackable.app",
    variant: "link",
  },
]

const Menu = ({ onClose = () => {} }) => {
  return (
    <Box
      ml={["auto"]}
      position={["fixed", null, null, "relative"]}
      zIndex="1000"
      bg="white"
      w={["100%", null, null, "auto"]}
      h={["100%", null, null, "auto"]}
      top="0"
      left="0"
      p={[8, null, null, 0]}
    >
      <Box
        position="absolute"
        right="2"
        top="6"
        display={["block", null, null, "none"]}
      >
        <IconButton
          variant="ghost"
          icon={<MdClose />}
          onClick={onClose}
          shadow="lg"
          rounded="full"
          fontSize="2xl"
          size="lg"
        />
      </Box>
      <Stack
        spacing="8"
        direction={["column", null, null, "row"]}
        maxW={["xs", null, null, "100%"]}
        mx="auto"
      >
        <Stack spacing="4" direction={["column", null, null, "row"]}>
          {menuItems.map((item, index) => (
            <Button key={index} as={Link} to={item.href} {...LinkButtonStyle}>
              {item.title}
            </Button>
          ))}
        </Stack>
        <Stack spacing="6" direction={["column", null, null, "row"]}>
          {callToActions.map((item, index) => (
            <Button
              key={index}
              as={item.href.match(/^https?:\/\//) ? "a" : Link}
              to={item.href}
              {...(item.variant === "link" && LinkButtonStyle)}
              {...(item.variant === "outline" && OutlineButtonStyle)}
              {...(item.variant === "solid" && SolidButtonStyle)}
            >
              {item.title}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const viewportWidth = useViewportWidth()
  const theme = useTheme()

  const [breakpoints, setBreakpoints] = useState()

  useEffect(() => {
    const testEl = document.createElement("div")
    testEl.style.opacity = 0
    document.body.appendChild(testEl)
    const _breakpoints = Object.keys(theme.breakpoints)
      .filter(k => ["sm", "md", "lg", "xl"].includes(k))
      .reduce((obj, k) => {
        testEl.style.width = theme.breakpoints[k]
        return { ...obj, [k]: parseFloat(getComputedStyle(testEl).width) }
      }, {})
    testEl.remove()
    setBreakpoints(_breakpoints)
  }, [])

  useEffect(() => {
    if (breakpoints && viewportWidth > breakpoints?.lg && isNavOpen) {
      setIsNavOpen(false)
    }
  }, [viewportWidth])

  return (
    <Box as="header" py="6">
      <Container>
        <Flex
          align="center"
          justifyContent={["space-between", null, "flex-start"]}
        >
          <Box>
            <Link to="/" className="header-brand">
              <Flex as="span" align="center">
                <Box as="span" pr="4">
                  <svg
                    width="2.5rem"
                    viewBox="0 0 303 303"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M152 40C98.5254 40 54.9464 82.3325 53 135.287V167.713C54.9464 220.668 98.5254 263 152 263H251V167.713V135.287C249.054 82.3325 205.475 40 152 40Z"
                      fill="#943BDC"
                    />
                    <path
                      d="M152.111 86C120.182 86 94.1621 111.224 93 142.778V144.772H112.325V143.475C113.105 122.263 130.563 105.307 151.985 105.307C173.407 105.307 190.865 122.263 191.645 143.475V222H226V202.977H211.222V142.778C210.06 111.224 184.04 86 152.111 86Z"
                      fill="#F0F8FE"
                    />
                    <path
                      d="M168 163.5C168 172.613 160.613 180 151.5 180C142.387 180 135 172.613 135 163.5C135 154.387 142.387 147 151.5 147C160.613 147 168 154.387 168 163.5Z"
                      fill="#F0F8FE"
                    />
                  </svg>
                </Box>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  letterSpacing="0.05rem;"
                  as="span"
                >
                  Feedbackable
                </Text>
              </Flex>
            </Link>
          </Box>
          <Box ml="auto" display={["block", null, null, "none"]}>
            <IconButton
              variant="ghost"
              icon={<AiOutlineMenu />}
              rounded="full"
              shadow="lg"
              fontSize="2xl"
              size="lg"
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          </Box>
          {breakpoints && viewportWidth <= breakpoints?.lg && (
            <>
              {isNavOpen && (
                <Portal>
                  <Fade in={isNavOpen}>
                    <Menu onClose={() => setIsNavOpen(false)} />
                  </Fade>
                </Portal>
              )}
            </>
          )}
          {(typeof window === "undefined" ||
            viewportWidth > breakpoints?.lg) && <Menu />}
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
