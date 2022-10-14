import express,{Express, Router, Request, Response} from 'express'
import axios from 'axios'
//和前端交互，协助性的接口
const app:Express = express()
// 后端 解决跨域问题
app.use('*',(req, res, next) => {
  res.header('Access-Control-Allow-Origin','*')
  next()
})
// 分模块
const router:Router = express.Router()
// 
app.use('/api', router)
// 
router.get('/list', async (req:Request, res: Response) => {
  const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf')
  res.json({
    data: result.data
  })
  console.log(res)
})

app.listen(8803,()=>{
  console.log('success server http://localhost:8803')
})
