const baseURL = "http://backend-server/"

export type ListResponse = {
  count: number
  next: string
  previous: string
  results: [TVideo]
}

export type TVideo = {
  id: string
  title: string
  key: string
  scale: string
}

export const getAllVideosData = async (): Promise<ListResponse> => {
  const url = `${baseURL}api/video/`
  const res = await fetch(url)
  const results = await res.json()
  return results
}
