import {sequelize} from '../models/IndexModel'

const orderSearch = async (req, res)=>{
    const searchOrder = await sequelize.query(`select * from orders where order_name like :order_name
    `,{
        replacements: {
            order_name: "%"+req.params.order_name+"%"
            // id_seller:req.params.id_seller

        }, type: sequelize.QueryTypes.SELECT
    })
    return res.send(searchOrder)
}

export default {orderSearch}