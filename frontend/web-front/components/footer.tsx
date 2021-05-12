import { Flex, FlexProps } from "@chakra-ui/react"
import { ReactElement } from "react"

const Footer = (props: FlexProps): ReactElement => (
  <Flex as="footer" py="8rem" {...props} />
)

export default Footer
