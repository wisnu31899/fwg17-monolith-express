const router = require('express').Router()

const userController = require('../controllers/users.controller')

router.get('/', (req, res)=>{
    return res.render('index', {title:null})
})

router.get('/addNew', (req, res)=>{
    return res.render('users/addNew', {title: "Add New User"})
})

router.use('/users', require('./users.router'))

router.get('/about-us', (req, res)=>{
    return res.render('about-us', {title: "About Us"})
})

module.exports = router