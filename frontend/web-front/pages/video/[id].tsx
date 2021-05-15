import {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
  NextPage,
} from "next"
import { useRouter } from "next/router"
import {
  AspectRatio,
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"
import { sec2time } from "../../utils/times"
import { getVideoData } from "../../lib/videos"
import Layout from "../../components/layout"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Video: NextPage<Props> = (props) => {
  const router = useRouter()
  const { id } = router.query
  const src = `https://www.youtube.com/embed/${id}`

  const data = props.data

  return (
    <Layout>
      <Box padding="4">
        <Box maxW="4xl" borderWidth="1px" borderRadius="lg">
          <AspectRatio ratio={16 / 9}>
            <iframe title="naruto" src={src} allowFullScreen />
          </AspectRatio>
          <Box padding="4">
            <Heading as="h1" size="lg" color="gray.500">
              {data.title}
            </Heading>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="s"
              textTransform="uppercase"
            >
              {data.posted_at}
            </Box>
            <Box marginTop="1rem">
              <Table maxW="sm">
                <Thead>
                  <Tr>
                    <Th>キー</Th>
                    <Th>スケール</Th>
                    <Th>ソロ開始</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{data.key}</Td>
                    <Td>{data.scale}</Td>
                    <Td>{sec2time(data.solo_start_seconds)}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const data = await getVideoData(params.id)

  return {
    props: { data },
    revalidate: 3,
  }
}

export default Video
