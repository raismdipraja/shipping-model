import {Router} from 'express';
import orderShippingCtrl from '../controllers/orderShipping.controller';

const router = Router()

router.get('/', orderShippingCtrl.readOrderShippingMethod);
router.get('/:exroId', orderShippingCtrl.findOrderShippingMethod);
router.post('/', orderShippingCtrl.addOrderShippingMethod);
router.delete('/:exroId', orderShippingCtrl.deleteOrderShippingMethod);
router.put('/:exroId', orderShippingCtrl.editOrderShippingMethod);

export default router;