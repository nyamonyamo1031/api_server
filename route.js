import Router from 'router'
import finalhandler from 'finalhandler'
import {indexHandler} from './controller/indexController.js'
import {mockupHandler,mockupItemHandler} from './controller/mockupController.js'

const router = Router()

router.get("/",indexHandler)
router.get("/mockup",mockupHandler)
router.get("/mockup/:path",mockupItemHandler)

export const router_func = (req,res) =>{
    router(req,res,finalhandler(req,res))
}