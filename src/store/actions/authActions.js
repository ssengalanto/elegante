import firebase from '../../firebase'
import * as actionTypes from './actionTypes'

/**
 * showSignin => opens sign-in authentication modal
 * showSignup => opens sign-up authentication modal
 * closeAuthModal => closes authentication modal
 * authStart => sets loading to true
 * authUser => handles successful authentication  | sets loading to false
 * authError => handles failed authentication | sets loading to false
 * clearError => clears authentication error
 * signupUser => sign-up new account using firebase api
 * signinUser => sign-in user using firebase api
 * signoutUser => sign-out user using firebase api
 * verifyAuth => monitoring the auth state changes using firebase api
 * setAuthUserDetails => saves the user details to database/firestore
 */

export const showSignin = () => ({ type: actionTypes.SHOW_SIGN_IN })
export const showSignup = () => ({ type: actionTypes.SHOW_SIGN_UP })
export const closeAuthModal = () => ({ type: actionTypes.CLOSE_AUTH_MODAL })
export const authStart = () => ({ type: actionTypes.AUTH_START })
export const authError = error => ({ type: actionTypes.AUTH_ERROR, error })
export const clearError = () => ({ type: actionTypes.CLEAR_ERROR })

export const authUser = (firstName, lastName, userId) => ({
  type: actionTypes.AUTH_USER,
  firstName,
  lastName,
  userId
})

export const signupUser = credentials => async dispatch => {
  try {
    dispatch(authStart())
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)

    await firebase
      .firestore()
      .collection('users')
      .doc(response.user.uid)
      .set({
        firstName: credentials.firstName.toLowerCase(),
        lastName: credentials.lastName.toLowerCase()
      })
    dispatch(closeAuthModal())
  } catch (error) {
    dispatch(authError(error))
  }
}

export const signinUser = credentials => async dispatch => {
  try {
    dispatch(authStart())
    await firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
    dispatch(closeAuthModal())
  } catch (error) {
    dispatch(authError(error))
  }
}

export const setAuthUserDetails = user => async dispatch => {
  const response = await firebase
    .firestore()
    .collection('users')
    .doc(user.uid)
    .get()

  const { firstName, lastName } = response.data()
  dispatch(authUser(firstName, lastName, user.uid))
}

export const signoutUser = () => {
  firebase.auth().signOut()
  return {
    type: actionTypes.SIGN_OUT_USER
  }
}

export const verifyAuth = () => dispatch => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(setAuthUserDetails(user))
    }
  })
}
