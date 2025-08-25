import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).send("Welcome to Express API");
});

export default app;
