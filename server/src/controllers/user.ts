import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig";
import express from "express";

// export const createUser = asyncHandler(async (req, res) => {
//   console.log("going");
//   res.send("creating a user");
//   // const { email } = req.body;
//   // console.log(email);
// });]
console.log("hit");
export const createUser = (req: any, res: any) => {
  console.log("creating user");
  res.send("creating a user");
};
export const getUser = (req: any, res: any) => {
  console.log("creating user");
  res.send("creating a user");
};
