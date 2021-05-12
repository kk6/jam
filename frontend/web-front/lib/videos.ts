const baseURL = "http://backend-server/"

export type TVideo = {
  id: string
  title: string
  key: string
  scale: string
}

export const getAllVideosData = async (): Promise<TVideo> => {
  const url = `${baseURL}api/video/`
  const res = await fetch(url)
  const videos = await res.json()
  return videos
}
