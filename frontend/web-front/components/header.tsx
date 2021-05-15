import { Flex, Heading, Link } from "@chakra-ui/react"
import { ReactElement } from "react"

const Header = (): ReactElement => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      marginBottom="2rem"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Link href="/">Jam</Link>
        </Heading>
      </Flex>
    </Flex>
  )
}

export default Header
