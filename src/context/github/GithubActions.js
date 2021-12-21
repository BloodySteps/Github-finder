import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
})

export const searchUsers = async text => {
  const params = new URLSearchParams({ q: text })
  const response = await github.get(`${GITHUB_URL}/search/users?${params}`)
  const { items } = await response.data

  return items
}

export const getUserAndRepos = async login => {
  const [user, repos] = await Promise.all([
    github.get(`${GITHUB_URL}/users/${login}`),
    github.get(`${GITHUB_URL}/users/${login}/repos`),
  ])

  return {
    user: user.data,
    repos: repos.data,
  }
}
