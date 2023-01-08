const express = require('express')
const path = require('path')
const RouterHome = require('./routers/home.route')
const routerBook = require('./routers/book.route')
const RouterAuth = require('./routers/auth.route')
const routeMybooks = require('./routers/mybooks.route')
const routeContact = require('./routers/contact.route')
const routeAbout = require('./routers/about.route')
const session = require('express-session')
const MongoDbStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')




const app = express()






app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')

var Store = new MongoDbStore({
    uri:'mongodb://127.0.0.1:27017/library',
    Collection:'session'
})
app.use(flash())
app.use(session({
    secret:'this is my secret key kjfslqmsdfnqlsf',
    store:Store,
    resave:true,
    saveUninitialized:true
    
}))

app.use('/',RouterHome)
app.use('/books',routerBook)
app.use('/',RouterAuth)
app.use('/mybooks',routeMybooks)
app.use('/',routeContact)
app.use('/',routeAbout)


// app.get('/details',(req,res,next)=>{
//     res.render('details')
// })



// app.get('/contact',(req,res,next)=>{
//     res.render('contact',{verifUser:req.session.userId})
// })

// app.get('/about',(req,res,next)=>{
//     res.render('about',{verifUser:req.session.userId})
// })

// app.get('/mybooks',(req,res,next)=>{
//     res.render('mybooks',{verifUser:req.session.userId})
// })

// app.get('/addbook',(req,res,next)=>{
//     res.render('addbook',{verifUser:req.session.userId})
// })

// app.get('/login',(req,res,next)=>{
//     res.render('login')
// })

// app.get('/register',(req,res,next)=>{
//     res.render('register')
// })










app.listen(3000,()=>console.log('server run in port 3000'))