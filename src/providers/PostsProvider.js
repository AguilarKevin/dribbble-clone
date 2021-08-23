import ky from 'ky'

export async function getImages(api, page) {
  const data = await ky(`${api.url}/uploads?page=${page}`, {
    headers: {
      Authorization: api.token,
    },
  }).json()

  return data
}
