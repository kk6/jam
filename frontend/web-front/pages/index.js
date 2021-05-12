import Head from "next/head";
import { getAllVideosData } from "../lib/videos";
import styles from "../styles/Home.module.css";

export function Video({ video }) {
  const url = `https://www.youtube.com/watch?v=${video.id}`;
  return (
    <p>
      {video.title} / {video.scale} / {video.key} /{" "}
      <a target="_blank" href={url} rel="noopener noreferrer">
        link
      </a>
    </p>
  );
}

export default function Home({ videos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Jam</h1>
        <div>
          {videos &&
            videos.map((video) => <Video key={video.id} video={video} />)}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const videos = await getAllVideosData();

  return {
    props: { videos },
    revalidate: 3,
  };
}
