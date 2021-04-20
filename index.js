import http from 'http'
import {router_func} from './route.js'

const port = 8888
const server = http.createServer((req,res)=>{
    router_func(req,res)
});
server.listen(port)
