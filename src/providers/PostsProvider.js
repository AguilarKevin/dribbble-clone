import ky from 'ky'
import api from './ApiProvider'

export async function getImages(page) {
  return await ky(`${api.url}/shots?page=${page}`).json()
}

export async function getShot(id) {
  const response = await ky(`${api.url}/shots/${id}`, {}).json()
  return response.data
}

export async function getShotsByTag(tag) {
  const response = await ky(`${api.url}/tags/${tag}`).json()
  console.log(response)
  return response.data
}

export async function createPost() {}
