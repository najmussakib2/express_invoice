import { Order } from "./invoice.model.js";
import generateOrderID from "./invoiceGenarator.js";

const createInvoiceInDB = async (payload) => {
  const id = await generateOrderID(payload)
  payload.orderId = id
  // const orderId = 'orderId'
  // payload[orderId] = ID;
  const result = await Order.create(payload);
  console.log(result)
  return result;
};

const getAllInvoiceFromDB = async () => {
  const result = await Order.find();
  return result;
};

const deleteInvoiceFromDB = async (_id) => {
  const result = await Order.deleteOne({ _id });
  return result;
};

export const invoiceServices = {
  createInvoiceInDB,
  getAllInvoiceFromDB,
  deleteInvoiceFromDB,
};
