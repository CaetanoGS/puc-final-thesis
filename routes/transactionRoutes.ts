import express from "express";
import { POSSIBLE_CATEGORIES, POSSIBLE_SECTORS, createTransaction, validateCategory, validateSector } from "../controllers/transactionController";
import jwt from "jsonwebtoken"

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

transactionRouter.use((req, res, next) => {
  const cookiesList = parseCookies(req)
  const decoded = jwt.decode(cookiesList["session"], {complete: true});
  if (decoded === null){
    return res.status(401).send({detail: "Invalid token"});
  }
  next()
})


transactionRouter.post("/", async (req, res) => {
  if (!validateSector(req.body.sector))
    res.status(400).send({detail: `Invalid sector, please insert a sector that is part of ${POSSIBLE_SECTORS}`})  
  
  if(!validateCategory(req.body.category))
    res.status(400).send({detail: `Invalid category, please insert a category that is part of ${POSSIBLE_CATEGORIES}`})  

  const cookieList = parseCookies(req)
  const username = cookieList["username"]
  
  res.send(await createTransaction(username, req.body.value, req.body.category, req.body.sector))
});
