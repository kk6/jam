const baseURL = "http://backend-server/"

export async function getAllVideosData() {
  const url = `${baseURL}api/video/`
  const res = await fetch(url)
  const videos = await res.json()
  return videos
}
