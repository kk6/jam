import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import { getAllVideosData } from "../lib/videos"
import styles from "../styles/Home.module.css"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Video: React.FC = ({ video }) => {
  const url = `https://www.youtube.com/watch?v=${video.id}`
  return (
    <p>
      {video.title} / {video.scale} / {video.key} /{" "}
      <a target="_blank" href={url} rel="noopener noreferrer">
        link
      </a>
    </p>
  )
}

const Home: NextPage<Props> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Jam</h1>
        <div>
          {props.videos &&
            props.videos.map((video) => <Video key={video.id} video={video} />)}
        </div>
      </main>
    </div>
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
