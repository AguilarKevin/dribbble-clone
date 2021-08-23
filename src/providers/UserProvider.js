import ky from 'ky'

export async function getUser(api) {
  const user = await ky(`${api.url}/user`, {
    headers: {
      Authorization: api.token,
    },
  }).json()

  return user
}
