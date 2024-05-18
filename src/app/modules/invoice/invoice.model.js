import { Schema, model } from "mongoose";

const itemSchema = new Schema(
  {
    item: String,
    qty: Number,
    price: Number,
    amount: Number,
  },
  { _id: false }
);

const orderSchema = new Schema({
  orderId: String,
  cashier_name: String,
  customer_name: String,
  customer_phone: String,
  customer_address: String,
  delivery_charge: Number,
  paid_amount: Number,
  note: String,
  subTotal: Number,
  total: Number,
  due: Number,
  items: [itemSchema],
},{ timestamps: true });

orderSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.__v;
    return ret;
  },
});

export const Order = model("Order", orderSchema);
