import ky from 'ky'
import api from './ApiProvider'

export async function getUser() {
  const user = await ky(`${api.url}/user`, {
    headers: {
      Authorization: api.token,
    },
  }).json()

  return user
}
