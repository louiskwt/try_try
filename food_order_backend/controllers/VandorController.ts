import { Request, Response, NextFunction } from "express";
import { VandorLoginInput } from "../dto";
import { ValidatePassword } from "../utility";
import { FindVandor } from "./AdminController";

export const VandorLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = <VandorLoginInput>req.body;

  const existingVandor = await FindVandor("", email);

  if (existingVandor !== null) {
    // validation and give access
    const validation = await ValidatePassword(
      password,
      existingVandor.password,
      existingVandor.salt
    );

    if (validation) {
      return res.json(existingVandor);
    } else {
      return res.json({ message: "Password is not valid" });
    }
  }

  return res.json({ message: "Login credential not valid" });
};
