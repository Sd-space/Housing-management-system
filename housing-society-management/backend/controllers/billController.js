// controllers/billController.js
const Bill = require("../models/Bill");

// Get all bills for the logged-in user
exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find({ user: req.user.id });
    res.json(bills);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Create a new bill (admin)
exports.createBill = async (req, res) => {
  const { user, amount, dueDate } = req.body;
  try {
    const bill = new Bill({
      user,
      amount,
      dueDate,
    });

    await bill.save();
    res.status(201).json(bill);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Pay bill
exports.payBill = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) return res.status(404).json({ msg: "Bill not found" });

    bill.status = "paid";
    await bill.save();
    res.json(bill);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
