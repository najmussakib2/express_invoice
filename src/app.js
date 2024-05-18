//app.ts
import express from "express";
const app = express();
import cors from "cors";
import { invoiceRouter } from "./app/modules/invoice/invoice.route.js";
import generateOrderID from "./app/modules/invoice/invoiceGenarator.js";

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", invoiceRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


export default app;
