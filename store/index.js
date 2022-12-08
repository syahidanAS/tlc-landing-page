export const getter = {
  isAuthenticated(state){
    return state.auth.loggedIn
  },
  loggedInUser(state){
    return state.auth.user
  }
}