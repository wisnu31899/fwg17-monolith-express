const userController = require('../controllers/users.controller')
const router = require('express').Router()

router.get('/', (req, res) => {
  return res.render('index', { title: null })
})

router.use('/users', require('./users.router'))

router.get('/insert-user', (req, res) => {
  return res.render('users/insert', { title: 'insert' })
})
router.post('/insert-user', userController.insertUser)

router.get('/about-us', (req, res) => {
  return res.render('about-us', { title: 'About Us' })
})

module.exports = router
