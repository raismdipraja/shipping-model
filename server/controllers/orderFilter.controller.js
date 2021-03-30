import {sequelize} from '../models/IndexModel'

const orderFilter = async (req, res)=>{
    const filterOrder = await sequelize.query(`select * from orders join account on account.acco_id = order_acco_id
    where order_acco_id_seller=:id_seller and order_stat_name=upper(:status)`,{
        replacements: {
            id_seller: req.params.id_seller,
            status: req.params.status
        }, type: sequelize.QueryTypes.SELECT
    })
    return res.send(filterOrder)
}







export default {orderFilter}