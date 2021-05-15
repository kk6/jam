export const optimizeUrl = (url: string) => {
  return url.replace("http://backend-server/", "http://localhost:8080/")
}
