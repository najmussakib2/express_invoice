import express from "express";
import { invoiceController } from "./invoice.controller.js";
const router = express.Router();

router.post("/invoice", invoiceController.createInvoice);

router.get("/invoice", invoiceController.getAllInvoices);

router.delete("/invoice/:id", invoiceController.deleteInvoice);

export const invoiceRouter = router;
