import { invoiceServices } from "./invoice.service.js";

const createInvoice = async (req, res) => {
  try {
    const payload = req.body;
    const result = await invoiceServices.createInvoiceInDB(payload);

    res.status(200).json({
      success: true,
      message: "invoice is created succesfully",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const getAllInvoices = async (req, res) => {
  try {
    const result = await invoiceServices.getAllInvoiceFromDB(req.query);

    res.status(200).json({
      success: true,
      message: "All Orders fetched successfully",
      meta: result?.meta,
      data: result?.data,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateInvoice = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await invoiceServices.updateInvoiceFromDB(id,req.body.status);

    res.status(200).json({
      success: true,
      message: "All Orders fetched successfully",
      meta: result?.meta,
      data: result?.data,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteInvoice = async (req, res) => {
  try {
    const Id = req.params.id;
    const result = await invoiceServices.deleteInvoiceFromDB(Id);

    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
      res.status(200).json({
        success: true,
        message: "Invoice is succesfully deleted",
        data: result,
      });
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } catch (err) {
    console.log(err);
  }
};

export const invoiceController = {
  createInvoice,
  getAllInvoices,
  updateInvoice,
  deleteInvoice,
};
