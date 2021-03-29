import {Router} from 'express';
import IndexController from '../controllers/IndexController'

const router = Router()


router.get('/:id_seller/:status', IndexController.orderFilter.orderFilter)

export default router;