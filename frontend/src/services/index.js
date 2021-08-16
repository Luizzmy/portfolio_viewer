import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:3000/` : '/'
  // /routes/auth
  ///Authentication routes, the baseURL assumes build folder will be in backend folder

const authService = axios.create({
  baseURL,
  withCredentials: true
})

export const signupFn = userInfo =>
  authService.post('/signup', userInfo)

export const loginFn = userInfo =>
  authService.post('/login', userInfo)

export const userDetails= () => 
  authService.get(`/profile`)

export const currentUserFn = () =>
  authService.get('/current-user')

export const logoutFn = () =>
  authService.get('/logout')