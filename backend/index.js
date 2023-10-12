// npm init   npm i express cors axios json-server  npm i nodemon  concurrently -D
//npm run json:server(在package.json中的script增加"json:server":"json-server --port 8000 --watch db.json")

const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const { handleErrors } = require('./middleware/errorMiddleware') //如何导出就要如何导入
//create web server
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',router)
//use error middleware at the end
app.use(handleErrors)

const PORT = 80
app.listen(PORT,function(){
  console.log("server is running on http://localhost:80");
})

//middleware 留意执行顺序 从上往下
//app.use(express.json())//parse JSON requests
//app.use(express.urlencoded({extended:true}))//parse URL-encoded requests
//app.use(cors())
//app.use(authMiddleware)//custom authentication middleware
//app.use(routes)//route handlers
//app.use(handleError)//error handing middleware (at the end)
