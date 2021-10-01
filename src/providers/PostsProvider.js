import ky from 'ky'

export async function getImages(page) {
  return await ky(`${process.env.REACT_APP_API_URL}/shots?page=${page}`).json()
}

export async function getShot(id) {
  const response = await ky(
    `${process.env.REACT_APP_API_URL}/shots/${id}`,
    {}
  ).json()
  return response.data
}

export async function getShotsByTag(tag) {
  const response = await ky(
    `${process.env.REACT_APP_API_URL}/tags/${tag}`
  ).json()
  console.log(response)
  return response.data
}

export async function createPost(data) {
  const shotFormData = new FormData()

  shotFormData.append('title', data.title)
  shotFormData.append('description', data.description)
  shotFormData.append('tags', data.tags)
  data.files.forEach(file => {
    shotFormData.append('media[]', file)
  })

  return await ky.post(`${process.env.REACT_APP_API_URL}/uploads/new`, {
    body: shotFormData,
    headers: {
      Authorization: '',
    },
  })
}
