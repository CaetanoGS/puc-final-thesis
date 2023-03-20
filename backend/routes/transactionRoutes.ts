import express from "express";

const transactionRouter = express.Router();

transactionRouter.get("/", (req, res) => {
  res.send("Birds home page");
});

module.exports = transactionRouter;
