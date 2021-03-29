/*  gunakan salah satu untuk latihan, kita buat 3 route : 
    1. region-raw : menggunakan raw query
    2. region-seq : menggunakan method sequelize
    3. region-ctrl : bisnis logic dipisah di folder controller
*/


import orderShipping from './orderShipping';
import order from './order';
import filterOrder from './filterRoute'
import searchOrder from './searchRoute'


export default {
    orderShipping,
    order,
    filterOrder,
    searchOrder
};
