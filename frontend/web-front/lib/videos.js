const baseURL = "http://backend-server/";

export async function getAllVideosData() {
  const res = await fetch(new URL(`${baseURL}api/video/`));
  const videos = await res.json();
  return videos;
}
