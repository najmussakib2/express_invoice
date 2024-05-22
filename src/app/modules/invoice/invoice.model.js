import { Schema, model } from "mongoose";

const itemSchema = new Schema(
  {
    id: String,
    name: String,
    qty: String,
    price: String,
    amount: String,
  },
  { _id: false }
);

const orderSchema = new Schema({
  orderId: {
    type: String,
    unique: true
  },
  cashier_name: String,
  customer_name: String,
  customer_phone: String,
  customer_address: String,
  delivery_charge: Number,
  paid_amount: Number,
  note: {
    type:String,
    trim: true
  },
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
