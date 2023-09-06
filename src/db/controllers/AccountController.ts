const AccountService = require("../services/AccountService");

import { Request, Response } from "express";

async function getAccounts(req: Request, res: Response) {
    try {
    const userAccount =  await AccountService.getAccounts(req.body);
    if(userAccount) return res.status(200).json(userAccount);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

async function createAccount(req: Request, res: Response) {
    try {
    const userAccount =  await AccountService.createAccount(req.body);
    if(userAccount) return res.status(200).json(userAccount);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

  async function editAccount(req: Request, res: Response) {
    try {
    const userAccount =  await AccountService.editAccount(req.body);
    if(userAccount) return res.status(200).json(userAccount);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
}

async function deleteAccount(req: Request, res: Response) {
  try {
  const userAccount =  await AccountService.deleteAccount(req.body);
  if(userAccount) return res.status(200).json(userAccount);
} catch (err) {
  console.log(err);
  return res.status(500).json({ message: err });
  }
};

module.exports = {
    createAccount,
    editAccount,
    deleteAccount,
    getAccounts,
};