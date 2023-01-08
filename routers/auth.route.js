const route = require('express').Router()
const AuthController = require('../controllers/auth.controller')
const GuardAuth = require('./guardAuth')
const body = require('express').urlencoded({extended:true})



route.get('/register',GuardAuth.notAuth,AuthController.getRegisterPage)
route.post('/register',body,AuthController.postRegisterData)

route.get('/login',GuardAuth.notAuth,AuthController.getLoginPage)
route.post('/login',body,AuthController.postLoginData)


route.post('/logout',AuthController.logoutFunctionController)


module.exports=route