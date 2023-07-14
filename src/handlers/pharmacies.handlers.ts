import { Pharmacies } from "../models/pharmacies.models";
import { Request, Response } from "express";
const pharmacy1 = new Pharmacies();

export const find = async (req: Request, res: Response) => {
  const lat = req.params.lat as unknown as number;
  const long = req.params.long as unknown as number;
  const name = req.params.name as string;
  const number = req.params.number as unknown as number;
  const radius = req.params.radius as unknown as number;
  if (
    typeof lat === "number" &&
    typeof long === "number" &&
    typeof name === "string" &&
    typeof number === "number" &&
    typeof radius === "number"
  ) {
    try {
      const list = await pharmacy1.searchNearbyPharmacies(
        lat,
        long,
        radius,
        name,
        number
      );
      if (list) {
        res.status(200).json({
          status: "found",
          data: list,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(404).json({
        status: "failed",
        message: "sorry,we can't find with us",
      });
    }
  } else {
    res.status(500).json({
      status: "failed",
      message: "invalid parameters",
    });
  }
};
