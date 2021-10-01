import ky from 'ky'

export async function getUser() {
  const user = await ky(`${process.env.API_URL}/user`, {
    headers: {
      Authorization: '',
    },
  }).json()

  return user
}
