import QueryBuilder from "../QueryBuilder.js";
import { OrderSearchableFields } from "./invoice.const.js";
import { Order } from "./invoice.model.js";
import generateOrderID from "./invoiceGenarator.js";

const createInvoiceInDB = async (payload) => {
  const id = await generateOrderID(payload);
  payload.orderId = id;
  // const orderId = 'orderId'
  // payload[orderId] = ID;
  const result = await Order.create(payload);
  console.log("service 10", result);
  return result;
};

const getAllInvoiceFromDB = async (query) => {
  const resultQuery = new QueryBuilder(Order.find(), query)
    .search(OrderSearchableFields)
    .filter()
    .sort()
    .fields()
    .paginate()
    .limit();

  const result = await resultQuery.modelQuery;
  const meta = await resultQuery.countTotal();
  return { data: result, meta };
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
