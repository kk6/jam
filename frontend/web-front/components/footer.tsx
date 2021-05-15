import { Flex, FlexProps, Container, Text } from "@chakra-ui/react"
import { ReactElement } from "react"

const Footer = (props: FlexProps): ReactElement => (
  <Flex as="footer" py="8rem" {...props}>
    {" "}
    <Container maxW="container.xl">
      <Text>copyright © 2021 jam</Text>
    </Container>
  </Flex>
)

export default Footer
