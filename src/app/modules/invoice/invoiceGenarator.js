import { Order } from "./invoice.model.js";



const findLastOrderId = async () => {
  const lastOrder = await Order.findOne({}, { orderId: 1, _id: 0 }).sort({
    createdAt: -1,
  });

  console.log(lastOrder)

  return lastOrder?.orderId ? lastOrder.orderId.substring(6, 10) : '00';
  // return lastOrder?.orderId ? lastOrder.orderId.substring(4) : undefined;
};

const generateOrderID = async () => {
  const currentId = (await findLastOrderId()) || '00000';
  
  const prefix = 'IPN';
  const lastTwoDigitsOfYear = new Date().getFullYear().toString().slice(-2);
  // const timestamp = new Date(); // Use timestamp as the dynamic portion
  console.log(lastTwoDigitsOfYear)

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  const orderID = `${prefix}${lastTwoDigitsOfYear}${incrementedId}`;
  console.log(orderID)
  return orderID;
};

export default generateOrderID;