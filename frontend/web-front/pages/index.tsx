import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import { getAllVideosData } from "../lib/videos"
import {
  Box,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Video: React.FC = ({ video }) => {
  const url = `https://www.youtube.com/watch?v=${video.id}`
  return (
    <Tr>
      <Td>{video.title}</Td>
      <Td>{video.scale}</Td>
      <Td>{video.key}</Td>
      <Td>
        <a target="_blank" href={url} rel="noopener noreferrer">
          link
        </a>
      </Td>
    </Tr>
  )
}

const Home: NextPage<Props> = (props) => {
  return (
    <Container maxW="container.xl">
      <Head>
        <title>Jam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box padding="4">
          <Heading>Jam</Heading>
        </Box>

        <Box padding="4">
          <Table>
            <Thead>
              <Tr>
                <Th>タイトル</Th>
                <Th>スケール</Th>
                <Th>キー</Th>
                <Th>YouTube</Th>
              </Tr>
            </Thead>
            <Tbody>
              {props.videos &&
                props.videos.map((video) => (
                  <Video key={video.id} video={video} />
                ))}
            </Tbody>
          </Table>
        </Box>
      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const videos = await getAllVideosData()

  return {
    props: { videos },
    revalidate: 3,
  }
}

export default Home
