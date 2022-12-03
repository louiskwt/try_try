import { Request, Response, NextFunction } from "express";
import { CreateVandorInput } from "../dto";

export const CreateVandor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    name,
    address,
    pincode,
    foodType,
    email,
    password,
    ownerName,
    phone,
  } = <CreateVandorInput>req.body;

  return res.json({
    name,
    address,
    pincode,
    foodType,
    email,
    password,
    ownerName,
    phone,
  });
};

export const GetVandors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const GetVandorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
