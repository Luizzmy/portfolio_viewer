const router = require('express').Router();
const Portfolio = require('../models/Portfolio');
const User = require('../models/User');

const {
  isAuth
}=require('../middlewares/auth')

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});




//Create portfolio
router.post('/new-portfolio', isAuth, async (req, res, next) => {
  const { fileName,
    header,
    CSVData,
} = req.body
const userId = req.user._id

if (!fileName) {
    return res
        .status(403)
        .json({ message: "Missing fileName" })
}
if (!header) {
  return res
      .status(403)
      .json({ message: "Missing header" })
}
if (!CSVData) {
  return res
      .status(403)
      .json({ message: "Missing CSVData" })
}

const newPortfolio = await Portfolio.create({
  fileName,
  header,
  CSVData,
})
await User.findByIdAndUpdate(userId, { $push: { portfolios: newPortfolio._id } })
res.status(201).json(newPortfolio)
});

//Update a portfolio
router.put('/edit/:portfolioId', isAuth, async (req, res, next) => {
  const { portfolioId } = req.params
  const { fileName,
    header,
    CSVData,
  } = req.body

  if (!fileName) {
    return res
        .status(403)
        .json({ message: "Missing fileName" })
}
if (!header) {
  return res
      .status(403)
      .json({ message: "Missing header" })
}
if (!CSVData) {
  return res
      .status(403)
      .json({ message: "Missing CSVData" })
}

  const updatePortfolio = await Portfolio
  .findByIdAndUpdate(portfolioId, {
    fileName,
    header,
    CSVData,
  }, { new: true })

  res.status(200).json(updatePortfolio)
});

//All usersPortfolios
router.get('/user-portfolios', isAuth, async (req, res, next) => {
  const userId = req.user._id
  const { portfolios } = await User.findById(userId).populate('portfolios')
  res.status(200).json(portfolios)
});

//Get portfolio
router.get('/portfolio/:portfolioId', isAuth, async (req, res, next) => {
  const { portfolioId } = req.params
  const portfolio = await Portfolio.findById(portfolioId).populate('userId')

  res.status(200).json(portfolio)
});

//Delete portfolio
router.get('/delete/:portfolioId', isAuth, async (req, res, next) => {
  const { portfolioId } = req.params
  await Portfolio.findByIdAndDelete(portfolioId)
  res.status(200).json({ message: 'portfolio deleted' })
});



module.exports = router;
