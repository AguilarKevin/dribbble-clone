import ky from 'ky'

export async function getImages(api, page) {
  return await ky(`${api.url}/shots?page=${page}`).json()
}

export async function getShot(api, id) {
  const response = await ky(`${api.url}/shots/${id}`, {}).json()
  return response.data
}
