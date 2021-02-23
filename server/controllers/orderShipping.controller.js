// view data
const readOrderShippingMethod = async (req, res)=>{
    const orderShipping = await req.context.models.orderShipping.findAll();
    return res.send(orderShipping);
}


// filter data
const findOrderShippingMethod = async (req, res)=>{
    const orderShipping = await req.context.models.orderShipping.findByPk(
        req.params.oshipId
    );
    return res.send(orderShipping);
}


// add Data
const addOrderShippingMethod = async (req, res)=>{
    const { oship_id, oship_created_on, oship_ship_date,oship_arrival_date, oship_desc, oship_stat_name, oship_order_name, oship_addr_id, oship_expe_id} = req.body.data;
    const orderShipping = await req.context.models.orderShipping.create({
        oship_id: oship_id,
        oship_created_on: oship_created_on,
        oship_ship_date: oship_ship_date,
        oship_arrival_date: oship_arrival_date,
        oship_desc: oship_desc,
        oship_order_name: oship_order_name,
        oship_addr_id: oship_addr_id,
        oship_stat_name: oship_stat_name,
        oship_expe_id: oship_expe_id

    });
    return res.send(orderShipping);
}


// edit Data
const editOrderShippingMethod = async (req, res)=>{
    const {oship_created_on, oship_ship_date,oship_arrival_date, oship_desc, oship_stat_name, oship_order_name, oship_addr_id, oship_expe_id} = req.body.data;
    const orderShipping = await req.context.models.orderShipping.update({
        oship_created_on: oship_created_on,
        oship_ship_date: oship_ship_date,
        oship_arrival_date: oship_arrival_date,
        oship_desc: oship_desc,
        oship_order_name: oship_order_name,
        oship_addr_id: oship_addr_id,
        oship_stat_name: oship_stat_name,
        oship_expe_id: oship_expe_id
    },
    {
        returning: true,
        where: { oship_id: req.params.oshipId }
    });
    return res.send(true);
}

const deleteOrderShippingMethod = async (req, res)=>{
    const expedition = await req.context.models.orderShipping.destroy({
        where: {oship_id : req.params.oshipId}
    });
};



export default {
    readOrderShippingMethod,
    findOrderShippingMethod,
    addOrderShippingMethod,
    editOrderShippingMethod,
    deleteOrderShippingMethod
}