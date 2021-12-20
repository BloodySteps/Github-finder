export default function GithubReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      }
    case 'CLEAR_RESULTS':
      return {
        ...state,
        users: [],
      }

    default:
      return state
  }
}
