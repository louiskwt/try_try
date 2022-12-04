import { Request, Response, NextFunction } from "express";
import { CreateVandorInput } from "../dto";
import { Vandor } from "../models";
import { GeneratePassword, GenerateSalt } from "../utility";

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

  const existingVandor = await Vandor.findOne({ email: email });

  if (existingVandor !== null) {
    return res.json({ Message: "A vandor has existed with this email ID" });
  }

  // generate a salt
  const salt = await GenerateSalt();
  // encrypt the pw using salt
  const userPasword = await GeneratePassword(password, salt);

  const CreatedVandor = await Vandor.create({
    name: name,
    address: address,
    pincode: pincode,
    foodType: foodType,
    email: email,
    password: userPasword,
    salt: salt,
    ownerName: ownerName,
    phone: phone,
    rating: 0,
    serviceAvailable: false,
    coverImages: [],
  });

  return res.json({
    CreatedVandor,
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
