import {sequelize} from '../models/IndexModel'


const orderDikirim = async (req, res)=>{
    const jmlOrderDikirim = await sequelize.query(`select count(*) as order_dikirim from orders where 
    order_acco_id_seller=:id_seller and order_stat_name=upper(:status)`,{
        replacements: {
            id_seller: req.params.id_seller,
            status: req.params.status
        }, type: sequelize.QueryTypes.SELECT
    })
    return res.send(jmlOrderDikirim)
} 

export default {orderDikirim}