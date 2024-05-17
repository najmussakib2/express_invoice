import { Order } from "./invoice.model.js";

const createInvoiceInDB = async (payload) => {
  const result = await Order.create(payload);
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
