const HomeController=require('../controllers/home.controller')
const router = require('express').Router()
const mongoose = require('mongoose')

router.get('/',HomeController.threeBooksController)






module.exports=router
