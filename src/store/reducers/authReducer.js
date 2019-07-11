import * as actionTypes from '../actions/actionTypes'

const initialState = {
  authenticated: false,
  loading: false,
  error: null,
  user: {
    id: '',
    firstName: '',
    lastName: ''
  },
  authModal: {
    signin: false,
    signup: false,
    modal: false
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SIGN_IN:
      return {
        ...state,
        authModal: {
          ...state.authModal,
          signin: true,
          signup: false,
          modal: true
        }
      }
    case actionTypes.SHOW_SIGN_UP:
      return {
        ...state,
        authModal: {
          ...state.authModal,
          signin: false,
          signup: true,
          modal: true
        }
      }
    case actionTypes.CLOSE_AUTH_MODAL:
      return {
        ...state,
        authModal: {
          ...state.authModal,
          signin: false,
          signup: false,
          modal: false
        }
      }
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.AUTH_USER:
      return {
        ...state,
        loading: false,
        authenticated: true,
        error: null,
        user: {
          ...state.user,
          id: action.userId,
          firstName: action.firstName,
          lastName: action.lastName
        }
      }
    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        loading: false,
        authenticated: false,
        error: action.error.message
      }
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
    case actionTypes.SIGN_OUT_USER:
      return {
        ...state,
        loading: false,
        authenticated: false,
        error: null,
        user: {
          ...state.user,
          userId: '',
          firstName: '',
          lastName: ''
        }
      }

    default:
      return state
  }
}

export default authReducer
