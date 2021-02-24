import {Router} from 'express';
import orderShippingCtrl from '../controllers/orderShipping.controller';

const router = Router()

router.get('/', orderShippingCtrl.readOrderShippingMethod);
router.get('/:oshipId', orderShippingCtrl.findOrderShippingMethod);
router.post('/', orderShippingCtrl.addOrderShippingMethod);
router.delete('/:oshipId', orderShippingCtrl.deleteOrderShippingMethod);
router.put('/:oshipId', orderShippingCtrl.editOrderShippingMethod);

export default router;