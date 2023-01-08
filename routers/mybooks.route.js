const route = require('express').Router()
const bookController=require('../controllers/book.controller')
const multer = require('multer')
const GuardAuth = require('./guardAuth')


route.get('/',bookController.getMybooksPage)
route.get('/delete/:id',bookController.deleteBookController)
route.get('/update/:id',bookController.getMybookUpdatePage)






route.post('/update',multer({
    storage : multer.diskStorage({
        destination:function(req, file, cb){
          cb(null, 'assets/uploads')
        },
        filename:function(req, file, cb){
            cb(null,  Date.now()+'-' +file.originalname )
        }
    })
    }).single('image'),
    GuardAuth.isAuth,bookController.postUpdateBookController)
// route.post('/update/:id',bookController.getMybooksPage)





module.exports=route
