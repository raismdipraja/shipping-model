import {Router} from 'express';
import IndexController from '../controllers/IndexController'


const router = Router()


router.get('/:id_seller/:status', IndexController.orderSearch.orderSearch);

export default router;