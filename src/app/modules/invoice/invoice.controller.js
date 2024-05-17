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
    const result = await invoiceServices.getAllInvoiceFromDB();

    res.status(200).json({
      success: true,
      message: "invoices are retrieved succesfully",
      data: result,
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
  deleteInvoice,
};
