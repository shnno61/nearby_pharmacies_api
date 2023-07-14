import express, { Request, Response } from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import config from "./config";
const port = config.port as unknown as number;

const app: express.Application = express();
app.use(bodyParser.json());

app.use("/pharmacy", routes);
app.use((req: Request, res: Response) => {
  res
    .status(500)
    .json({ status: "failed", info: "invalid route" });
});

app.listen(port, function () {
  console.log(`starting app on: ${port}`);
});

export default app;
