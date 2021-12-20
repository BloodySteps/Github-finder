import { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
const initialState = {
  users: [],
  isLoading: false,
}

const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const searchUsers = async text => {
    const params = new URLSearchParams({
      q: text,
    })
    dispatch({ type: 'SET_LOADING' })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    const { items } = await response.json()

    dispatch({ type: 'GET_USERS', payload: items })
  }

  const clearResults = () => dispatch({ type: 'CLEAR_RESULTS' })

  return (
    <GithubContext.Provider value={{ ...state, searchUsers, clearResults }}>
      {children}
    </GithubContext.Provider>
  )
}

GithubProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useGithubContext = () => {
  const context = useContext(GithubContext)
  if (context === undefined) {
    throw new Error('Github Context must be in Scope within Github Provider')
  }
  return context
}

export default GithubProvider
