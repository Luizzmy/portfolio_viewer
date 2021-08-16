import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
  `http://localhost:3000/` : '/'

  /// Portfolio routes, baseURL assumes build folder will be saved in backend folder
const portfolioService = axios.create({
  baseURL,
  withCredentials: true
})

////Portfolio CRUD
// get all
export const getUserPortfolios = () => 
portfolioService.get(`/user-portfolios`)

// details 
export const getPortfolioDetails = (_id) => 
portfolioService.get(`/portfolio/${_id}`)

// create
export const portfolioCreate = data => 
portfolioService.post('/new-portfolio', data)

// edit-update
export const portfolioUpdate = (id, portfolio) => 
portfolioService.put(`/edit/${id}`, portfolio)

//delete
export const portfolioDelete = id => 
portfolioService.get(`/delete/${id}`)