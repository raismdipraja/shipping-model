import {Router} from 'express';
import IndexController from '../controllers/IndexController';

const router = Router()

router.get('/', IndexController.orderShipping.readOrderShippingMethod);
router.get('/:oshipId', IndexController.orderShipping.findOrderShippingMethod);
router.post('/', IndexController.orderShipping.addOrderShippingMethod);
router.delete('/:oshipId', IndexController.orderShipping.deleteOrderShippingMethod);
router.put('/:oshipId', IndexController.orderShipping.editOrderShippingMethod);

export default router;