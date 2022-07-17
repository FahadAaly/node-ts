import {Request, Response} from "express";

export const test = async (req: Request, res: Response) => {
  try {
    res.send("test successfully");
  } catch (error) {
    console.log(error);
  }
};


export const addSuggestions = async (req: Request, res: Response) => {
  try {
    console.log("hello world")
  } catch (error) {
    console.log(error);
  }
};
