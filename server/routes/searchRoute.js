import {Router} from 'express';
import IndexController from '../controllers/IndexController'

const router = Router()

router.get('/:order_name', IndexController.orderSearch.orderSearch)


export default router;