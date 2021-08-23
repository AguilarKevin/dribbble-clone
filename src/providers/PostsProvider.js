import ky from 'ky'

export async function getImages(api) {
  const { data } = await ky(`${api.url}/uploads`, {
    headers: {
      Authorization: api.token,
    },
  }).json()

  return data
}
