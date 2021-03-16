import express, { Request, Response } from "express";
import { json } from "body-parser";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());

app.post("/", (request: Request, response: Response) => {
  console.log(request.body);

  response.send({});
});

app.listen(3000, () => {
  console.log("Started at port 3000");
});
