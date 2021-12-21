import { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const initialState = {
  users: [],
  user: {},
  repos: [],
  isLoading: false,
}

const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GithubReducer, initialState)

  return (
    <GithubContext.Provider value={{ ...state, dispatch }}>
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
