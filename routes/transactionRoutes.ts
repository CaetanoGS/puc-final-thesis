import express from "express";
import { POSSIBLE_CATEGORIES, POSSIBLE_SECTORS, createTransaction, deleteTransaction, listTransactions, validateCategory, validateSector } from "../controllers/transactionController";
import jwt from 'jsonwebtoken';

export const transactionRouter = express.Router()


function parseCookies (request) {
  const list = {};
  const cookieHeader = request.headers?.cookie;
  if (!cookieHeader) return list;

  cookieHeader.split(`;`).forEach(function(cookie) {
      let [ name, ...rest] = cookie.split(`=`);
      name = name?.trim();
      if (!name) return;
      const value = rest.join(`=`).trim();
      if (!value) return;
      list[name] = decodeURIComponent(value);
  });

  return list;
}




transactionRouter.post("/", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'No credentials sent!' });
  }
  jwt.verify(req.headers.authorization.replace('Bearer ',''), process.env.TOKEN_SECRET, async function(error, decoded){
    if(error)
      res.status(403).send({detail: "Invalid or expired token"});
    
    if (!validateSector(req.body.sector))
      res.status(400).send({detail: `Invalid sector, please insert a sector that is part of ${POSSIBLE_SECTORS}`})  
    
    if(!validateCategory(req.body.category))
      res.status(400).send({detail: `Invalid category, please insert a category that is part of ${POSSIBLE_CATEGORIES}`})  
    
    res.send(await createTransaction(decoded.username, req.body.value, req.body.category, req.body.sector))
  });
});

transactionRouter.get("/", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'No credentials sent!' });
  }
  jwt.verify(req.headers.authorization.replace('Bearer ',''), process.env.TOKEN_SECRET, async function(error, decoded){
    if(error)
      res.status(403).send({detail: "Invalid or expired token"});
    res.status(200).send(await listTransactions(decoded.username));
  });
})

transactionRouter.delete("/:transactionId", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'No credentials sent!' });
  }
  jwt.verify(req.headers.authorization.replace('Bearer ',''), process.env.TOKEN_SECRET, async function(error, decoded){
    if(error)
      res.status(403).send({detail: "Invalid or expired token"});
      const deletedTransaction = await deleteTransaction(req.params.transactionId);
      if(deleteTransaction)
        res.status(204).send();
      res.status(404);
  });
});
