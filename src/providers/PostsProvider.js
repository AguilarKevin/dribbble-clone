import ky from 'ky'

export async function getImages(api, page) {
  return await ky(`${api.url}/shots?page=${page}`).json()
}

export async function getShot(api, id) {
  const response = await ky(`${api.url}/shots/${id}`, {}).json()
  return response.data
}

export async function getShotsByTag(api, tag) {
  const response = await ky(`${api.url}/tags/${tag}`).json()
  console.log(response)
  return response.data
}
