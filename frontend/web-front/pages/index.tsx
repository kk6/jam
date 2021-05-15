import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import { getAllVideosData } from "../lib/videos"
import {
  Box,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"
import Link from "next/link"
import { TVideo } from "../lib/videos"
import Layout from "../components/layout"

type Props = InferGetStaticPropsType<typeof getStaticProps>

type ComponentProps = {
  video: TVideo
}

const Video = ({ video }: ComponentProps) => {
  const url = `https://www.youtube.com/watch?v=${video.id}`
  return (
    <Tr>
      <Td>
        <Link href={`/video/${video.id}`}>{video.title}</Link>
      </Td>
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
    <Layout>
      <Container maxW="container.xl">
        <Head>
          <title>Jam</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Box padding="4">
            <p>件数: {props.data.count}件</p>
            <p>全{props.data.total_pages}ページ</p>
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
                {props.data &&
                  props.data.results.map((video: TVideo) => (
                    <Video key={video.id} video={video} />
                  ))}
              </Tbody>
            </Table>
          </Box>
        </main>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllVideosData()

  return {
    props: { data },
    revalidate: 3,
  }
}

export default Home
